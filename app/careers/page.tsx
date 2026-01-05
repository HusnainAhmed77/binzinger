import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, Factory, Globe2, Users2, BrainCircuit, ShieldCheck, ArrowRight, Linkedin } from "lucide-react";

export const metadata: Metadata = {
    title: "Careers | Binzagr Coro",
    description: "Join a legacy of manufacturing excellence. Explore career opportunities at Binzagr Coro, a Saudi-Danish joint venture committed to quality and innovation.",
};

const benefits = [
    {
        icon: Globe2,
        title: "Global Heritage",
        description: "A strategic Saudi-Danish joint venture combining local market leadership with international manufacturing standards.",
    },
    {
        icon: Factory,
        title: "Advanced Manufacturing",
        description: "Work in one of the region's most sophisticated automated facilities, producing millions of units annually.",
    },
    {
        icon: Users2,
        title: "300+ Professionals",
        description: "Join a diverse, highly-skilled workforce dedicated to operational excellence and safety.",
    },
    {
        icon: BrainCircuit,
        title: "Innovation Culture",
        description: "Continuous investment in technology and process optimization to stay ahead of market demands.",
    },
    {
        icon: ShieldCheck,
        title: "Safety First",
        description: "Uncompromising commitment to international health, safety, and quality standards (ISO/HACCP).",
    },
];

export default function CareersPage() {
    return (
        <div className="min-h-screen">
            {/* 1. Hero Section */}
            {/* 1. Hero Section */}
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    {/* Using a factory/industrial image for authority */}
                    <img
                        src="/assets/sources/careers-hero.jpeg"
                        alt="Binzagr Coro Facility"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto animate-fade-in-up">
                        <h4 className="text-primary font-semibold tracking-[0.3em] uppercase text-xs mb-6">Join Our Team</h4>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                            Build Your Career <br /> <span className="text-primary italic text-gradient-primary">With Excellence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
                            Join a stable, high-performance environment where industrial precision meets professional growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Why Work With Us */}
            <Section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Why Work With Us"
                        subtitle="A Foundation of Stability and Growth"
                        align="center"
                        className="mb-16"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10 hover:border-primary/50 transition-colors group">
                                <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-secondary mb-3">{benefit.title}</h3>
                                <p className="text-secondary/70 leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}

                        {/* 6th Card: Professional Development */}
                        <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10 hover:border-primary/50 transition-colors group">
                            <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle2 className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-secondary mb-3">Professional Development</h3>
                            <p className="text-secondary/70 leading-relaxed text-sm">
                                We invest in our people through structured training programs and clear career advancement pathways.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. Great Place to Work */}
            <Section className="bg-muted/30 border-y border-secondary/10 py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                                Certified as a <span className="text-primary">Great Place to Work®</span>
                            </h2>
                            <p className="text-lg text-secondary/70 leading-relaxed">
                                Our commitment to employee well-being, safety, and professional gratification has been recognized globally. We foster a culture of respect, collaboration, and integrity.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-center gap-3 text-secondary font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>Inclusive & Safe Work Environment</span>
                                </li>
                                <li className="flex items-center gap-3 text-secondary font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>Recognition of High Performance</span>
                                </li>
                                <li className="flex items-center gap-3 text-secondary font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>Community & Sustainability Initiatives</span>
                                </li>
                            </ul>
                        </div>

                        {/* Badge Visual */}
                        <div className="lg:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full transform scale-75" />
                                <img
                                    src="/assets/sources/Best-place-to-work-PNG-768x257.png"
                                    alt="Great Place to Work Certification"
                                    className="relative z-10 w-full max-w-md drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. Life at Binzagr - Visual Gallery */}
            <Section className="py-24">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Life at Binzagr Coro"
                        subtitle="Our People. Our Strength."
                        align="left"
                        className="mb-12"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto md:h-[800px]">
                        {/* Large Main Item */}
                        <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-lg min-h-[400px] md:min-h-0">
                            <img src="/assets/sources/1760930665698.jpeg" alt="Teamwork" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <h4 className="text-white font-bold text-xl mb-1">Collaborative Environment</h4>
                                <p className="text-white/70 text-sm">Working together to achieve excellence.</p>
                            </div>
                        </div>

                        {/* Side Item 1 */}
                        <div className="relative rounded-3xl overflow-hidden group shadow-lg aspect-video md:aspect-auto">
                            <img src="/assets/sources/1760930665983.jpeg" alt="Production Line" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h4 className="text-white font-bold text-lg mb-1">State-of-the-Art Facility</h4>
                            </div>
                        </div>

                        {/* Side Item 2 (Video Card) */}
                        <div className="relative rounded-3xl overflow-hidden group shadow-lg aspect-video md:aspect-auto">
                            <div className="absolute inset-0 bg-secondary group-hover:bg-secondary/80 transition-colors">
                                <video
                                    src="/assets/videos/intro.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h4 className="text-white font-bold text-lg mb-1">Industrial Precision</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. CTA Section */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-95" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-white/20 blur-[100px] rounded-full" />
                <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-yellow/30 blur-[80px] rounded-full" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                            Ready to Join Us?
                        </h2>
                        <p className="text-lg md:text-xl text-primary-foreground/80">
                            Explore our current openings and take the first step towards a rewarding career with a leading FMCG manufacturer.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button asChild size="lg" className="bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 text-lg px-10 py-6 group shadow-orange hover:shadow-lg hover:-translate-y-1 rounded-full h-auto">
                                <Link href="https://www.linkedin.com/company/binzagr-co-ro-ltd/jobs/" target="_blank" rel="noopener noreferrer" aria-label="View open positions on LinkedIn (opens in new window)">
                                    <Linkedin className="mr-3 h-5 w-5" aria-hidden="true" />
                                    View Open Positions
                                </Link>
                            </Button>
                        </div>

                        <div className="text-primary-foreground/80 text-sm font-medium pt-4">
                            or email your CV to <a href="mailto:info@binzagrcoro.com" className="text-zinc-950 font-bold hover:underline decoration-2 underline-offset-4">info@binzagrcoro.com</a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
