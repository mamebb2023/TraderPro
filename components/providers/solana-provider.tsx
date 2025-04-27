"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import {
  createSolanaDevnet,
  createWalletUiConfig,
  WalletUi,
  createSolanaMainnet,
} from "@wallet-ui/react";
import "@wallet-ui/tailwind/index.css";

export const WalletButton = dynamic(
  async () => (await import("@wallet-ui/react")).WalletUiDropdown,
  {
    ssr: false,
  }
);

export const ClusterButton = dynamic(
  async () => (await import("@wallet-ui/react")).WalletUiClusterDropdown,
  {
    ssr: false,
  }
);

const config = createWalletUiConfig({
  clusters: [createSolanaDevnet(), createSolanaMainnet()],
});

export function SolanaProvider({ children }: { children: ReactNode }) {
  return <WalletUi config={config}>{children}</WalletUi>;
}
