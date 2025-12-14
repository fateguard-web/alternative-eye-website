# Convert HTML Website to Next.js with Motion Animations

---

## 1. Task Overview

### Task Title
**Title:** Convert Alternative Eye HTML Website to Next.js with Motion Animations

### Goal Statement
**Goal:** Transform the existing Alternative Eye HTML website into a modern Next.js application with optimized fonts, animated components using Motion library, and a modular component architecture that supports future expansion into multiple routes while maintaining the dark aesthetic and visual design of the original site.

---

## 2. Strategic Analysis & Solution Options

### Problem Context
We need to convert a single-page HTML website into a Next.js application while preserving all visual design, adding smooth animations, and creating a scalable architecture for future pages. Multiple approaches exist for structuring the components, handling animations, and organizing the codebase.

### Solution Options Analysis

#### Option 1: Single-Page Monolithic Component with Motion
**Approach:** Keep entire homepage in one large `page.tsx` file with inline Motion animations

**Pros:**
- ✅ Fastest initial implementation - minimal file creation
- ✅ Easy to see entire page structure at once
- ✅ Simple animation coordination across sections

**Cons:**
- ❌ 500+ line component file - difficult to maintain
- ❌ No component reusability across future pages
- ❌ Harder to test individual sections
- ❌ Performance issues - entire page re-renders on any change
- ❌ Doesn't scale for future multi-page expansion

**Implementation Complexity:** Low - Single file, straightforward conversion
**Risk Level:** High - Technical debt accumulates, future refactoring required

#### Option 2: Modular Component Architecture with Reusable Parts (RECOMMENDED)
**Approach:** Break website into feature-based components in `components/` directory with Motion animations applied at component level

**Pros:**
- ✅ Highly maintainable - each section is isolated
- ✅ Components can be reused across future pages
- ✅ Easy to test individual sections
- ✅ Better performance - React optimizations work per component
- ✅ Scales perfectly for multi-page expansion
- ✅ Parallel development possible (work on multiple sections simultaneously)

**Cons:**
- ❌ More initial setup - requires creating multiple files
- ❌ Need to plan component structure carefully
- ❌ Slightly more complex animation coordination across components

**Implementation Complexity:** Medium - More files but cleaner architecture
**Risk Level:** Low - Industry best practice, supports long-term growth

#### Option 3: Server Components with Client Islands for Animations
**Approach:** Use Next.js Server Components by default, only making animated parts Client Components

**Pros:**
- ✅ Maximum performance - server-rendered content
- ✅ Smaller client bundle - less JavaScript shipped
- ✅ SEO optimized out of the box

**Cons:**
- ❌ Complex component boundary management (use client directives)
- ❌ Motion animations require client components anyway
- ❌ Most sections need animations, so limited benefit
- ❌ Adds cognitive overhead during development

**Implementation Complexity:** High - Requires careful planning of server/client boundaries
**Risk Level:** Medium - Over-engineering for a marketing site with animations throughout

### Recommendation & Rationale

**🎯 RECOMMENDED SOLUTION:** Option 2 - Modular Component Architecture with Reusable Parts

**Why this is the best choice:**
1. **Scalability** - User explicitly wants separate routes for future pages; modular components support this perfectly
2. **Maintainability** - Breaking sections into components (`HeroSection`, `HostSpotlight`, `VideoSection`, etc.) makes code easier to understand and modify
3. **Motion Integration** - Each component can have its own Motion animations without prop drilling or complex state management
4. **Future-Proof** - When adding `/episodes`, `/about`, `/contact` pages, we can reuse components like `NewsletterForm`, `HostCard`, etc.

**Key Decision Factors:**
- **Performance Impact:** Minimal - React's reconciliation handles component boundaries efficiently
- **User Experience:** Excellent - Smooth Motion animations at component level create professional feel
- **Maintainability:** High - Clear separation of concerns, easy to locate and modify sections
- **Scalability:** Excellent - Perfectly aligned with user's requirement for future multi-page structure
- **Security:** N/A - Marketing site with no sensitive operations

**Alternative Consideration:**
Option 3 (Server Components with Client Islands) would be preferred for a content-heavy blog or e-commerce site, but for a highly animated marketing site where almost every section needs client-side interactivity, the added complexity outweighs the benefits. We can always optimize specific sections later if needed.

### Decision Request

**👤 USER DECISION REQUIRED:**
Based on this analysis, do you want to proceed with the recommended solution (Option 2 - Modular Component Architecture), or would you prefer a different approach?

**Questions for you to consider:**
- Does the modular component approach align with your vision for the site's growth?
- Are there any specific sections you'd prefer to keep together vs. split apart?
- Do you have preferences for component naming conventions?

**Next Steps:**
Once you approve the strategic direction, I'll update the implementation plan with the complete breakdown of components to create and present you with next step options.

---

## 3. Project Analysis & Current State

### Technology & Architecture
- **Frameworks & Versions:** Next.js 16.0.10, React 19.2.1
- **Language:** TypeScript 5.x with strict mode
- **Animation Library:** Motion 12.23.26 (motion/react)
- **UI & Styling:** shadcn/ui components with Tailwind CSS 4.x for styling
- **Fonts:** next/font/google for optimized font loading (Bebas Neue + Inter)
- **Theme:** Dark mode only (--background: oklch(0.145 0 0))
- **Key Architectural Patterns:** Next.js App Router, modular component architecture
- **Existing Components:** shadcn/ui components available (Button, Card, Carousel, etc.)

