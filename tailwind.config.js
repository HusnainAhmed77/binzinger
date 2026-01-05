/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                "brand-accent-green": {
                    DEFAULT: "rgb(13, 161, 78)",
                },
                "brand-accent-yellow": {
                    DEFAULT: "rgb(253, 184, 21)",
                },
                "brand-dark": {
                    DEFAULT: "rgb(40, 48, 61)",
                },
                "brand-muted": {
                    DEFAULT: "rgb(122, 122, 122)",
                },
                "brand-bg": {
                    DEFAULT: "rgb(249, 244, 241)",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
            },
            fontFamily: {
                sans: [
                    'var(--font-rns)',
                    'sans-serif',
                ],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                xl: "calc(var(--radius) + 4px)",
                "2xl": "calc(var(--radius) + 8px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                "slide-right": {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "spin-slow": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-up": "fade-up 0.6s ease-out forwards",
                "fade-in": "fade-in 0.6s ease-out forwards",
                "scale-in": "scale-in 0.5s ease-out forwards",
                "slide-right": "slide-right 0.6s ease-out forwards",
                shimmer: "shimmer 2s infinite linear",
                float: "float 6s ease-in-out infinite",
                "spin-slow": "spin-slow 20s linear infinite",
            },
            backgroundImage: {
                "gradient-primary": "linear-gradient(135deg, hsl(21, 89%, 54%) 0%, hsl(43, 98%, 54%) 100%)",
                "gradient-dark": "linear-gradient(180deg, hsl(0, 0%, 0%) 0%, hsl(0, 0%, 8%) 100%)",
                "gradient-radial": "radial-gradient(circle at center, var(--tw-gradient-stops))",
            },
            boxShadow: {
                glow: "0 0 60px hsl(21 89% 54% / 0.4)",
                "glow-sm": "0 0 30px hsl(21 89% 54% / 0.3)",
                orange: "0 8px 32px hsl(21 89% 54% / 0.3)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
