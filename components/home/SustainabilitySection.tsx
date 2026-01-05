import { motion } from "framer-motion";
import { Leaf, Recycle, Globe } from "lucide-react";

export function SustainabilitySection() {
    return (
        <section className="py-20 md:py-32 bg-primary/5 overflow-hidden relative border-y border-secondary/5">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Imagery */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/assets/sources/shutterstock_479487457-scaled.jpg"
                            alt="Binzagr Coro Sustainability"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-secondary/20" />
                        <div className="absolute bottom-8 left-8 right-8 p-8 glass-card rounded-2xl">
                            <h3 className="text-2xl font-bold text-secondary mb-2 uppercase">Vision 2030 Aligned</h3>
                            <p className="text-secondary/80">Leading the way in sustainable beverage production and distribution across the Kingdom.</p>
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Our Commitment</h4>
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-secondary">
                                Sustainable Future for the Next <span className="text-primary italic">Generations</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At Binzagr Coro, sustainability isn't just a goal; it's our core responsibility.
                                We are committed to reducing our environmental footprint while delivering the
                                quality you trust.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                {
                                    icon: <Leaf className="w-6 h-6 text-primary" />,
                                    title: "Eco-Friendly Packaging",
                                    desc: "Transitioning to 100% recyclable materials across all our product lines by 2026."
                                },
                                {
                                    icon: <Recycle className="w-6 h-6 text-primary" />,
                                    title: "Waste Reduction",
                                    desc: "State-of-the-art manufacturing processes that minimize water and energy consumption."
                                },
                                {
                                    icon: <Globe className="w-6 h-6 text-primary" />,
                                    title: "Vision 2030 Goals",
                                    desc: "Supporting the Saudi Green Initiative through reforestation and clean energy adoption."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors group"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-secondary text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
