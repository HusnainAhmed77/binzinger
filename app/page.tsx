"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { TrustTicker } from "@/components/home/TrustTicker";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { ManufacturingSection } from "@/components/home/ManufacturingSection";
import { StatsSection } from "@/components/home/StatsSection";
import {
  AboutSection,
  BrandsSection,
  WhyChooseUsSection,
  MarketPresenceSection,
  CTASection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustTicker />
      <AboutSection />
      <BrandsSection />
      <ManufacturingSection />
      <StatsSection />
      <MarketPresenceSection />
      <SustainabilitySection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}
