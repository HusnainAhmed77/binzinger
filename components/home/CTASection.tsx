import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-white/20 blur-[100px] rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-yellow/30 blur-[80px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            Whether you're a distributor, retailer, or looking for career opportunities,
            we'd love to hear from you. Let's create refreshing moments together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 text-lg px-10 py-6 group shadow-orange hover:shadow-lg hover:-translate-y-1"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="hover:bg-primary text-white bg-neutral-800 transition-all duration-500 text-lg px-10 py-6 rounded-full font-bold shadow-2xl"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
