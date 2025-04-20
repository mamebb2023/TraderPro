"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    return router.push("/dashboard");
  }

  return (
    <div className="relative h-screen flex-center overflow-hidden">
      <div className="opacity-100 md:opacity-50 lg:opacity-20 absolute inset-0 flex-center">
        <Image
          src="/tp-logo-white.png"
          alt="landing page background"
          width={1000}
          height={1000}
          className="max-w-full max-h-full object-cover"
          draggable={false}
        />
      </div>

      <div className="absolute flex-center flex-wrap w-[800px] blur-[100px] opacity-80 rotate-animation">
        <div className="size-90 bg-purple-dino-dark rounded-full shrink-0" />
        <div className="size-90 bg-ocean-blue-dark rounded-full shrink-0" />
        <div className="size-90 bg-surge-green-dark rounded-full shrink-0" />
      </div>

      <div className="z-1 flex-1 flex-center">{children}</div>
    </div>
  );
};

export default Layout;
