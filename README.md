# BIP39 Dotmap converter
Turn BIP39 words into dotmap. Use 12 dots per word to record your mnemonic phrase.

12 dots represent: 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1

For instance:

#63 amazing = 32, 16, 8, 4, 2, 1

| ○○○○ | ○○●● | ●●●● |

#977 key = 512 + 256 + 128 + 64 + 16 + 1

| ○○●● | ●●○● | ○○○● |


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
