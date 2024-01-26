// Styles required for @cosmos-kit/react modal
// import "@interchain-ui/react/styles";

import { GasPrice } from "@cosmjs/stargate";
import { wallets as keplrExtensionWallets } from "@cosmos-kit/keplr-extension";
import { wallets as leapExtensionWallets } from "@cosmos-kit/leap-extension";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import type { ReactNode } from "react";
import { NETWORK } from "../utils/constants";

export interface MappedCoin {
  readonly denom: string;
  readonly fractionalDigits: number;
}

export type CoinMap = Readonly<Record<string, MappedCoin>>;

export interface FeeOptions {
  upload: number;
  exec: number;
  init: number;
}

export interface AppConfig {
  readonly chainId: string;
  readonly chainName: string;
  readonly addressPrefix: string;
  readonly rpcUrl: string;
  readonly httpUrl?: string;
  readonly faucetUrl?: string;
  readonly feeToken: string;
  readonly stakingToken: string;
  readonly coinMap: CoinMap;
  readonly gasPrice: number;
  readonly fees: FeeOptions;
  readonly codeId?: number;
}

export const mainnetConfig: AppConfig = {
  chainId: "stargaze-1",
  chainName: "Stargaze",
  addressPrefix: "stars",
  rpcUrl: "https://rpc.stargaze-apis.com/",
  httpUrl: "https://rest.stargaze-apis.com/",
  feeToken: "ustars",
  stakingToken: "ustars",
  coinMap: {
    ustars: { denom: "STARS", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
};

export const testnetConfig: AppConfig = {
  chainId: "elgafar-1",
  chainName: "elgafar-1",
  addressPrefix: "stars",
  rpcUrl: "https://rpc.elgafar-1.stargaze-apis.com/",
  httpUrl: "https://rest.elgafar-1.stargaze-apis.com/",
  feeToken: "ustars",
  stakingToken: "ustars",
  coinMap: {
    ustars: { denom: "STARS", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  fees: {
    upload: 1500000,
    init: 500000,
    exec: 200000,
  },
};

export const getConfig = (network: string): AppConfig => {
  if (network === "mainnet") return mainnetConfig;
  return testnetConfig;
};

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const { gasPrice, feeToken } = getConfig(NETWORK);
  return (
    <ChainProvider
      assetLists={assets}
      chains={chains}
      endpointOptions={{
        endpoints: {
          stargaze: {
            rpc: ["https://rpc.stargaze-apis.com/"],
            rest: ["https://rest.stargaze-apis.com/"],
          },
          stargazetestnet: {
            rpc: ["https://rpc.elgafar-1.stargaze-apis.com/"],
            rest: ["https://rest.elgafar-1.stargaze-apis.com/"],
          },
        },
        isLazy: true,
      }}
      sessionOptions={{
        duration: 1000 * 60 * 60 * 12, // 12 hours
      }}
      signerOptions={{
        signingCosmwasm: () => ({
          gasPrice: GasPrice.fromString(`${gasPrice}${feeToken}`),
        }),
        signingStargate: () => ({
          gasPrice: GasPrice.fromString(`${gasPrice}${feeToken}`),
        }),
      }}
      wallets={[...keplrExtensionWallets, ...leapExtensionWallets]}
    >
      {children}
    </ChainProvider>
  );
};
