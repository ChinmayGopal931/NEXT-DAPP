import React from "react";
import type { AppProps } from "next/app";
//Importing Next Themes
import { ThemeProvider } from "next-themes";
//TanStack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//Importing Layout

import Layout from "@/layout";
//Importing Styles
import "@/assets/styles/globals.scss";
//Raimbow Kit
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  connectorsForWallets,
  RainbowKitProvider,
  lightTheme,
  Theme,
} from "@rainbow-me/rainbowkit";
import {
  ledgerWallet,
  trustWallet,
  braveWallet,
  okxWallet,
  argentWallet,
  bitskiWallet,
  dawnWallet,
  imTokenWallet,
  injectedWallet,
  coinbaseWallet,
  mewWallet,
  omniWallet,
  safeWallet,
  tahoWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets";
//Wagmi
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  goerli,
  bsc,
  polygon,
  arbitrum,
  avalanche,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
//Merge
import merge from "lodash.merge";
import { ChainProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { wallets } from "@cosmos-kit/keplr";

const { publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    bsc,
    polygon,
    arbitrum,
    avalanche,
    ...(process.env.ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_ID ||
  "12aecce612332ba0a0b113c19978a069";
// const { wallets } = getDefaultWallets({
//   appName: "Next dApp Template",
//   projectId,
//   chains,
// });

// const connectors = connectorsForWallets([
//   ...wallets,
//   {
//     groupName: "Other",
//     wallets: [
//       ledgerWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       braveWallet({ chains }),
//       okxWallet({ projectId, chains }),
//       argentWallet({ projectId, chains }),
//       bitskiWallet({ chains }),
//       dawnWallet({ chains }),
//       imTokenWallet({ projectId, chains }),
//       injectedWallet({ chains }),
//       coinbaseWallet({ chains, appName: "Next dApp" }), // "Next dApp" is the name of the app
//       mewWallet({ chains }),
//       omniWallet({ projectId, chains }),
//       safeWallet({ chains }),
//       tahoWallet({ chains }),
//       zerionWallet({ projectId, chains }),
//     ],
//   },
// ]);

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

const theme = merge(lightTheme(), {
  colors: {
    accentColor: "#FF801F",
    accentColorForeground: "#fff",
    actionButtonSecondaryBackground: "#DADDD8",
    connectButtonBackground: "#fff",
    connectButtonBackgroundError: "#fff",
    connectButtonInnerBackground: "#fff",
    connectButtonText: "#000",
    connectButtonTextError: "#FF494A",
  },
} as Theme);

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ChainProvider
        chains={chains} // supported chains
        assetLists={assets} // supported asset lists
        wallets={wallets} // supported wallets
      >
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ChainProvider>
    </ThemeProvider>
  );
}