### Current State
The project is a fresh Next.js installation with:
- Default landing page in `app/page.tsx` (needs complete replacement)
- Basic dark theme setup in `app/globals.css` with Tailwind 4.x
- Motion library already installed (motion@12.23.26)
- shadcn/ui components installed and ready to use
- Geist Sans and Geist Mono fonts currently configured (will be replaced with Bebas Neue + Inter)

Reference HTML website (`ai_docs/refs/alternative-eye-website/`) contains:
- Single-page HTML structure with 9 major sections
- Custom CSS with dark theme (--bg-color: #0a0a0a)
- Motion One animations via CDN (needs conversion to npm Motion)
- Image assets in `assets/` folder
- Carousel logic in `script.js` for soundbites section

### Existing Context Providers Analysis
No custom context providers exist yet. This is a greenfield project starting from the default Next.js template.

**🔍 Context Coverage Analysis:**
- No user authentication required (marketing site)
- No subscription/billing data needed
- Future considerations: May need theme context if light mode added later
- Newsletter form will use form state only (no global context needed)

---

## 4. Context & Problem Definition

### Problem Statement
The Alternative Eye website currently exists as a static HTML file with custom CSS and CDN-based animations. While functional, this approach lacks:
1. **Performance optimization** - No image optimization, no font optimization, no code splitting
2. **Scalability** - Single HTML file can't expand into multiple pages (episodes, blog, contact, etc.)
3. **Maintainability** - All code in one file makes updates difficult and error-prone
4. **Modern development workflow** - No component reusability, no TypeScript safety, no build-time optimizations
5. **SEO optimization** - Limited meta tag management, no structured data

The conversion to Next.js addresses all these issues while maintaining the exact visual design and adding improved animations using the Motion library.

### Success Criteria
- [x] **Visual Fidelity:** Next.js site matches HTML site pixel-perfect (colors, spacing, typography)
- [x] **Animations:** Smooth Motion animations on hero section (fade in) and section titles (drop in)
- [x] **Performance:** Lighthouse score 90+ (optimized fonts, images, code splitting)
- [x] **Responsive Design:** Works perfectly on mobile (320px+), tablet (768px+), desktop (1024px+)
- [x] **Component Architecture:** All sections broken into reusable components in `components/` directory
- [x] **Type Safety:** Full TypeScript coverage with proper interfaces for component props
- [x] **Future-Ready:** Route structure prepared for `/episodes`, `/about`, `/contact` pages
- [x] **Asset Management:** All images copied to `public/` and optimized with `next/image`
- [x] **Font Optimization:** Bebas Neue and Inter loaded via `next/font/google`
- [x] **Code Quality:** Clean, documented components following Next.js best practices

---

## 5. Development Mode Context

### Development Mode Context
- **🚨 IMPORTANT: This is a new application in active development**
- **No backwards compatibility concerns** - fresh Next.js installation, can replace everything
- **Data loss acceptable** - no user data, no database, purely static content
- **Users are developers/testers** - not production users requiring careful migration
- **Priority: Speed and quality** - create proper architecture from the start
- **Aggressive refactoring allowed** - can completely replace default Next.js starter files

---

## 6. Technical Requirements

### Functional Requirements
- **Homepage displays all sections** from original HTML: hero, breaking news, hosts, videos, experts, soundbites, expertise, contact/newsletter
- **Navigation header** with logo and "Sign In" button (non-functional for now, future auth)
- **Top banner** with breaking news alert
- **Smooth scroll animations** using Motion library (fade in hero, drop in titles)
- **Carousel functionality** for soundbites section with prev/next buttons
- **Newsletter form** with email input and subscribe button (UI only for now)
- **Responsive layout** adapts to mobile, tablet, and desktop viewports
- **External links** to YouTube, Spotify, LinkedIn (from original site)

### Non-Functional Requirements
- **Performance:** Page load under 2 seconds, Lighthouse score 90+
- **Security:** N/A for marketing site (no user authentication yet)
- **Usability:** Intuitive navigation, clear call-to-action buttons, accessible forms
- **Responsive Design:** Must work on mobile (320px+), tablet (768px+), and desktop (1024px+)
- **Theme Support:** Dark mode only (fixed dark theme matching original design)
- **Compatibility:** Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
- **Accessibility:** Semantic HTML, ARIA labels where needed, keyboard navigation support
- **SEO:** Proper meta tags, Open Graph tags, structured data for rich snippets

### Technical Constraints
- **Must use Motion 12.23.26** (already installed) - no other animation libraries
- **Must use next/font/google** for Bebas Neue and Inter fonts
- **Must maintain exact color scheme** from original CSS (--bg-color: #0a0a0a, --accent-red: #ff0000, --accent-blue: #0000ff)
- **Must use existing shadcn/ui components** where applicable (Button, Card, Carousel)
- **Dark theme only** - no light mode toggle required

---

## 7. Data & Database Changes

### Database Schema Changes
**N/A** - This is a static marketing site with no database requirements.

### Data Model Updates
```typescript
// Type definitions for component props

// Hero Section
interface HeroProps {
  logoSrc: string;
  logoAlt: string;
  subtitle: string;
  description: string;
}

// News Card
interface NewsCardProps {
  date: string;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
}

// Host Spotlight
interface HostProps {
  name: string;
  role: string;
  badge: string;
  badgeVariant: 'red' | 'blue';
  bioText: string[];
  quote: string;
  imageSrc: string;
  linkedinUrl: string;
  expertise?: ExpertiseItem[];
  yearsExperience?: number;
}

interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'red' | 'blue' | 'gray';
}

// Video Placeholder
interface VideoPlaceholderProps {
  label: string;
  embedUrl?: string; // For future YouTube embeds
}

// Expert Showcase
interface ExpertProps {
  name: string;
  imageSrc: string;
  websiteUrl?: string;
}

// Soundbite (Carousel Item)
interface SoundbiteProps {
  label: string;
  instagramUrl?: string; // For future Instagram embeds
}
```

### Data Migration Plan
**N/A** - No data migration required. Static content will be hardcoded in components with props for easy replacement later.

---

## 8. API & Backend Changes

### Data Access Pattern - CRITICAL ARCHITECTURE RULES

**🚨 MANDATORY: This is a static marketing site - no API routes or server actions needed initially.**

For this task:
- **No Server Actions** - No mutations (no forms submitting to backend yet)
- **No Database Queries** - All content is static/hardcoded
- **No API Routes** - No external integrations yet

**Future Considerations:**
When newsletter form needs backend integration:
- Newsletter submission → Server Action in `app/actions/newsletter.ts`
- Email validation and API call to email service (Mailchimp, SendGrid, etc.)

---

## 9. Frontend Changes

### New Components

**🎯 Component Organization:** All components in `components/[feature]/` directories

#### Core Layout Components
- [x] **`components/layout/TopBanner.tsx`** - Red breaking news banner (fixed position)
- [x] **`components/layout/Header.tsx`** - Navigation with logo and Sign In button (fixed position, backdrop blur)
- [x] **`components/layout/Footer.tsx`** - Site footer with copyright

#### Homepage Sections
- [x] **`components/home/HeroSection.tsx`** - Hero with logo image, subtitle, description, CTA buttons (Motion fade-in animation)
- [x] **`components/home/BreakingNewsSection.tsx`** - "Breaking News" section with 3-column card grid
- [x] **`components/home/HostsSection.tsx`** - Container for host spotlights
- [x] **`components/home/VideoSection.tsx`** - Latest episodes with 7 video placeholders
- [x] **`components/home/ExpertsSection.tsx`** - Featured experts showcase
- [x] **`components/home/SoundbitesSection.tsx`** - Instagram carousel section
- [x] **`components/home/ExpertiseSection.tsx`** - Skills/expertise split layout
- [x] **`components/home/ContactSection.tsx`** - Newsletter signup and contact info

#### Reusable UI Components
- [x] **`components/ui/NewsCard.tsx`** - Card for breaking news items (hover effect)
- [x] **`components/ui/HostSpotlight.tsx`** - Detailed host profile (two-column layout, can reverse)
- [x] **`components/ui/VideoPlaceholder.tsx`** - YouTube video placeholder
- [x] **`components/ui/SoundbiteCarousel.tsx`** - Instagram carousel with nav buttons
- [x] **`components/ui/ExpertShowcase.tsx`** - Expert profile display
- [x] **`components/ui/NewsletterForm.tsx`** - Email input + subscribe button
- [x] **`components/ui/BrandButton.tsx`** - YouTube/Spotify branded buttons

**Component Requirements:**
- **Responsive Design:** Mobile-first approach with Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- **Theme Support:** Dark theme only - use `bg-[#0a0a0a]`, `text-white`, etc.
- **Accessibility:** Semantic HTML, proper ARIA labels, keyboard navigation
- **Motion Animations:** 
  - Hero logo: Fade in + scale (0.95 to 1) over 1.5s
  - Section titles: Drop in effect (y: -20 to 0) + fade in over 0.8s
  - Cards: Stagger fade-in on scroll into view

### Page Updates
- [x] **`app/page.tsx`** - Replace default content with composed homepage sections
- [x] **`app/layout.tsx`** - Update fonts to Bebas Neue (headings) + Inter (body), update metadata
- [x] **`app/globals.css`** - Add custom CSS variables for Alternative Eye theme

### State Management

**Local Component State:**
- Carousel component: Current slide index, navigation handlers
- Newsletter form: Email input value, validation errors, submission state (future)

**No Global State Needed:**
- Marketing site with no user authentication
- No cross-component data sharing required
- Each section is self-contained

**Data Fetching Strategy:**
- Static content hardcoded in components
- Future: Fetch episode data from CMS/API for video section
- Future: Newsletter form submits to Server Action

---

## 10. Code Changes Overview

### 📂 **Current Implementation (Before)**

**Current app/page.tsx (Default Next.js Starter):**
```typescript:1:66:app/page.tsx
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to...
          </p>
        </div>
        {/* More default content... */}
      </main>
    </div>
  );
}
```

**Current app/layout.tsx (Default Fonts):**
```typescript:1:34:app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

**Current Assets:**
- Default Next.js SVG icons only
- No Alternative Eye images

### 📂 **After Conversion**

**New app/page.tsx (Alternative Eye Homepage):**
```typescript
import { HeroSection } from '@/components/home/HeroSection';
import { BreakingNewsSection } from '@/components/home/BreakingNewsSection';
import { HostsSection } from '@/components/home/HostsSection';
import { VideoSection } from '@/components/home/VideoSection';
import { ExpertsSection } from '@/components/home/ExpertsSection';
import { SoundbitesSection } from '@/components/home/SoundbitesSection';
import { ExpertiseSection } from '@/components/home/ExpertiseSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BreakingNewsSection />
      <HostsSection />
      <VideoSection />
      <ExpertsSection />
      <SoundbitesSection />
      <ExpertiseSection />
      <ContactSection />
    </>
  );
}
```

**New app/layout.tsx (Custom Fonts + Metadata):**
```typescript
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alternative Eye: Beyond the File | Crime Meets Code",
  description: "Decoding the systems of silence behind the world's most complex cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <TopBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Example Component (HeroSection with Motion):**
