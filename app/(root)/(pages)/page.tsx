"use client";

import CallToAction1 from "@/components/CallToAction1";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import CallToAction2 from "@/components/CallToAction2";
import HowItWorks from "@/components/HowItWorks";

export default function UserInfo() {
  return (
    <>
      <Hero />
      <Features />
      <CallToAction1 />
      <HowItWorks />
      <Pricing />
      <CallToAction2 />
    </>
  );
}
