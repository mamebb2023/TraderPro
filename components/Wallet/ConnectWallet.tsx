"use client";

import { useState } from "react";
import { SolanaSignIn } from "@solana/wallet-standard-features";
import { useWallets } from "@wallet-standard/react";
import { WalletButton } from "@/components/Wallet/WalletButton";
import Button from "@/components/shared/Button";
import Loading from "../shared/Loading";

export default function ConnectWallet() {
  const wallets = useWallets();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Filter wallets that support Sign In With Solana
  const walletsThatSupportSignIn = wallets.filter((wallet) =>
    wallet.features.includes(SolanaSignIn)
  );

  return (
    <div className="relative">
      <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <div className="flex items-center">
          Connect Wallet
          <i
            className={`bx bx-chevron-down transition-all ${
              isDropdownOpen && "rotate-180"
            }`}
          />
        </div>
      </Button>

      {isDropdownOpen && walletsThatSupportSignIn.length > 0 && (
        <div className="absolute mt-2 w-full bg-glass shadow-lg z-10 rounded-lg overflow-hidden">
          <ul className="p-1">
            {walletsThatSupportSignIn.map((wallet) => (
              <li key={wallet.name}>
                <WalletButton
                  wallet={wallet}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
