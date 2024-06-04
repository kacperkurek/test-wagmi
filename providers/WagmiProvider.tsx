"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { ReactNode } from "react";
import { WagmiProvider as BaseWagmiProvider, State } from "wagmi";
import { wagmiConfig } from "../config/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: ReactNode;
  initialState: State | undefined;
};

// Create modal
createWeb3Modal({
  wagmiConfig: wagmiConfig,
  projectId: "test",
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});
const WagmiProvider = ({ children, initialState }: Props) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <BaseWagmiProvider config={wagmiConfig} initialState={initialState}>
        {children}
      </BaseWagmiProvider>
    </QueryClientProvider>
  );
};

export default WagmiProvider;
