"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import {
    Pause, Play, ShieldCheck, Lightbulb, Zap, Users,
    Globe, Trophy, Cpu, Droplets, Target, Award
} from "lucide-react";

const missionImg = "/assets/images/mission.png";
const aboutVideo = "/assets/videos/about_binzagr.mp4";

// Badge images
import sfdaBadge from "@/public/assets/sources/Saudi-food.png";
import haccpBadge from "@/public/assets/sources/haccp.png";
import iso22000Badge from "@/public/assets/sources/iso-22000.png";
import iso45001Badge from "@/public/assets/sources/iso-45001.png";
import tetraBadge from "@/public/assets/sources/tetra-pack.png";
import Image from "next/image";

export default function AboutPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/sources/1W7A0491-scaled.jpg" className="w-full h-full object-cover opacity-60" alt="Binzagr Heritage" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-6"
                    >
                        Specialists in Fruit Drinks
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
                    >
                        A Global Heritage <br /> <span className="text-gradient italic pr-4">Crafted Locally</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        From a small kitchen in Copenhagen to refreshing over 80 countries.
                        We combine Danish innovation with Saudi market mastery.
                    </motion.p>
                </div>
            </section>

            {/* Global History & Joint Venture */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-semibold uppercase tracking-widest">Our Global Roots</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight uppercase">
                                Refreshing The World <br /><span className="text-primary italic">Since 1942</span>
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Founded by Danish brothers Flemming and Jep Petersen in 1942, <strong>CO-RO</strong> has grown from a small kitchen operation into an international leader in fruit-based beverages. Today, our brands Sunquick, Suntop, and Suncola provide more than <strong>3.5 billion servings</strong> annually.
                                </p>
                                <p className="italic border-l-4 border-primary/20 pl-8 text-xl font-medium">
                                    "A strategic union leveraging Binzagr Company’s deep-rooted logistics network across Saudi Arabia and CO-RO’s global Danish innovation."
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                {[
                                    { label: "Founded", value: "1942" },
                                    { label: "Countries", value: "80+" },
                                    { label: "Servings", value: "3.5B+" },
                                    { label: "Employees", value: "1200+" },
                                ].map((stat, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-secondary/5 border border-secondary/5">
                                        <div className="text-primary font-semibold text-xl">{stat.value}</div>
                                        <div className="text-secondary/60 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-black">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover aspect-video scale-105 group-hover:scale-100 transition-transform duration-500"
                            >
                                <source src={aboutVideo} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    onClick={togglePlay}
                                    className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                                >
                                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Purpose & strategy */}
            <Section className="bg-secondary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mb-16">
                        <motion.h4
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-semibold uppercase tracking-[0.3em] text-xs mb-4"
                        >
                            Our Strategy
                        </motion.h4>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight uppercase text-white">
                            To Refresh <br /><span className="text-primary italic">And Delight</span>
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed font-medium">
                            Bringing the "WOW" to consumers through great tastes and amazing experiences.
                            Our Winning Behaviors guide how we work together and succeed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Win in Markets",
                                desc: "Developing and leveraging leadership positions where we choose to play.",
                                icon: Target
                            },
                            {
                                title: "Innovate Daily",
                                desc: "Providing relevant product offerings satisfying a wider range of consumer needs.",
                                icon: Lightbulb
                            },
                            {
                                title: "Be World Class",
                                desc: "Continuous strengthening of organizational capabilities and operational excellence.",
                                icon: Globe
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-500 group"
                            >
                                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                                <p className="text-white/70 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Manufacturing Excellence Stats */}
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl opacity-50" />
                            <div className="relative grid grid-cols-2 gap-6">
                                {[
                                    { title: "100%", sub: "Automated Process", icon: Cpu, accent: "primary" },
                                    { title: "1.4B", sub: "Annual Packs", icon: Zap, accent: "secondary" },
                                    { title: "280M", sub: "Liters Yearly", icon: Droplets, accent: "primary" },
                                    { title: "180K", sub: "Bottles / Day", icon: Users, accent: "secondary" }
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="p-8 rounded-3xl bg-white border border-primary/10 shadow-sm hover:-translate-y-1 transition-all duration-500 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                                            <stat.icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-3xl font-semibold text-secondary group-hover:text-primary transition-colors">{stat.title}</div>
                                        <div className="text-secondary/60 text-[10px] font-semibold uppercase tracking-[0.2em] mt-2 leading-tight">
                                            {stat.sub}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <SectionHeading
                                title="Automation & Tech"
                                subtitle="Investing in the future of food production."
                                align="left"
                            />
                            <div className="space-y-6">
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Our Jeddah production facility is a testament to technological mastery. In 2017, we were awarded the <strong>"Most Efficient Tetra Factory in the World"</strong>, reflecting our commitment to speed, precision, and sustainability.
                                </p>
                                <div className="grid gap-4">
                                    {[
                                        "P10 A3 Speed Filling: 24,000 bricks/hour",
                                        "Dream Cap Filling: 9,000 bricks/hour",
                                        "TCA Filling Machine: 17,000 bricks/hour",
                                        "Fully automated production lifecycle"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/5 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            <span className="font-semibold text-secondary text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Certifications */}
            <Section className="bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionHeading title="Quality & Trust" subtitle="Global standards, certified locally." />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { title: "SFDA A+ Rating", desc: "Top Performance 2020-2021", badge: sfdaBadge },
                            { title: "ISO 22000", desc: "Food Safety Management", badge: iso22000Badge },
                            { title: "ISO 45001", desc: "Health & Safety System", badge: iso45001Badge },
                            { title: "HACCP", desc: "Certified Since 2011", badge: haccpBadge },
                            { title: "Tetra Pack", desc: "Most Efficient Factory 2017", badge: tetraBadge },
                        ].map((cert, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/5 text-center hover:-translate-y-2 transition-all duration-500 group">
                                <div className="w-24 h-24 mx-auto mb-6 relative flex items-center justify-center">
                                    <Image
                                        src={cert.badge}
                                        alt={cert.title}
                                        width={96}
                                        height={96}
                                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-2">{cert.title}</h4>
                                <p className="text-xs text-muted-foreground font-medium leading-relaxed">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Global Market Presence */}
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <SectionHeading
                                title="Global Market Presence"
                                subtitle="Serving consumers across continents with excellence."
                                align="left"
                            />
                            <div className="space-y-6">
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    From our headquarters in Jeddah, Saudi Arabia, Binzagr CO-RO serves as a strategic manufacturing and distribution hub for the Middle East, GCC, and North African markets.
                                </p>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-secondary text-sm uppercase tracking-wider">Regional Operations</h3>
                                    <ul className="space-y-3">
                                        {[
                                            { region: "Middle East & GCC", detail: "Primary manufacturing hub in Jeddah" },
                                            { region: "North Africa", detail: "Strategic export operations" },
                                            { region: "Global Distribution", detail: "Products reach 80+ countries worldwide" },
                                            { region: "Annual Production", detail: "3.5 billion servings delivered globally" }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                <div>
                                                    <div className="font-bold text-secondary">{item.region}</div>
                                                    <div className="text-sm text-muted-foreground font-medium">{item.detail}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl opacity-50" />
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-secondary/10 shadow-xl">
                                <Image
                                    src="/assets/sources/shutterstock_479487457-scaled.jpg"
                                    alt="Global Distribution Network"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Timeline Section */}
            <TimelineSection />

            {/* Leadership Section */}
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <SectionHeading title="Scientific Leadership" subtitle="Driven by experts with decades of industrial mastery and strategic vision." />
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                name: "Eng. Mazen Youssef",
                                role: "Chief Executive Officer",
                                bio: "Leading Binzagr CO-RO with a vision of operational excellence and market growth across the Kingdom.",
                                image: "/assets/sources/ceo.jpg"
                            },
                            {
                                name: "Abdullah Khaled",
                                role: "Head of Operations",
                                bio: "Overseeing manufacturing precision and efficiency at our world-class Jeddah production facility.",
                                image: "/assets/sources/operations.jpg"
                            },
                            {
                                name: "Laila Mansour",
                                role: "Human Resources Director",
                                bio: "Dedicated to nurturing a culture of excellence and empowering 1200+ employees globally.",
                                image: "/assets/sources/hr.jpg"
                            }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative mb-8 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-all duration-500 scale-110 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">{member.role}</div>
                                        <div className="text-white font-bold text-xl">{member.name}</div>
                                    </div>
                                </div>
                                <div className="space-y-4 px-2">
                                    <p className="text-muted-foreground leading-relaxed text-sm font-medium italic">
                                        "{member.bio}"
                                    </p>
                                    <div className="h-1 w-12 bg-primary/30 group-hover:w-full transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}

const timelineData = [
    {
        year: "1942",
        title: "The Vision",
        desc: "Danish brothers Flemming and Jep Petersen found CO-RO in a small kitchen outside Copenhagen."
    },
    {
        year: "1960s",
        title: "Global Reach",
        desc: "First ventures outside Europe into the Middle East and Asia, establishing a truly international presence."
    },
    {
        year: "1976",
        title: "Saudi Partnership",
        desc: "Strategic Joint Venture established with Binzagr Company, bringing world-class manufacturing to Jeddah."
    },
    {
        year: "2011",
        title: "Safety Standard",
        desc: "Achieved HACCP Certification, demonstrating commitment to international food safety protocols."
    },
    {
        year: "2017",
        title: "World Champion",
        desc: "Awarded 'Most Efficient Tetra Factory in the World' for exceptional operational performance."
    },
    {
        year: "2021",
        title: "Excellence A+",
        desc: "SFDA Evaluation A+ rating achieved, confirming leading standards in quality and compliance."
    },
];

function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionHeading title="Our Journey" subtitle="From Copenhagen to Jeddah: A legacy of quality." />

                <div className="relative mt-20">
                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-secondary/10" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary origin-top"
                    />

                    <div className="space-y-24">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`relative flex items-center justify-start md:justify-normal gap-12 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary border-4 border-white shadow-lg z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>

                                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                                    <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/5 relative overflow-hidden group hover:bg-white transition-all duration-500">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <span className="text-6xl font-bold">{item.year}</span>
                                        </div>
                                        <span className="text-primary font-bold text-2xl mb-2 block">{item.year}</span>
                                        <h3 className="text-2xl font-bold text-secondary mb-3">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
