import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShieldCheck, Users, Globe2, Lightbulb, Sprout } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Globe2,
    title: "Strategic Heritage",
    tier: "Legacy & Trust",
    description: "Our 1976 foundation combines Binzagr's Saudi market leadership with CO-RO's Danish manufacturing excellence.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    tier: "Operational Strength",
    description: "International safety standards integrated into every phase of production, ensuring consistent excellence in every drop.",
  },
  {
    icon: Lightbulb,
    title: "Agile Innovation",
    tier: "Operational Strength",
    description: "A dynamic portfolio strategy that evolves with regional consumer trends while maintaining industrial-scale precision.",
  },
  {
    icon: Users,
    title: "Certified Excellence",
    tier: "People & Impact",
    description: "A \"Great Place to Work®\" certified environment dedicated to the professional growth of our 300+ specialists.",
  },
  {
    icon: Sprout,
    title: "Sustainable Growth",
    tier: "People & Impact",
    description: "Driving localized economic impact and responsible resource management consistent with national development goals.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section className="py-20 md:py-32 bg-zinc-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <SectionHeading
            title="The Binzagr Coro Advantage"
            subtitle="An authoritative legacy built on industrial scale, international standards, and a deep commitment to the Kingdom's future."
            className="mb-0"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl border border-zinc-200/60 bg-white hover:border-primary/30 transition-all duration-500 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm"
            >
              <div className="absolute top-0 left-8 right-8 h-1 bg-primary/10 rounded-b-full group-hover:bg-primary/30 transition-colors" />

              <div className="mb-6 relative">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-500">
                  <pillar.icon className="h-7 w-7 text-secondary group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                </div>
              </div>

              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary/40 mb-3">
                {pillar.tier}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
