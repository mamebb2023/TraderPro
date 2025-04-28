"use client";

import {
  AccountBalance,
  AccountTokens,
  AccountTransactions,
} from "@/components/account/account-ui";
import Copy from "@/components/shared/Copy";
import Divider from "@/components/shared/Divider";
import { ellipsify } from "@/lib/utils";
import { assertIsAddress } from "@solana/kit";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const params = useParams();
  const address = useMemo(() => {
    if (!params.address || typeof params.address !== "string") {
      return;
    }
    assertIsAddress(params.address);
    return params.address;
  }, [params]);
  if (!address) {
    return <div>Error loading account</div>;
  }

  return (
    <div className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between mt-20">
      <div className="flex-center w-[90%] lg:w-[50%]">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between text-lg mb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">Wallet:</span> {ellipsify(address)}
              <Copy address={address} />
            </div>
            <div className="flex items-center gap-2">
              <AccountBalance address={address} />{" "}
              <Image
                src="/sol-icon.png"
                alt="Solana Logo"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="flex flex-col bg-glass rounded-lg p-4">
            <AccountTokens address={address} />
            <Divider color="white" opacity="0.5" width="90" />
            <AccountTransactions address={address} />
          </div>

          <div className="flex-center">
            <button
              className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 flex items-center gap-2 cursor-pointer hover:bg-red-600 transition duration-200"
              onClick={() => {
                signOut();
                toast.success("Logout successful", {
                  duration: 2000,
                  icon: "👋",
                });
              }}
            >
              Logout
              <i className="bx bx-log-out"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-center w-[90%] lg:w-[50%]">Tracking</div>
    </div>
  );
};

export default Page;
