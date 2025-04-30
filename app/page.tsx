import CallToAction1 from "@/components/landing/CallToAction1";
import CallToAction2 from "@/components/landing/CallToAction2";
import CallToAction3 from "@/components/landing/CallToAction3";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Pricing from "@/components/landing/Pricing";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CallToAction1 />
      <WhyChooseUs />
      <CallToAction3 />
      <Pricing />
      <CallToAction2 />
      <Footer />
    </>
  );
};

export default Page;
