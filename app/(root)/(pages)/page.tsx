"use client";

import CallToAction1 from "@/components/CallToAction1";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  return (
    <>
      <Hero />
      <Features />
      <CallToAction1 />
    </>
  );
}
