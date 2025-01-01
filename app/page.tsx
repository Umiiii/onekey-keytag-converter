import DotmapConverter from './components/DotmapConverter';
import NetworkDetector from './components/NetworkDetector';

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">BIP39 Dotmap Converter</h1>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=Umiiii&repo=onekey-keytag-converter&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="150"
          height="20"
          title="GitHub"
          className="mb-4"
        ></iframe>
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
