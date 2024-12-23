'use client';

import { useState } from 'react';
import { WORD_LIST } from '../lib/wordlist';

const PHRASE_OPTIONS = [12, 15, 18, 24];
const DOT_VALUES = [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];

export default function DotmapConverter() {
  const [selectedLength, setSelectedLength] = useState<number>(12);
  const [dots, setDots] = useState<boolean[][]>(
    Array(selectedLength).fill(Array(12).fill(false))
  );

  const calculateWord = (dotArray: boolean[]): string => {
    const value = dotArray.reduce((sum, isSet, index) => {
      return sum + (isSet ? DOT_VALUES[index] : 0);
    }, 0);
    const safeValue = value % WORD_LIST.length;
    return `#${safeValue} ${WORD_LIST[safeValue]}`;
  };

  const toggleDot = (wordIndex: number, dotIndex: number) => {
    const newDots = dots.map((word, wIdx) => {
      if (wordIndex === wIdx) {
        const newWord = [...word];
        newWord[dotIndex] = !newWord[dotIndex];
        return newWord;
      }
      return [...word];
    });
    setDots(newDots);
  };

  const handleLengthChange = (length: number) => {
    setSelectedLength(length);
    setDots(Array(length).fill(null).map(() => Array(12).fill(false)));
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 flex-wrap">
        {PHRASE_OPTIONS.map((length) => (
          <button
            key={length}
            onClick={() => handleLengthChange(length)}
            className={`px-4 py-2 rounded ${
              selectedLength === length
                ? 'bg-foreground text-background'
                : 'border border-foreground'
            }`}
          >
            {length} words
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {dots.map((wordDots, wordIndex) => (
          <div key={wordIndex} className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: 12 }, (_, i) => i).map((i) => (
                <button
                  key={i}
                  onClick={() => toggleDot(wordIndex, i)}
                  className={`w-8 h-8 rounded-full border ${
                    wordDots[i]
                      ? 'bg-foreground border-foreground'
                      : 'bg-transparent border-foreground'
                  }`}
                  aria-label={`Toggle dot ${i + 1}`}
                >
                  {wordDots[i] ? '●' : '○'}
                </button>
              ))}
            </div>
            <div className="font-[family-name:var(--font-geist-mono)] text-sm">
              {calculateWord(wordDots)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 