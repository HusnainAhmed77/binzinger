import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const introVideo = "/assets/videos/intro.mp4";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={introVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Deep Gradient Overlay - Guaranteed Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-black/15 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Orange Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 blur-[150px] rounded-full" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-primary-foreground animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Refreshing Saudi Arabia Since 1976</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-tight animate-fade-up delay-100">
            Crafting <span className="text-gradient">Refreshing</span><br />
            Moments Every Day
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-200">
            A trusted joint venture between Binzagr Company and CO-RO A/S,
            bringing the finest fruit juices and beverages to families across the Kingdom.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 group rounded-full shadow-lg hover:-translate-y-1"
            >
              <Link href="/brands">
                Explore Our Brands
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-white hover:bg-primary transition-all duration-300 text-lg px-8 py-6 group rounded-full bg-black/50 backdrop-blur-md shadow-lg hover:-translate-y-1"
            >
              <Link href="/about" className="flex items-center">
                <Play className="mr-3 h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Innovative Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group cursor-pointer z-20">
        <span className="text-[8px] font-semibold uppercase tracking-[0.5em] text-white/50 group-hover:text-primary transition-colors">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full bg-white/60"
          />
        </div>
      </div>
    </section>
  );
}
