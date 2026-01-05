import { motion } from "framer-motion";
import { ShieldCheck, Factory, Zap } from "lucide-react";

export function ManufacturingSection() {
    return (
        <section className="bg-white py-20 md:py-32 border-t-8 border-muted/50 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
            <div className="grid lg:grid-cols-2 min-h-[700px]">
                {/* Left: Manufacturing Video Background */}
                <div className="relative overflow-hidden group">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/videos/about_binzagr.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent opacity-90" />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>

                    <div className="relative h-full flex flex-col justify-end p-12 md:p-20 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <div className="w-16 h-1.5 bg-primary mb-6" />
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                Industrial <br />
                                <span className="text-primary italic">Precision</span>
                            </h2>
                            <p className="text-white/80 text-lg max-w-md">
                                State-of-the-art manufacturing infrastructure in Jeddah, setting the benchmark for beverage production in the region.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Right: Technical Capabilities */}
                <div className="bg-neutral-950 p-12 md:p-24 flex flex-col justify-center text-white relative">
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <h4 className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Capabilities & Scale</h4>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase">
                                Industrial <br />
                                <span className="text-primary italic">Excellence</span>
                            </h2>
                        </div>

                        <div className="grid gap-10">
                            {[
                                {
                                    icon: <Factory className="w-6 h-6 text-primary" />,
                                    title: "Fully Automated Facility",
                                    desc: "IoT-enabled production lines ensuring zero human contact and maximum efficiency."
                                },
                                {
                                    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                                    title: "Hygiene & Quality Standards",
                                    desc: "Uncompromising compliance with international ISO 22000 and HACCP certifications."
                                },
                                {
                                    icon: <Zap className="w-6 h-6 text-primary" />,
                                    title: "Industrial Precision",
                                    desc: "High-velocity manufacturing delivering millions of refreshing moments daily."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6 group p-4 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/70 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[
                                        "/assets/sources/1W7A0711-scaled.jpg",
                                        "/assets/sources/1W7A0491-scaled.jpg",
                                        "/assets/sources/shutterstock_479487457-scaled.jpg"
                                    ].map((src, i) => (
                                        <div key={i} className="relative w-12 h-12 rounded-full border-2 border-neutral-950 overflow-hidden bg-neutral-800 hover:scale-125 hover:z-20 transition-all duration-300">
                                            <img src={src} className="w-full h-full object-cover" alt="Manufacturing Detail" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-white/70">
                                    <span className="text-white font-semibold text-lg block italic">Vision 2030 Aligned</span>
                                    Driving Saudi Arabia's industrial localization goals.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
