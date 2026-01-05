import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 space-y-4",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-inherit uppercase tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-inherit opacity-70 text-lg md:text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
