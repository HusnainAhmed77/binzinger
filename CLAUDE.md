# CLAUDE.md - Binzagr Coro Project Guide

## Build & Development Commands

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Architecture

### Tech Stack
- **Framework**: Next.js 16.1.1 with App Router
- **React**: 19.0.0
- **Styling**: Tailwind CSS 4 with CSS variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Directory Structure
```
app/                    # Next.js App Router pages
├── about/             # About page
├── brands/            # Brands showcase page
├── careers/           # Careers page
├── contact/           # Contact page with form
├── distribution/      # Logistics/distribution page
├── privacy/           # Privacy policy
├── terms/             # Terms of service
├── globals.css        # Global styles & CSS variables
├── layout.tsx         # Root layout with Header/Footer
└── page.tsx           # Homepage

components/
├── home/              # Homepage section components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── BrandsSection.tsx
│   ├── CTASection.tsx
│   ├── ManufacturingSection.tsx
│   ├── MarketPresenceSection.tsx
│   ├── StatsSection.tsx
│   ├── SustainabilitySection.tsx
│   ├── TrustTicker.tsx
│   └── WhyChooseUsSection.tsx
├── layout/            # Layout components
│   ├── Header.tsx     # Navigation with brands mega menu
│   ├── Footer.tsx
│   └── Layout.tsx
└── ui/                # shadcn/ui components (Radix-based)

hooks/                 # Custom React hooks
lib/                   # Utility functions
public/assets/         # Static assets (images, videos)
```

## Design System

### Brand Colors (HSL CSS Variables)
```css
--primary: 21 89% 55%        /* #F26F21 - Orange */
--secondary: 216 21% 19%     /* #28303D - Dark blue-gray */
--accent-yellow: 45 100% 51% /* #FFCC00 - Yellow */
--muted: 220 14% 96%         /* Light gray background */
```

### Typography
- Headings: `font-extrabold` (consistent across all pages)
- Hero titles: `text-4xl md:text-6xl`
- Section titles: `text-3xl md:text-4xl`

### Spacing & Layout
- Section padding: `py-20 md:py-32` (via Section component)
- Container: `container mx-auto px-4`
- Grid gaps: Standardize to `gap-8` or `gap-12`

### Border Radius
- Cards/containers: `rounded-3xl`
- Buttons: `rounded-full` (CTAs) or `rounded-xl` (forms)
- Small elements: `rounded-2xl`

### Transitions
- Micro-interactions: `duration-300`
- Section animations: `duration-500`

### Hero Section Pattern
All hero sections follow this structure:
```tsx
<section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black">
  {/* Background image with overlay */}
  <div className="absolute inset-0 z-0">
    <img src="..." className="w-full h-full object-cover opacity-60 scale-105" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
  </div>
  {/* Content */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <h4 className="text-primary font-semibold tracking-[0.3em] uppercase text-xs mb-6">
      Small Label
    </h4>
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
      First Line <br />
      <span className="text-primary italic text-gradient-primary">Second Line</span>
    </h1>
    <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
      Description text
    </p>
  </div>
</section>
```

## Code Patterns

### Using the Section Component
```tsx
import { Section } from "@/components/ui/section";
<Section className="bg-white py-24">
  {/* Section content */}
</Section>
```

### Framer Motion Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
```

### Button Styling
```tsx
// Primary CTA button
<Button className="bg-gradient-primary hover:opacity-90 rounded-full px-8">

// Secondary button
<Button className="bg-primary text-white hover:bg-secondary rounded-full">
```

### External Links
Always include accessibility attributes:
```tsx
<a href="..." target="_blank" rel="noopener noreferrer" aria-label="Description (opens in new window)">
```

## Key Files Reference

| Purpose | File |
|---------|------|
| Global CSS variables | `app/globals.css` |
| Tailwind config | `tailwind.config.js` |
| Navigation | `components/layout/Header.tsx` |
| Homepage sections | `components/home/*.tsx` |
| Reusable UI | `components/ui/*.tsx` |
| Brand data | `app/brands/page.tsx` (brands array) |

## Accessibility Guidelines
- All interactive elements need `focus-visible` states
- External links require `aria-label` with "(opens in new window)"
- Icon buttons need `aria-label` or `aria-hidden="true"`
- Minimum contrast ratio: WCAG AA (4.5:1 for text)
