import { Section } from "@/components/ui/section";

export default function PrivacyPolicy() {
    return (
        <>
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/sources/company_bg.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h4 className="text-primary font-semibold tracking-[0.3em] uppercase text-xs mb-6">Legal</h4>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                        Privacy <br /> <span className="text-primary italic text-gradient-primary">Policy</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
                        Last Updated: {new Date().getFullYear()}
                    </p>
                </div>
            </section>

            <Section className="bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-neutral max-w-none">
                        <p className="lead text-xl text-secondary/80 font-medium mb-12">
                            At Binzagr Coro, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">1. Information We Collect</h3>
                        <p className="text-muted-foreground mb-6">
                            We collect information that you voluntarily provide to us, such as when you fill out a contact form, apply for a job, or subscribe to our newsletter. This may include your name, email address, phone number, and any other details you choose to share. We also automatically collect certain technical data, including your IP address, browser type, and operating system, to improve our website's performance and user experience.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">2. How We Use Your Information</h3>
                        <p className="text-muted-foreground mb-6">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                            <li>To respond to your inquiries and provide customer support.</li>
                            <li>To improve our products, services, and website functionality.</li>
                            <li>To comply with legal obligations and regulatory requirements.</li>
                            <li>To analyze website traffic and usage patterns.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">3. Data Sharing and Disclosure</h3>
                        <p className="text-muted-foreground mb-6">
                            We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose information if required by law or to protect our rights and safety.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">4. Data Security</h3>
                        <p className="text-muted-foreground mb-6">
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">5. Contact Us</h3>
                        <p className="text-muted-foreground mb-6">
                            If you have any questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-secondary font-semibold">
                            Binzagr Coro<br />
                            Email: info@binzagrcoro.com<br />
                            Phone: +966 12 636 9626
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
