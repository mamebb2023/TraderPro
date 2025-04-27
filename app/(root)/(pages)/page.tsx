"use client";

import CallToAction1 from "@/components/landing/CallToAction1";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import CallToAction2 from "@/components/landing/CallToAction2";
import HowItWorks from "@/components/landing/HowItWorks";

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
