"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export function Section({ children, className, id, animate = true }: SectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "py-20 md:py-32",
        animate && "opacity-0",
        animate && isInView && "animate-fade-up",
        className
      )}
    >
      {children}
    </section>
  );
}
