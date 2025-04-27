"use client";

import { AppProviders } from "@/components/providers/app-providers";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProviders>
      <div className="bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-black h-screen overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div id="page" className="relative z-10 h-full overflow-auto">
          {children}
        </div>
      </div>
    </AppProviders>
  );
};

export default Layout;
