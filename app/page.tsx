import DotmapConverter from './components/DotmapConverter';
import NetworkDetector from './components/NetworkDetector';

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">BIP39 Dotmap Converter</h1>
        <NetworkDetector />
        <p className="text-sm mb-4 font-[family-name:var(--font-geist-mono)]">
          See https://github.com/OneKeyHQ/bip39-dotmap for more information.
          <br />
        </p>
        <DotmapConverter />
      </main>
    </div>
  );
}
