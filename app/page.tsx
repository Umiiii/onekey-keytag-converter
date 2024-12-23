import DotmapConverter from './components/DotmapConverter';

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">BIP39 Dotmap Converter</h1>
        <p className="text-sm mb-4 font-[family-name:var(--font-geist-mono)]">
          Convert BIP39 words to dotmap patterns. Each word uses 12 dots representing:
          <br />
          2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1
        </p>
        <DotmapConverter />
      </main>
    </div>
  );
}
