"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const logo = "/assets/images/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Brands", path: "/brands", hasMegaMenu: true },
  { name: "Logistics", path: "/distribution" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const brandsMenuData = [
  { name: "Suntop", tagline: "Pure Fruit Goodness", icon: "/assets/images/suntop.png", path: "/brands#suntop", color: "from-orange-500/20 to-yellow-500/20" },
  { name: "Suncola", tagline: "Refreshingly Different", icon: "/assets/images/suncola.png", path: "/brands#suncola", color: "from-red-500/20 to-orange-500/20" },
  { name: "Sunquick", tagline: "Concentrated Flavor", icon: "/assets/images/sunquick.png", path: "/brands#sunquick", color: "from-yellow-500/20 to-orange-500/20" },
];


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md shadow-lg py-3 border-b border-white/5"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <img
            src={logo}
            alt="Binzagr Coro"
            className={cn(
              "h-8 md:h-9 w-auto object-contain transition-all duration-300",
              isScrolled && "brightness-0 invert opacity-90"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.path}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative py-4"
            >
              <Link
                href={link.path}
                className={cn(
                  "relative flex items-center gap-1.5 text-base transition-all duration-300 hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded",
                  pathname === link.path
                    ? "font-bold text-primary"
                    : isScrolled
                      ? "font-normal text-white/90"
                      : ["/", "/about", "/brands", "/distribution", "/contact", "/terms", "/privacy", "/careers"].includes(pathname)
                        ? "font-normal text-white"
                        : "font-normal text-brand-dark"
                )}
              >
                {link.name}
                {link.hasMegaMenu && <ChevronDown className={cn("w-4 h-4 transition-transform", hoveredLink === link.name && "rotate-180")} aria-hidden="true" />}
                {pathname === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full"
                  />
                )}
              </Link>

              <AnimatePresence>
                {link.hasMegaMenu && hoveredLink === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-2xl mt-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] overflow-hidden"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-secondary to-secondary/90 px-6 py-4">
                      <p className="text-white/90 text-xs font-semibold uppercase tracking-widest">Our Brands</p>
                    </div>

                    {/* Brand Items */}
                    <div className="p-3">
                      {brandsMenuData.map((brand, index) => (
                        <Link
                          key={brand.name}
                          href={brand.path}
                          className="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200"
                        >
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${brand.color} p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                            <img src={brand.icon} alt={brand.name} className="w-full h-full object-contain drop-shadow-sm" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{brand.name}</h4>
                            <p className="text-xs text-muted-foreground">{brand.tagline}</p>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-secondary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-secondary/10 px-6 py-3 bg-muted/30">
                      <Link href="/brands" className="text-xs font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1">
                        View All Products
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>


        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden relative z-50 p-2 transition-colors",
            isMobileMenuOpen ? "text-white" : "text-white/90 hover:text-white"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-8 w-8 drop-shadow-md" />
          ) : (
            <Menu className="h-8 w-8 drop-shadow-md" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 h-[100dvh] bg-zinc-950 backdrop-blur-xl md:hidden transition-all duration-300 z-40 overflow-y-auto",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-3xl font-semibold uppercase tracking-tight transition-colors py-2",
                  pathname === link.path
                    ? "text-primary"
                    : "text-white/80 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="bg-gradient-primary mt-4 rounded-full px-8 text-lg">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