```typescript
'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { BrandButton } from '@/components/ui/BrandButton';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-8 pt-48 pb-16 bg-gradient-radial from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/assets/logo-hero.jpg"
            alt="Alternative Eye Logo"
            width={800}
            height={400}
            priority
            className="w-full max-w-[800px] mx-auto rounded shadow-[0_0_35px_rgba(255,0,0,0.6)]"
          />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl uppercase tracking-[0.2em] mb-4 opacity-80 font-bebas"
        >
          Beyond the File — Where Crime Meets Code
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg max-w-2xl mx-auto mb-12 text-gray-400 font-inter"
        >
          Decoding the systems of silence behind the world's most complex cases.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <BrandButton variant="youtube" href="https://youtube.com">
            Watch on YouTube
          </BrandButton>
          <BrandButton variant="spotify" href="https://spotify.com">
            Listen on Spotify
          </BrandButton>
        </motion.div>
      </div>
    </section>
  );
}
```

### 🎯 **Key Changes Summary**
- **Complete Homepage Replacement:** Default Next.js content → Alternative Eye sections
- **Font System Upgrade:** Geist fonts → Bebas Neue (headings) + Inter (body)
- **Layout Architecture:** Wrapped in TopBanner + Header + Footer in root layout
- **Component Modularity:** 8 major homepage sections + 8 reusable UI components
- **Animation System:** Motion integrated at component level (fade-in hero, drop-in titles)
- **Asset Management:** Copy 6 images from `ai_docs/refs/alternative-eye-website/assets/` → `public/assets/`
- **Theme Implementation:** Custom CSS variables for Alternative Eye brand colors
- **Files Modified:** 3 files (page.tsx, layout.tsx, globals.css)
- **Files Created:** ~16 new component files + assets
- **Impact:** Complete transformation from generic Next.js starter to Alternative Eye branded marketing site

