"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const suntopImg = "/assets/images/suntop.png";
const suncolaImg = "/assets/images/suncola.png";
const sunquickImg = "/assets/images/sunquick.png";

const brands = [
    {
        id: "suntop",
        name: "Suntop",
        category: "Fruit Juice & Drinks",
        tagline: "Pure Fruit Goodness",
        description: "Delicious fruit juices made from the finest ingredients, loved by children and adults alike. A staple of Saudi heritage for generations.",
        flavors: ["Orange", "Berry Mix", "Apple", "Mango", "Mixed Fruit", "Pineapple", "Blackcurrant"],
        packaging: ["Tetra Pak 200ml", "Tetra Pak 1L", "PET Bottles"],
        productType: "Ready-to-Drink Juice",
        image: suntopImg,
        link: "https://suntop.com.sa",
        accent: "bg-primary",
        gradient: "from-primary/20 to-accent-yellow/5"
    },
    {
        id: "suncola",
        name: "Suncola",
        category: "Carbonated Beverage",
        tagline: "Refreshingly Different",
        description: "A unique, non-carbonated cola experience crafted specifically for the regional palate. The perfect blend of deep cola taste and smooth refreshment.",
        flavors: ["Classic Cola"],
        packaging: ["Tetra Pak 200ml", "Tetra Pak 1L", "Cans 330ml"],
        productType: "Non-Carbonated Beverage",
        image: suncolaImg,
        link: "https://www.suncola.com",
        accent: "bg-secondary",
        gradient: "from-secondary/20 to-primary/5"
    },
    {
        id: "sunquick",
        name: "Sunquick",
        category: "Fruit Concentrate",
        tagline: "Concentrated Flavor",
        description: "Premium fruit concentrates that bring families together. Made with real fruit juice, one bottle creates liters of delicious refreshing moments.",
        flavors: ["Orange", "Tropical", "Mandarin", "Lemon", "Mixed Berries"],
        packaging: ["PET Bottles 330ml", "PET Bottles 700ml"],
        productType: "Fruit Concentrate",
        image: sunquickImg,
        link: "https://www.sunquick.com",
        accent: "bg-primary",
        gradient: "from-accent-yellow/20 to-primary/5"
    },
];

export default function BrandsPage() {
    return (
        <div className="bg-white min-h-screen text-secondary overflow-hidden">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/sources/brands-hero.jpeg"
                        alt="Binzagr Co-Ro Portfolio"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-primary font-semibold tracking-[0.3em] uppercase text-xs mb-6">Our Portfolio</h4>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                            A Taste of Quality <br /> <span className="text-primary italic text-gradient-primary">Crafted for Generations</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
                            Decades of quality, innovation, and refreshing moments tailored for the region.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Brand Showcases */}
            <div className="relative z-10 space-y-8 pb-16">
                {brands.map((brand, i) => (
                    <BrandSection key={brand.id} brand={brand} index={i} />
                ))}
            </div>
        </div>
    );
}

function BrandSection({ brand, index }: { brand: typeof brands[0], index: number }) {
    const isEven = index % 2 === 0;

    return (
        <section id={brand.id} className="py-4 md:py-6 relative group">
            <div className="container mx-auto px-4">
                {/* Single Container Div for Image + Content */}
                <div className={`bg-white rounded-3xl p-8 md:p-12 lg:p-16 border border-secondary/20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-square flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl p-8">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="relative z-10 w-full max-w-[280px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`w-full lg:w-1/2 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'} space-y-6`}
                    >
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-secondary/10 text-secondary">
                                {brand.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-2">
                                {brand.name}
                            </h2>
                            <h3 className="text-xl md:text-2xl font-serif italic text-primary">
                                {brand.tagline}
                            </h3>
                        </div>

                        <p className={`text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto ${isEven ? 'lg:mx-0 lg:mr-auto' : 'lg:mx-0 lg:ml-auto'}`}>
                            {brand.description}
                        </p>

                        <div className={`flex flex-wrap gap-2 justify-center ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                            {brand.flavors.map((flavor, idx) => (
                                <span key={idx} className="px-3 py-1 rounded-full bg-muted text-secondary/70 text-[10px] font-semibold uppercase tracking-widest">
                                    {flavor}
                                </span>
                            ))}
                        </div>

                        <div className={`space-y-3 pt-2 ${isEven ? '' : 'flex flex-col items-center lg:items-end'}`}>
                            <div className={`flex items-center gap-3 ${isEven ? '' : 'justify-center lg:justify-end'}`}>
                                <span className="text-xs font-semibold uppercase tracking-wider text-secondary/40">Product Type:</span>
                                <span className="text-sm font-bold text-secondary">{brand.productType}</span>
                            </div>
                            <div className={isEven ? '' : 'text-center lg:text-right'}>
                                <div className="text-xs font-semibold uppercase tracking-wider text-secondary/40 mb-2">Available Formats:</div>
                                <div className={`flex flex-wrap gap-2 justify-center ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                                    {brand.packaging.map((format, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full bg-secondary/5 text-secondary text-xs font-semibold border border-secondary/10">
                                            {format}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={`flex justify-center ${isEven ? 'lg:justify-start' : 'lg:justify-end'} pt-4`}>
                            <Button asChild size="lg" className={`${brand.accent} text-white border-0 hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-full px-8 py-5 text-base shadow-lg`}>
                                <a href={brand.link} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${brand.name} website (opens in new window)`}>
                                    Explore {brand.name} <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
