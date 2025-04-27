"use client";

import { ReactQueryProvider } from "./react-query-provider";
import React from "react";
import { SolanaProvider } from "./solana-provider";
import { SessionProvider } from "next-auth/react";

export function AppProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <SolanaProvider>{children}</SolanaProvider>
      </ReactQueryProvider>
    </SessionProvider>
  );
}
