import type { Metadata } from "next";
import "./globals.css";
import { RNS } from "@/lib/fonts";
import { AppProviders } from "@/components/AppProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Binzagr Coro Legacy",
  description: "Manufacturing Excellence in Saudi Arabia - Since 1976",
  icons: {
    icon: "/assets/sources/cropped-Frame-3-1-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${RNS.variable}`}>
      <body className="font-sans antialiased text-brand-dark">
        <AppProviders>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
