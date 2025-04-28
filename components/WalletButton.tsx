// app/components/WalletButton.tsx
"use client";

import { useSignIn } from "@solana/react";
import type { UiWallet } from "@wallet-standard/react";
import { signIn } from "next-auth/react";
import Loading from "./shared/Loading";
import toast from "react-hot-toast";

export function WalletButton({
  wallet,
  isLoading = false,
  setIsLoading,
}: {
  wallet: UiWallet;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}) {
  const walletSignIn = useSignIn(wallet);

  const handleClick = async () => {
    if (isLoading) return;

    const nonce = crypto.randomUUID();
    const message = `Sign in to TrackerPro with ${wallet.name}:${nonce}`;

    try {
      setIsLoading(true);

      // 1. Get signature from wallet
      const { account } = await walletSignIn({
        statement: message,
      });

      console.log("Account:", account);

      // 2. Authenticate with NextAuth
      const result = await signIn("credentials", {
        redirect: false,
        wallet: account.address,
      });

      if (result?.ok) {
        toast.success("Wallet Connected!");
      }

      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (err) {
      console.error("Authentication error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="w-full px-4 py-2 text-left hover:bg-gray-50/20 transition-all cursor-pointer flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="flex gap-2 items-center">
        <img src={wallet.icon} alt={wallet.name} className="w-5 h-5" />
        {wallet.name}
      </div>
      {isLoading && <Loading />}
    </button>
  );
}
