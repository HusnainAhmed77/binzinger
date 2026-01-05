"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/use-in-view";
import { useCounter } from "@/hooks/use-counter";
import { useEffect } from "react";
import { Award, Users, Building, Calendar } from "lucide-react";

const stats = [
  {
    id: "years",
    value: 45,
    suffix: "+",
    label: "Years of Excellence",
    icon: Calendar,
    color: "text-primary",
  },
  {
    id: "employees",
    value: 300,
    suffix: "+",
    label: "Team Members",
    icon: Users,
    color: "text-accent",
  },
  {
    id: "products",
    value: 50,
    suffix: "+",
    label: "Products",
    icon: Building,
    color: "text-accent-yellow",
  },
  {
    id: "certifications",
    value: 5,
    suffix: "",
    label: "Quality Certifications",
    icon: Award,
    color: "text-primary",
  },
];

function StatCard({
  stat,
  isInView,
}: {
  stat: (typeof stats)[0];
  isInView: boolean;
}) {
  const { count, startAnimation } = useCounter({
    end: stat.value,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      startAnimation();
    } else {
      // Optional: reset count when leaving view to be ready for next entrance
      // Although startAnimation handles it, this ensures a clean state
    }
  }, [isInView, startAnimation]);

  const Icon = stat.icon;

  return (
    <div className="text-center group">
      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-secondary/5 mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 ${stat.color}`} aria-hidden="true">
        <Icon className="h-10 w-10" />
      </div>
      <p className="text-4xl md:text-6xl font-semibold mb-2 text-secondary tabular-nums tracking-tighter">
        {count}
        {stat.suffix}
      </p>
      <p className="text-muted-foreground font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs">{stat.label}</p>
    </div>
  );
}

export function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <Section className="bg-brand-bg relative overflow-hidden border-y border-secondary/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(242,111,33,0.03),transparent_50%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <SectionHeading
          title="Industrial Velocity"
          subtitle="Our scale and commitment to excellence reflected in every operational metric."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} isInView={isInView} />
          ))}
        </div>
      </div>
    </Section>
  );
}
