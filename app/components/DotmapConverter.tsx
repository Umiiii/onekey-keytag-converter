'use client';

import { useState } from 'react';
import { WORD_LIST } from '../lib/wordlist';

const PHRASE_OPTIONS = [12, 15, 18, 24];
const DOT_VALUES = [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];

export default function DotmapConverter() {
  const [selectedLength, setSelectedLength] = useState<number>(12);
  const [dots, setDots] = useState<boolean[][]>(
    Array(selectedLength).fill(null).map(() => Array(12).fill(false))
  );

  const calculateWord = (dotArray: boolean[]): { index: number; word: string; value: number } => {
    const value = dotArray.reduce((sum, isSet, index) => {
      return sum + (isSet ? DOT_VALUES[index] : 0);
    }, 0);
    const safeValue = value % WORD_LIST.length;
    return {
      index: safeValue,
      word: WORD_LIST[safeValue],
      value: value
    };
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
        {dots.map((wordDots, wordIndex) => {
          const result = calculateWord(wordDots);
          return (
            <div key={wordIndex} className="flex items-center gap-4">
              <div className="w-6 text-right">{wordIndex + 1}</div>
              <div className="flex items-center gap-1">
                {[0, 1, 2].map((group) => (
                  <div key={group} className="flex gap-1">
                    {Array.from({ length: 4 }, (_, i) => i + group * 4).map((i) => (
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
                    {group < 2 && <div className="w-2" />} {/* Delimiter */}
                  </div>
                ))}
              </div>
              <div className="font-[family-name:var(--font-geist-mono)] text-sm whitespace-nowrap">
                #{result.value} {result.word}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 