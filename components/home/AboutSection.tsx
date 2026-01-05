import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "lucide-react";

const logoIcon = "/assets/images/logo-icon.png";

export function AboutSection() {
  return (
    <Section className="bg-muted/30 pb-10 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <SectionHeading
              title="Manufacturing Excellence"
              subtitle="Precision Engineering on a Global Scale"
              align="left"
              className="mb-8"
            />
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Established in 1976, Binzagr Coro is a strategic union between <strong>Binzagr Company</strong> and <strong>CO-RO A/S</strong>.
                We have redefined the beverage landscape in the Kingdom through industrial precision and international safety standards.
              </p>
              <p>
                Our Jeddah-based facility is one of the region's most sophisticated manufacturing hubs,
                producing the brands that Saudi families have trusted for nearly five decades.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-secondary transition-all duration-500 rounded-full px-10 shadow-xl group">
                <Link href="/about" className="flex items-center gap-3">
                  <span className="font-bold uppercase tracking-wider text-sm">Learn More About Us</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square flex items-center justify-center shadow-2xl group">
              <img
                src="/assets/sources/1W7A0711-scaled.jpg"
                alt="Binzagr Legacy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-6 right-4 md:-top-10 md:right-10 z-30 animate-fade-in-up delay-300">
              <div className="bg-white p-4 md:p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-center border border-black/5 hover:scale-105 transition-transform duration-500">
                <span className="text-3xl md:text-4xl font-semibold text-primary tracking-tighter">45+</span>
                <span className="text-[10px] md:text-xs font-semibold text-secondary uppercase tracking-widest mt-1">Years of<br />Excellence</span>
              </div>
            </div>
            {/* Floating Products & Character Overlay */}
            <div className="absolute bottom-4 left-0 right-0 flex items-end justify-start px-8">
              <div className="flex items-end -space-x-4 transform translate-y-2 hover:translate-y-0 transition-transform duration-500">
                {/* Products */}
                <img
                  src="/assets/sources/1-81.png"
                  alt="Suntop Purple"
                  className="w-16 md:w-20 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-110 hover:-translate-y-4 hover:-rotate-6 transition-all duration-300 z-10"
                />
                <img
                  src="/assets/sources/2-51.png"
                  alt="Suntop Pink"
                  className="w-20 md:w-24 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20 -mb-1 hover:scale-110 hover:-translate-y-6 transition-all duration-300"
                />
                <img
                  src="/assets/sources/3-31.png"
                  alt="Suntop Green"
                  className="w-16 md:w-20 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-110 hover:-translate-y-4 hover:rotate-6 transition-all duration-300 z-10"
                />
              </div>

              {/* Mascot */}
              <div className="relative -ml-4 z-30 mb-0">
                <img
                  src="/assets/sources/4-1.png"
                  alt="Mascot"
                  className="w-28 md:w-36 h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] animate-pulse-slow hover:scale-110 hover:rotate-3 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
