"use client";
import React from "react";
import HeroSlider from "@/app/components/HeroSlider";
import SubSlider from "@/app/components/SubSlider";
import SpiritVideo from "@/app/components/SpiritVideo";
import ClientsSaySection from "@/app/components/ClientsSaySection";
import PricingSection from "@/app/components/PrincingSection";
import ContactUsSection from "@/app/components/ContactUsSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <SubSlider />
      <SpiritVideo />
      <ClientsSaySection />
      <PricingSection />
      <ContactUsSection />
      

    </>
  );
}