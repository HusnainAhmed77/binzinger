import { motion } from "framer-motion";

const certifications = [
    "ISO 9001",
    "ISO 22000",
    "SASO QUALITY MARK",
    "HACCP CERTIFIED",
    "SFDA APPROVED",
    "VISION 2030 ALIGNED"
];

const gptwLogo = "/assets/sources/Best-place-to-work-PNG-768x257.png";

export function TrustTicker() {
    return (
        <div className="bg-white border-y border-secondary/5 py-12 overflow-hidden select-none">
            <div className="container mx-auto px-4 mb-10">
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-4"
                    >
                        <img
                            src={gptwLogo}
                            alt="Great Place to Work certified"
                            className="h-20 md:h-28 w-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                        />
                        <div className="h-px w-24 bg-primary/20" />
                    </motion.div>
                    <p className="text-center text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] text-secondary/60">
                        Global Standards & Industrial Excellence
                    </p>
                </div>
            </div>
            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap"
                >
                    {[...certifications, ...certifications].map((cert, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 mx-8 text-lg md:text-xl font-bold text-secondary/40 uppercase tracking-widest grayscale transition-all duration-500 hover:text-primary hover:grayscale-0"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                            {cert}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
