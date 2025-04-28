import { copy } from "@/lib/utils";
import React from "react";
import toast from "react-hot-toast";

const Copy = ({ address }: { address: string }) => {
  return (
    <div
      className="text-xs flex-center gap-2 p-2 rounded-full text-gray-700 hover:text-white hover:bg-gray-500/20 transition-all cursor-pointer"
      onClick={() => {
        copy(address);
        toast.success("Copied to clipboard", {
          duration: 2000,
        });
      }}
    >
      <i className="bx bx-copy"></i>
    </div>
  );
};

export default Copy;
