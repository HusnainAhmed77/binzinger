"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, MapPin, Globe } from "lucide-react";

const cities = [
    { name: "Riyadh", x: 600, y: 350, id: "riyadh" },
    { name: "Jeddah", x: 300, y: 400, id: "jeddah" },
    { name: "Dammam", x: 700, y: 250, id: "dammam" },
    { name: "Khobar", x: 740, y: 270, id: "khobar" },
];

const connections = [
    { from: "Jeddah", to: "Riyadh" },
    { from: "Riyadh", to: "Dammam" },
    { from: "Dammam", to: "Khobar" },
];

export default function DistributionPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const galleryImages = [
        "/assets/sources/unnamed.webp",
        "/assets/sources/unnamed (1).webp",
        "/assets/sources/unnamed (2).jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/sources/logistics-hero.png" className="w-full h-full object-cover opacity-60" alt="Logistics Center" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-primary font-semibold tracking-[0.3em] uppercase text-xs mb-6">Logistics Excellence</h4>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                            Global Export Hub <br /> <span className="text-primary italic text-gradient-primary">Nationwide Reach</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
                            Operating a sophisticated logistics network that spans the Kingdom,
                            and serving as a strategic <strong>Exporting Hub</strong> for GCC and North African countries.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Stats */}
                        <div className="lg:col-span-1 space-y-8">
                            {[
                                { icon: <Truck />, title: "500+ Vehicles", desc: "A modern fleet optimized for temperature-controlled logistics." },
                                { icon: <MapPin />, title: "25 centers", desc: "Strategic distribution hubs across all major Saudi regions." },
                                { icon: <Globe />, title: "100% Coverage", desc: "Reaching over 30,000 retail outlets daily." },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 p-6 glass-card rounded-2xl"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-secondary text-lg">{stat.title}</h4>
                                        <p className="text-muted-foreground">{stat.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Map */}
                        <div className="lg:col-span-2 relative bg-secondary/5 rounded-3xl p-4 md:p-8 overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
                            </div>
                            <svg
                                viewBox="0 0 1000 700"
                                className="w-full h-full max-w-4xl scale-[1.2] md:scale-100 transition-transform"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Simplified Saudi Arabia SVG Path */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    d="M250 150 L350 100 L550 80 L750 120 L850 250 L820 450 L700 550 L500 620 L300 580 L150 450 L180 250 Z"
                                    fill="currentColor"
                                    className="text-secondary/10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />

                                {/* Animated Connections */}
                                {connections.map((conn, i) => {
                                    const from = cities.find(c => c.name === conn.from)!;
                                    const to = cities.find(c => c.name === conn.to)!;
                                    return (
                                        <motion.line
                                            key={i}
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1, delay: 1.5 + i * 0.5 }}
                                            x1={from.x}
                                            y1={from.y}
                                            x2={to.x}
                                            y2={to.y}
                                            stroke="hsl(var(--primary))"
                                            strokeWidth="2"
                                            strokeDasharray="8 8"
                                        />
                                    );
                                })}

                                {/* City Dots */}
                                {cities.map((city, i) => (
                                    <g key={city.id}>
                                        <motion.circle
                                            initial={{ scale: 0 }}
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 2 + i * 0.3 }}
                                            cx={city.x}
                                            cy={city.y}
                                            r="12"
                                            fill="hsl(var(--primary) / 0.2)"
                                        />
                                        <circle
                                            cx={city.x}
                                            cy={city.y}
                                            r="6"
                                            fill="hsl(var(--primary))"
                                        />
                                        <text
                                            x={city.x}
                                            y={city.y + 25}
                                            textAnchor="middle"
                                            className="fill-secondary font-bold text-xs uppercase tracking-tighter"
                                        >
                                            {city.name}
                                        </text>
                                    </g>
                                ))}
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-32 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 text-left">
                            <div className="w-16 h-1.5 bg-primary" />
                            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight uppercase">Strategic <br /><span className="text-primary italic">Infrastructure</span></h2>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Our logistics ecosystem is built on precision. With multi-temperature storage facilities
                                and a fleet of over 500 specialized vehicles, we maintain the integrity of our brands
                                at every touchpoint from Riyadh to the edges of the Kingdom.
                            </p>
                        </div>
                        <div className="relative group h-[500px]">
                            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full w-full bg-secondary/5">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentSlide}
                                        src={galleryImages[currentSlide]}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.7 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        alt="Warehouse Infrastructure"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent z-10" />

                                {/* Slider Indicators */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {galleryImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-primary w-6" : "bg-white/50 hover:bg-white"
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