---

## 11. Implementation Plan

### Phase 1: Project Setup & Asset Migration
**Goal:** Prepare project foundation with fonts, assets, and theme configuration

- [x] **Task 1.1:** Copy Image Assets to public/assets/
  - Files: `public/assets/` directory
  - Details: Copy all 6 images from `ai_docs/refs/alternative-eye-website/assets/` to `public/assets/`
    - logo-hero.jpg
    - logo-hero-v2.png
    - host-melissa-phelan.jpg
    - dr-wendy-watson.jpg
    - kerrie-droban-zhivago.jpeg
    - code-chapter-8-BSNdNKkU.jpeg

- [x] **Task 1.2:** Configure Custom Fonts in Root Layout
  - Files: `app/layout.tsx`
  - Details: 
    - Replace Geist fonts with Bebas_Neue (weight: 400) and Inter
    - Add CSS variables: `--font-bebas`, `--font-inter`
    - Update metadata: title, description matching original HTML
    - Add `className="dark"` to html tag for dark mode
    - Add TopBanner, Header, Footer wrapper components (empty shells for now)

- [x] **Task 1.3:** Update Global Styles with Alternative Eye Theme
  - Files: `app/globals.css`
  - Details:
    - Add CSS custom properties: `--bg-color: #0a0a0a`, `--accent-red: #ff0000`, `--accent-blue: #0000ff`
    - Update Tailwind theme with Bebas Neue and Inter font families
    - Add utility classes for brand colors (text-red, text-blue)
    - Ensure dark background and light text as defaults

### Phase 2: Core Layout Components
**Goal:** Create fixed positioning layout elements (banner, header, footer)

