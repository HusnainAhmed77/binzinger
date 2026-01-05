"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShoppingBag, Store, Utensils, Truck, Globe2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const channels = [
    {
        title: "Modern Trade",
        description: "Deep penetration in major hypermarkets and supermarket chains across the Kingdom.",
        icon: ShoppingBag,
        stats: "1,500+ Outlets",
    },
    {
        title: "Traditional Trade",
        description: "Extensive wholesale and retail network serving traditional marketplaces and local stores.",
        icon: Store,
        stats: "15,000+ Retailers",
    },
    {
        title: "Foodservice / HoReCa",
        description: "Preferred partner for premium hotels, restaurants, and catering services nationwide.",
        icon: Utensils,
        stats: "Trusted Partner",
    },
    {
        title: "Regional Distributors",
        description: "Strategic partnerships ensuring local availability in every province and remote region.",
        icon: Truck,
        stats: "Local Expertise",
    },
    {
        title: "Export Capability",
        description: "Efficient cross-border logistics reaching key markets across the GCC and MENA region.",
        icon: Globe2,
        stats: "Global Standards",
    },
];

export function MarketPresenceSection() {
    return (
        <Section className="bg-white overflow-hidden relative">
            {/* Subtle Map Reference Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-secondary">
                    <path d="M20,40 Q30,20 50,20 T80,40 T70,70 T40,80 T20,60 Z" />
                    {/* Abstract shape representing Saudi Arabia outline loosely */}
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <SectionHeading
                            title=""
                            subtitle="Architecting the beverage supply chain across the Kingdom and beyond with unmatched industrial scale."
                            align="left"
                            className="mb-0"
                        />
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight -mt-4">
                            Market Presence & <span className="text-primary">Distribution</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 bg-secondary/5 px-6 py-3 rounded-2xl h-fit">
                        <MapPin className="text-primary h-5 w-5" />
                        <span className="text-secondary font-semibold text-sm tracking-tight uppercase">Nationwide Coverage</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {channels.map((channel, index) => (
                        <motion.div
                            key={channel.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:border-primary/20 transition-all duration-500 group flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                                <channel.icon className="text-secondary h-7 w-7 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-lg font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">
                                {channel.title}
                            </h3>

                            <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
                                {channel.description}
                            </p>

                            <div className="pt-4 border-t border-zinc-200/60 mt-auto">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary/40 group-hover:text-primary/60 transition-colors">
                                    {channel.stats}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
