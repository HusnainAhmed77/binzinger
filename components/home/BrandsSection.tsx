import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const suntopImg = "/assets/images/suntop.png";
const suncolaImg = "/assets/images/suncola.png";
const sunquickImg = "/assets/images/sunquick.png";

const brands = [
  {
    id: "suntop",
    name: "Suntop",
    tagline: "Pure Fruit Goodness",
    description: "Delicious fruit juices made from the finest ingredients, loved by children and adults alike.",
    image: suntopImg,
    color: "from-orange-400 to-yellow-400",
    link: "https://suntop.com.sa",
  },
  {
    id: "suncola",
    name: "Suncola",
    tagline: "Refreshingly Different",
    description: "A unique cola experience crafted specifically for the Saudi Arabian palate.",
    image: suncolaImg,
    color: "from-red-500 to-orange-500",
    link: "https://suncola.com.sa",
  },
  {
    id: "sunquick",
    name: "Sunquick",
    tagline: "Concentrated Flavor",
    description: "Premium fruit concentrates that bring families together for moments of pure refreshment.",
    image: sunquickImg,
    color: "from-yellow-400 to-orange-400",
    link: "https://sunquick.com",
  },
];

export function BrandsSection() {
  return (
    <Section className="bg-neutral-50/80">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Iconic Portfolio"
          subtitle="Discover the trusted beverage brands that have captured the hearts of millions across the Kingdom for generations."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-500 border border-secondary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className={`relative h-64 bg-gradient-to-br ${brand.color} p-6 flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_60%)] pointer-events-none" />
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-48 w-auto object-contain group-hover:scale-110 transition-transform duration-500 brightness-105 contrast-105 saturate-110 drop-shadow-2xl"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-secondary">{brand.name}</h3>
                  <p className="text-primary font-medium">{brand.tagline}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {brand.description}
                </p>
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${brand.name} website (opens in new window)`}
                  className="inline-flex items-center text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 group">
            <Link href="/brands">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
