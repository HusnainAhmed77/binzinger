"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";

export default function ContactPage() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission for now - will connect to backend later
        await new Promise(r => setTimeout(r, 1000));
        toast({ title: "Message Sent!", description: "We'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black min-h-[576px]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/sources/contact-hero.png"
                        alt="Contact Binzagr Coro"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h4 className="text-primary font-semibold tracking-[0.3em] uppercase text-xs mb-6">Get In Touch</h4>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                        Let's Connect <br /> <span className="text-primary italic text-gradient-primary">We're Here to Help</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
                        Reach out to our team for inquiries, partnerships, or support.
                    </p>
                </div>
            </section>

            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Get in Touch</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Whether you have a question about our brands, manufacturing capabilities, or distribution network, our team is ready to assist you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary mb-2">Headquarters</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Al Mahjar, Industrial Area South<br />
                                            Jeddah 21411, Saudi Arabia
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary mb-2">Phone</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-1">
                                            <a href="tel:+966126369626" className="hover:text-primary transition-colors">+966 12 636 9626</a>
                                        </p>
                                        <p className="text-sm text-muted-foreground/60">Mon-Thu 8am-5pm, Sun 8am-5pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary mb-2">Email</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            <a href="mailto:info@binzagrcoro.com" className="hover:text-primary transition-colors">info@binzagrcoro.com</a>
                                        </p>
                                        <p className="text-sm text-muted-foreground/60">We'll respond within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-secondary/5">
                            <h3 className="text-2xl font-semibold text-secondary mb-8">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-secondary ml-1">Full Name</label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                            required
                                            className="h-14 rounded-xl bg-secondary/5 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-secondary ml-1">Email Address</label>
                                        <Input
                                            type="email"
                                            id="email"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                            required
                                            className="h-14 rounded-xl bg-secondary/5 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-secondary ml-1">Phone Number</label>
                                    <Input
                                        type="tel"
                                        id="phone"
                                        placeholder="+966 5..."
                                        value={formData.phone}
                                        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                                        className="h-14 rounded-xl bg-secondary/5 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-secondary ml-1">Message</label>
                                    <Textarea
                                        id="message"
                                        placeholder="How can we help you?"
                                        rows={4}
                                        value={formData.message}
                                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                        required
                                        className="rounded-xl bg-secondary/5 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all resize-none p-4"
                                    />
                                </div>
                                <Button size="lg" type="submit" className="w-full bg-gradient-primary text-white hover:opacity-90 text-lg py-6 rounded-xl shadow-orange" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-24 rounded-3xl overflow-hidden shadow-2xl border border-secondary/10 h-[500px] relative bg-neutral-100 group">
                        {/* Interactive Blocker Overlay */}
                        <div className="absolute inset-0 z-10 bg-transparent" />

                        <iframe
                            src="https://maps.google.com/maps?q=21.487305,39.181335&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) contrast(1.2) brightness(0.9)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="pointer-events-none group-hover:grayscale-0 transition-all duration-500"
                        />
                        {/* Custom Pointer Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                            <div className="relative">
                                <img
                                    src="/assets/sources/svgviewer-png-output.png"
                                    alt="Location"
                                    className="w-16 h-16 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] animate-bounce"
                                />
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/20 blur-sm rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