- [x] **Task 2.1:** Create TopBanner Component
  - Files: `components/layout/TopBanner.tsx`
  - Details:
    - Fixed position top banner with red background (#aa0000)
    - "BREAKING" badge + announcement text
    - Mobile responsive text sizing

- [x] **Task 2.2:** Create Header Component
  - Files: `components/layout/Header.tsx`
  - Details:
    - Fixed position below banner (top: 40px)
    - Flexbox layout: logo left, "Sign In" button right
    - Backdrop blur effect (bg-[#0a0a0a]/80 backdrop-blur-md)
    - Logo uses Bebas Neue font

- [x] **Task 2.3:** Create Footer Component
  - Files: `components/layout/Footer.tsx`
  - Details:
    - Simple footer with "ALTERNATIVE EYE" text and copyright
    - Border top, padding, centered layout

### Phase 3: Hero Section with Motion Animations
**Goal:** Implement hero section with fade-in logo and animated text

- [x] **Task 3.1:** Create HeroSection Component
  - Files: `components/home/HeroSection.tsx`
  - Details:
    - Use `'use client'` directive (Motion requires client component)
    - Motion fade-in animation for logo image (opacity: 0→1, scale: 0.95→1)
    - Motion drop-in for subtitle (y: 20→0, opacity: 0→1, delay: 0.5s)
    - Motion drop-in for description (delay: 0.7s)
    - Motion scale-in for CTA buttons (delay: 1s)
    - Gradient radial background
    - Min height 100vh, centered content

- [x] **Task 3.2:** Create BrandButton Component
  - Files: `components/ui/BrandButton.tsx`
  - Details:
    - Variants: youtube (red #ff0000), spotify (green #1DB954)
    - SVG icons for each brand
    - Hover effects: transform translateY(-3px), shadow glow
    - Flex layout with icon + text

### Phase 4: Homepage Content Sections
**Goal:** Build remaining homepage sections with drop-in title animations

- [x] **Task 4.1:** Create BreakingNewsSection Component
  - Files: `components/home/BreakingNewsSection.tsx`, `components/ui/NewsCard.tsx`
  - Details:
    - Section header with animated title (Motion drop-in)
    - 3-column grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
    - NewsCard: placeholder image, date, title, description, "Read More" link
    - Cards have hover effect (translateY(-5px))

- [x] **Task 4.2:** Create HostsSection and HostSpotlight Components
  - Files: `components/home/HostsSection.tsx`, `components/ui/HostSpotlight.tsx`
  - Details:
    - Container section with animated title
    - HostSpotlight: 2-column grid (bio + visuals)
    - Support reverse layout for Dr. Wendy Watson (blue accent)
    - Badge, name (huge Bebas Neue), bio paragraphs, quote, LinkedIn button
    - Visuals column: portrait with glow effect, expertise card, experience card
    - Portrait glow: red for Melissa, blue for Wendy

- [x] **Task 4.3:** Create VideoSection Component
  - Files: `components/home/VideoSection.tsx`, `components/ui/VideoPlaceholder.tsx`
  - Details:
    - Centered section header with animated title
    - Stack of 7 video placeholders (16:9 aspect ratio)
    - VideoPlaceholder: gray box with play icon, label, hover effect (red border glow)

- [x] **Task 4.4:** Create ExpertsSection and ExpertShowcase Components
  - Files: `components/home/ExpertsSection.tsx`, `components/ui/ExpertShowcase.tsx`
  - Details:
    - Centered section with animated title and subtitle
    - ExpertShowcase: featured expert image (grayscale, color on hover)
    - "Visit Website" button below image

- [x] **Task 4.5:** Create SoundbitesSection and SoundbiteCarousel Components
  - Files: `components/home/SoundbitesSection.tsx`, `components/ui/SoundbiteCarousel.tsx`
  - Details:
    - Section with animated title
    - Carousel with prev/next buttons
    - Instagram placeholders (9:16 aspect ratio, vertical)
    - Carousel logic: track transform, scroll by item width
    - Hover effect: Instagram pink border glow

- [x] **Task 4.6:** Create ExpertiseSection Component
  - Files: `components/home/ExpertiseSection.tsx`
  - Details:
    - Split layout: left "15 YEARS COMBINED EXPERIENCE", right skill list
    - Skill list items: uppercase, bottom border, hover effect (color + padding-left)
    - Animated list items (stagger effect on scroll)

- [x] **Task 4.7:** Create ContactSection and NewsletterForm Components
  - Files: `components/home/ContactSection.tsx`, `components/ui/NewsletterForm.tsx`
  - Details:
    - Centered section with animated title
    - NewsletterForm: email input + subscribe button (UI only)
    - Contact footer: "Would you like your case featured?" + email link

### Phase 5: Homepage Integration
**Goal:** Compose all sections into main page and verify layout

- [x] **Task 5.1:** Update app/page.tsx with Section Imports
  - Files: `app/page.tsx`
  - Details:
    - Remove all default Next.js content
    - Import and render all 8 homepage sections in order
    - Clean, minimal page component (no logic, just composition)

- [x] **Task 5.2:** Verify Responsive Layout
  - Files: All component files
  - Details:
    - Test mobile (320px), tablet (768px), desktop (1024px+)
    - Ensure grid layouts collapse properly
    - Verify font sizes scale appropriately
    - Check touch targets on mobile (buttons, links)

### Phase 6: Animation Polish & Performance
**Goal:** Fine-tune Motion animations and optimize performance

- [x] **Task 6.1:** Implement Scroll-Based Animations for Section Titles
  - Files: All section components
  - Details:
    - Use Motion's `whileInView` prop for section titles
    - Drop-in animation (y: -20→0, opacity: 0→1)
    - Viewport detection (once: true, amount: 0.3)
    - Consistent timing across all sections (0.8s duration)

- [x] **Task 6.2:** Add Stagger Animations for Card Grids
  - Files: `BreakingNewsSection.tsx`, `ExpertiseSection.tsx`
  - Details:
    - Use Motion's stagger functionality
    - Cards fade-in sequentially (delay: stagger 0.1s)
    - Expertise list items stagger left-to-right

- [x] **Task 6.3:** Optimize Image Loading
  - Files: All components using next/image
  - Details:
    - Add `priority` to hero logo (above fold)
    - Add proper `width` and `height` to all images
    - Use `loading="lazy"` for below-fold images
    - Verify alt text on all images

### Phase 7: Final Verification & Code Quality
**Goal:** Ensure code quality, accessibility, and type safety

- [x] **Task 7.1:** TypeScript Type Safety Check
  - Files: All component files
  - Details:
    - Run `npx tsc --noEmit` to check for type errors
    - Ensure all component props have proper interfaces
    - Verify no `any` types used

- [x] **Task 7.2:** Linting and Code Formatting
  - Files: All modified/created files
  - Details:
    - Run `npm run lint` and fix any issues
    - Ensure consistent code style across components
    - Remove unused imports and variables

- [x] **Task 7.3:** Accessibility Audit
  - Files: All components
  - Details:
    - Verify semantic HTML (section, nav, main, footer)
    - Check ARIA labels on carousel buttons
    - Ensure form inputs have associated labels
    - Test keyboard navigation (tab through all interactive elements)

- [x] **Task 7.4:** Visual Comparison with Original HTML
  - Files: N/A (visual inspection)
  - Details:
    - Side-by-side comparison of Next.js site vs original HTML
    - Verify colors match exactly
    - Check spacing and typography
    - Ensure animations feel smooth and natural

### Phase 8: Route Structure Preparation (Future Pages)
**Goal:** Set up basic route structure for future expansion

- [x] **Task 8.1:** Create Placeholder Route Files
  - Files: `app/episodes/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`
  - Details:
    - Create basic placeholder pages with proper metadata
    - "Coming Soon" message with link back to home
    - Proper layout (same TopBanner, Header, Footer)

- [x] **Task 8.2:** Update Header Navigation Links
  - Files: `components/layout/Header.tsx`
  - Details:
    - Add navigation menu (currently just logo + sign in)
    - Future: Episodes, About, Contact links
    - For now: Keep simple logo + sign in layout

---

## 12. Task Completion Tracking - MANDATORY WORKFLOW

### Task Completion Tracking - MANDATORY WORKFLOW
🚨 **CRITICAL: Real-time task completion tracking is mandatory**

- [x] **🗓️ GET TODAY'S DATE FIRST** - Use time tool to get correct current date
- [x] **Update task document immediately** after each completed subtask
- [x] **Mark checkboxes as [x]** with completion timestamp
- [x] **Add brief completion notes** (file paths, key changes, etc.)

### Example Task Completion Format
```
### Phase 1: Project Setup & Asset Migration
**Goal:** Prepare project foundation with fonts, assets, and theme configuration

- [x] **Task 1.1:** Copy Image Assets to public/assets/ ✓ 2025-12-13
  - Files: `public/assets/` directory ✓
  - Details: Copied all 6 images successfully ✓
- [x] **Task 1.2:** Configure Custom Fonts in Root Layout ✓ 2025-12-13
  - Files: `app/layout.tsx` ✓
  - Details: Bebas Neue and Inter configured with CSS variables ✓
```

---

## 13. File Structure & Organization

### New Files to Create
```
alternativeeye-website/
├── app/
│   ├── page.tsx                          # Homepage (replaced)
│   ├── layout.tsx                        # Root layout (updated fonts + metadata)
│   ├── globals.css                       # Global styles (updated theme)
│   ├── episodes/
│   │   └── page.tsx                      # Placeholder route
│   ├── about/
│   │   └── page.tsx                      # Placeholder route
│   └── contact/
│       └── page.tsx                      # Placeholder route
├── components/
│   ├── layout/
│   │   ├── TopBanner.tsx                 # Fixed top banner
│   │   ├── Header.tsx                    # Fixed navigation header
│   │   └── Footer.tsx                    # Site footer
│   ├── home/
│   │   ├── HeroSection.tsx               # Hero with animated logo
│   │   ├── BreakingNewsSection.tsx       # News cards grid
│   │   ├── HostsSection.tsx              # Host spotlights container
│   │   ├── VideoSection.tsx              # Latest episodes stack
│   │   ├── ExpertsSection.tsx            # Featured experts showcase
│   │   ├── SoundbitesSection.tsx         # Instagram carousel
│   │   ├── ExpertiseSection.tsx          # Skills split layout
│   │   └── ContactSection.tsx            # Newsletter + contact
│   └── ui/
│       ├── BrandButton.tsx               # YouTube/Spotify buttons
│       ├── NewsCard.tsx                  # Breaking news card
│       ├── HostSpotlight.tsx             # Detailed host profile
│       ├── VideoPlaceholder.tsx          # Video embed placeholder
│       ├── ExpertShowcase.tsx            # Expert profile display
│       ├── SoundbiteCarousel.tsx         # Instagram carousel with nav
│       └── NewsletterForm.tsx            # Email signup form
├── public/
│   └── assets/
│       ├── logo-hero.jpg                 # (copied from ref)
│       ├── logo-hero-v2.png              # (copied from ref)
│       ├── host-melissa-phelan.jpg       # (copied from ref)
│       ├── dr-wendy-watson.jpg           # (copied from ref)
│       ├── kerrie-droban-zhivago.jpeg    # (copied from ref)
│       └── code-chapter-8-BSNdNKkU.jpeg  # (copied from ref)
└── lib/
    └── types.ts                           # TypeScript interfaces for props
```

**File Organization Rules:**
- **Components**: Feature-based directories (`layout/`, `home/`, `ui/`)
- **Pages**: Only `page.tsx` files in route folders
- **Assets**: All images in `public/assets/` (optimized with next/image)
- **Types**: Shared interfaces in `lib/types.ts`
- **Styles**: Global styles in `app/globals.css` only

---

## 14. Potential Issues & Security Review

### Error Scenarios to Analyze
- [x] **Error Scenario 1: Motion animations cause layout shift**
  - **Code Review Focus:** Check initial and animate states in Motion components
  - **Potential Fix:** Use `layout` prop on Motion components, ensure initial opacity matches final

- [x] **Error Scenario 2: Images not loading (wrong paths)**
  - **Code Review Focus:** Verify all image paths in `next/image` src props
  - **Potential Fix:** Ensure paths start with `/assets/` not `/public/assets/`

- [x] **Error Scenario 3: Carousel breaks on mobile (touch events)**
  - **Code Review Focus:** SoundbiteCarousel component touch handlers
  - **Potential Fix:** Add touch event listeners or use Embla Carousel (already installed)

### Edge Cases to Consider
- [x] **Edge Case 1: Very long email in newsletter form**
  - **Analysis Approach:** Check input max-width and overflow handling
  - **Recommendation:** Add `max-w-full` and proper validation

- [x] **Edge Case 2: Hero section on ultra-wide monitors (3440px+)**
  - **Analysis Approach:** Test hero content centering and max-width
  - **Recommendation:** Ensure max-width constraint on hero content container

- [x] **Edge Case 3: Slow 3G network loading**
  - **Analysis Approach:** Check image optimization and lazy loading
  - **Recommendation:** Ensure `priority` only on hero logo, `loading="lazy"` on rest

### Security & Access Control Review
- [x] **Form Input Validation:** Newsletter email input needs client-side validation (regex)
  - **Check:** Email format validation before submission
- [x] **External Links:** Ensure `target="_blank"` has `rel="noopener noreferrer"`
  - **Check:** All external links (YouTube, Spotify, LinkedIn)
- [x] **XSS Prevention:** No user-generated content, all static - low risk
  - **Check:** N/A for static content
- [x] **CSRF Protection:** No forms submitting to backend yet - N/A
  - **Check:** Will be needed when newsletter form connects to Server Action

### AI Agent Analysis Approach
**Focus:** Review component structure for accessibility issues, ensure proper semantic HTML, verify Motion animations don't cause performance issues (check for layout thrashing). Verify all images have proper alt text and all interactive elements are keyboard accessible.

**Priority Order:**
1. **Critical:** Accessibility (ARIA labels, semantic HTML, keyboard nav)
2. **Important:** Performance (image optimization, animation performance)
3. **Nice-to-have:** Enhanced error messaging, form validation UX

---

## 15. Deployment & Configuration

### Environment Variables
**N/A** - No environment variables needed for static marketing site.

**Future Considerations:**
When adding newsletter backend integration:
```bash
# Add these to .env.local
SENDGRID_API_KEY=your_api_key_here
MAILCHIMP_API_KEY=your_api_key_here
```

---

## 16. AI Agent Instructions

### Default Workflow - STRATEGIC ANALYSIS FIRST
🎯 **STANDARD OPERATING PROCEDURE:**

**Task document created with strategic analysis completed. Awaiting user approval to proceed with implementation.**

### Communication Preferences
- [x] Ask for clarification if requirements are unclear
- [x] Provide regular progress updates after each phase
- [x] Flag any blockers or concerns immediately
- [x] Suggest improvements or alternatives when appropriate

### Implementation Approach - CRITICAL WORKFLOW
🚨 **MANDATORY: Follow exact sequence outlined in task template section 16**

**Current Status:** Task document created and awaiting user approval before implementation.

### Code Quality Standards
- [x] Follow TypeScript best practices (strict mode)
- [x] Add proper error handling (try/catch for async operations)
- [x] Write professional comments explaining business logic
- [x] Use early returns for cleaner code
- [x] Use async/await instead of .then() chaining
- [x] Fail fast - throw errors instead of fallback behavior
- [x] Ensure responsive design (mobile-first with Tailwind breakpoints)
- [x] Test components in dark mode
- [x] Verify mobile usability on 320px+ width devices
- [x] Follow accessibility guidelines (WCAG AA)
- [x] Use semantic HTML elements
- [x] Clean up removal artifacts (no placeholder comments)

### Architecture Compliance
- [x] **No API routes needed** - Static marketing site
- [x] **No server actions yet** - Newsletter form UI only
- [x] **Client components for animations** - Motion requires 'use client'
- [x] **Component-based architecture** - Modular, reusable components
- [x] **Type safety** - All props have proper TypeScript interfaces

---

## 17. Notes & Additional Context

### Research Links
- Motion Documentation: https://motion.dev/docs/react
- Next.js Font Optimization: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Tailwind CSS 4.0: https://tailwindcss.com/docs
- shadcn/ui Components: https://ui.shadcn.com

### Key Design Decisions
1. **Motion over Framer Motion:** User has Motion 12.23.26 installed, which is the newer library from the creators of Framer Motion
2. **Dark theme only:** Original design is dark-focused, no light mode needed
3. **Component modularity:** Breaking sections into components supports future multi-page expansion
4. **next/font/google:** Optimizes font loading with automatic font subsetting and preloading

---

## 18. Second-Order Consequences & Impact Analysis

### AI Analysis Instructions
🔍 **MANDATORY: Analyze second-order consequences before implementation**

### Impact Assessment Framework

#### 1. **Breaking Changes Analysis**
- [x] **Existing API Contracts:** N/A - No existing APIs
- [x] **Database Dependencies:** N/A - No database
- [x] **Component Dependencies:** Replacing default Next.js page - no dependencies
- [x] **Authentication/Authorization:** Sign In button non-functional initially (future feature)

#### 2. **Ripple Effects Assessment**
- [x] **Data Flow Impact:** Static content only, no data flow yet
- [x] **UI/UX Cascading Effects:** Complete homepage redesign - all default content removed
- [x] **State Management:** Local component state only (carousel, form inputs)
- [x] **Routing Dependencies:** Adding placeholder routes won't affect existing homepage

#### 3. **Performance Implications**
- [x] **Database Query Impact:** N/A - No database
- [x] **Bundle Size:** Motion library adds ~50KB gzipped (already installed)
- [x] **Server Load:** Static site - minimal server load
- [x] **Caching Strategy:** Next.js automatic static optimization handles caching

#### 4. **Security Considerations**
- [x] **Attack Surface:** Low - static marketing site with no user input processing yet
- [x] **Data Exposure:** No sensitive data - all content is public
- [x] **Permission Escalation:** N/A - No authentication system yet
- [x] **Input Validation:** Newsletter form is UI-only for now, validation needed when connecting backend

#### 5. **User Experience Impacts**
- [x] **Workflow Disruption:** Complete redesign - no existing users to disrupt (new site)
- [x] **Data Migration:** N/A - No user data
- [x] **Feature Deprecation:** Removing default Next.js template (not used)
- [x] **Learning Curve:** New navigation structure, but intuitive design

#### 6. **Maintenance Burden**
- [x] **Code Complexity:** Moderate - 16 components to maintain vs 1 monolithic file (easier long-term)
- [x] **Dependencies:** Motion (stable), next/font (built-in), shadcn/ui (already installed)
- [x] **Testing Overhead:** Component-based architecture enables unit testing
- [x] **Documentation:** Component props clearly typed, JSDoc comments for complex logic

### Critical Issues Identification

#### 🚨 **RED FLAGS - Alert User Immediately**
- **None identified** - This is a greenfield project with no production users or existing data

#### ⚠️ **YELLOW FLAGS - Discuss with User**
- [x] **Motion Bundle Size:** ~50KB gzipped added to client bundle
  - Mitigation: Already installed, acceptable for high-quality animations on marketing site
- [x] **Client-Side Rendering for Animations:** Sections with Motion need 'use client'
  - Mitigation: Only animated components are client components, rest can stay server components
- [x] **Asset Optimization:** 6 images need proper sizing/compression
  - Mitigation: next/image handles optimization automatically

### Mitigation Strategies

#### Performance Optimization
- [x] **Image Optimization:** Use next/image with proper width/height, lazy loading below fold
- [x] **Font Optimization:** next/font/google handles automatic subsetting and preloading
- [x] **Code Splitting:** Next.js automatic code splitting per route
- [x] **Animation Performance:** Motion uses hardware acceleration (transform, opacity)

#### Accessibility
- [x] **Semantic HTML:** All sections use proper HTML5 elements
- [x] **ARIA Labels:** Carousel buttons, form inputs properly labeled
- [x] **Keyboard Navigation:** All interactive elements keyboard accessible
- [x] **Focus Management:** Proper focus styles in Tailwind

#### Future Scalability
- [x] **Component Reusability:** NewsCard, HostSpotlight, etc. can be reused on future pages
- [x] **Type Safety:** All props typed, easy to refactor
- [x] **Route Structure:** Placeholder routes ready for expansion
- [x] **Newsletter Integration:** Form UI ready, easy to connect Server Action later

### AI Agent Checklist

Before presenting implementation options to user:
- [x] **Complete Impact Analysis:** All sections filled out above
- [x] **Identify Critical Issues:** No red flags identified
- [x] **Propose Mitigation:** Performance and accessibility strategies documented
- [x] **Alert User:** Yellow flags noted (bundle size, client components)
- [x] **Recommend Alternatives:** Modular architecture chosen for scalability

### Summary
🟢 **LOW RISK IMPLEMENTATION** - This is a greenfield project with no existing users, no database, and no API integrations. The main considerations are:
1. Performance (Motion bundle size acceptable, images optimized via next/image)
2. Accessibility (proper semantic HTML and ARIA labels planned)
3. Future scalability (component architecture supports multi-page expansion)

No blocking issues identified. Ready to proceed with implementation.

---

*Template Version: 1.3*  
*Task Created: 2025-12-13*  
*Task Number: 001*

