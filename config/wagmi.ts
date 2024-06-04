import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage, http } from "wagmi";
import {
  scroll,
  scrollSepolia,
  zetachain,
  zetachainAthensTestnet,
  zkSync,
  zkSyncSepoliaTestnet,
  xLayer,
  xLayerTestnet,
} from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com

const metadata = {
  name: "Test",
  description: "Test",
  url: "https://test.xyz",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const developmentConfig = defaultWagmiConfig({
  projectId: "test",
  metadata,
  chains: [
    scrollSepolia,
    zetachainAthensTestnet,
    zkSyncSepoliaTestnet,
    xLayerTestnet,
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [scrollSepolia.id]: http(),
    [zetachainAthensTestnet.id]: http(),
    [zkSyncSepoliaTestnet.id]: http(),
    [xLayerTestnet.id]: http(),
  },
});

export const wagmiConfig = developmentConfig;

export const supportedChains = wagmiConfig.chains.map((chain) => chain.id);
