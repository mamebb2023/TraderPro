"use client";

import { lamportsToSol } from "@/lib/utils";
import { Address } from "@solana/kit";
import { useGetBalance } from "./account-methods";

export function AccountBalance({ address }: { address: Address }) {
  const query = useGetBalance({ address });

  return query.data ? lamportsToSol(Number(query.data)) : "...";
}
// https://nd-326-444-187.p2pify.com/9de47db917d4f69168e3fed02217d15b/
