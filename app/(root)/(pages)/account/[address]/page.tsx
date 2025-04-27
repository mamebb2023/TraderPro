"use client";

import { AccountBalance } from "@/components/account/account-ui";
import { copy, ellipsify } from "@/lib/utils";
import { assertIsAddress } from "@solana/kit";
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
    <div className="min-h-[80vh]  flex-center flex-col">
      <div className="max-w-md">
        <div className="flex items-center justify-between text-lg mb-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Wallet:</span> {ellipsify(address)}
            <div
              className="text-xs flex-center gap-2 p-2 rounded-full text-gray-500 hover:bg-gray-500/20 transition cursor-pointer"
              onClick={() => {
                copy(address);
                toast.success("Copied to clipboard", {
                  duration: 2000,
                });
              }}
            >
              <i className="bx bx-copy"></i>
            </div>
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

        <div className="bg-glass rounded-lg p-4">
          <div className="flex justify-between">
            <div className="">
              <div className="text-lg font-bold">Address</div>
              <div className="text-sm text-gray-300">{address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
