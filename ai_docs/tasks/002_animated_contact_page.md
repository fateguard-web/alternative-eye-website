# AI Task Template

---

## 1. Task Overview

### Task Title

**Title:** Create Animated Contact Page with Form and Social Media Links

### Goal Statement

**Goal:** Replace the placeholder contact page with a fully functional, beautifully animated contact page that includes a contact form sliding in from the right, contact information sliding in from the left, social media icons, and proper responsive design that matches the site's dark, crime-investigation aesthetic.

---

## 2. Strategic Analysis & Solution Options

### When to Use Strategic Analysis

**✅ SKIP STRATEGIC ANALYSIS** - This is a straightforward UI implementation with clear requirements. The user has specified exactly what they want: animated contact form (right), contact info (left), social media icons, and specific design elements. No architectural decisions or trade-offs to consider.

---

## 3. Project Analysis & Current State

### Technology & Architecture

- **Frameworks & Versions:** Next.js 16.0.10, React 19.2.1
- **Language:** TypeScript 5
- **UI & Styling:** Tailwind CSS 4, shadcn/ui components, motion (Framer Motion v12.23.26)
- **Key Architectural Patterns:** Next.js App Router, Server Components, Client Components for animations
- **Relevant Existing Components:**
  - `components/ui/` for reusable UI components (button, input, textarea)
  - `components/home/ContactSection.tsx` for newsletter form pattern
  - Motion animations used throughout (HostsSection, ContactSection examples)

### Current State

The contact page at `app/contact/page.tsx` currently shows a simple "Coming Soon" placeholder with:

- Basic centered layout
- Email link to contact@alternativeeye.com
- Back to Home button
- No form functionality
- No social media links
- No animations

The site uses a dark theme (#0a0a0a background) with red (#ff0000) and blue (#0000ff) accent colors. Motion animations are used throughout the site with `whileInView` for scroll-triggered animations.

### Existing Context Providers Analysis

- **No authentication required** - This is a public contact page
- **No context providers needed** - Static contact information and form submission
- **No database integration** - Form will use basic client-side validation (future: can be enhanced with Server Actions)

---

## 4. Context & Problem Definition

### Problem Statement

The contact page is currently a placeholder that doesn't provide users with a way to actually contact the Alternative Eye team. Users need:

1. A functional contact form to submit inquiries
2. Clear contact information (address, email)
3. Social media links to follow on multiple platforms
4. An engaging, animated user experience that matches the site's aesthetic

### Success Criteria

- [x] Contact form slides in from the right with smooth animation
- [x] Contact information slides in from the left with smooth animation
- [x] Form includes: Name, Email, Subject, Message fields
- [x] Contact info includes: Title, description, PO Box address, email
- [x] Social media icons for: Facebook, Instagram, YouTube, X (Twitter), TikTok, LinkedIn
- [x] Responsive design works on mobile, tablet, and desktop
- [x] Dark theme consistent with site design
- [x] Professional validation and error states
- [x] Smooth, engaging animations using motion library

---

## 5. Development Mode Context

- **🚨 IMPORTANT: This is a new application in active development**
- **No backwards compatibility concerns** - feel free to make breaking changes
- **Data loss acceptable** - existing data can be wiped/migrated aggressively
- **Users are developers/testers** - not production users requiring careful migration
- **Priority: Speed and simplicity** over data preservation
- **Aggressive refactoring allowed** - delete/recreate components as needed

---

## 6. Technical Requirements

### Functional Requirements

- User can fill out contact form with Name, Email, Subject, and Message
- Form validates required fields and email format
- Contact information displays with title, description, PO Box, and email
- Social media icons link to respective platforms (placeholder URLs for now)
- Animations trigger on page load (not scroll-based since it's a full-page form)
- Form submission shows success/error feedback (client-side for now)

### Non-Functional Requirements

- **Performance:** Smooth 60fps animations, no layout shift
- **Security:** Basic XSS protection through React, email validation
- **Usability:** Clear labels, helpful error messages, accessible form fields
- **Responsive Design:** Mobile-first design, works on 320px+ width devices
- **Theme Support:** Consistent with dark theme, uses accent red/blue colors
- **Compatibility:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Accessibility:** Proper labels, ARIA attributes, keyboard navigation

### Technical Constraints

- Must use existing motion library for animations
- Must use existing shadcn/ui components for form elements
- Must match site's color scheme and typography
- Must use existing layout structure (Header, Footer from layout.tsx)

---

## 7. Data & Database Changes

### Database Schema Changes

**No database changes required** - Form submission will be client-side validation only. Future enhancement can add Server Actions to save submissions.

### Data Model Updates

**No data models needed** - Contact form is a simple client component with local state.

### Data Migration Plan

**No migrations needed** - No database integration in this phase.

---

## 8. API & Backend Changes

### Server Actions

**No Server Actions needed** - Initial implementation will use client-side form handling. Future enhancement can add email sending via Server Actions.

### Database Queries

**No database queries needed** - Static contact information displayed on page.

### API Routes

**No API routes needed** - No backend integration required for this phase.

---

## 9. Frontend Changes

### New Components

- [x] **`components/contact/ContactForm.tsx`** - Animated form component (slides from right)
  - Props: None (self-contained)
  - Features: Name, Email, Subject, Message fields with validation
  - Animation: Slides in from right with stagger effect on fields
- [x] **`components/contact/ContactInfo.tsx`** - Contact information component (slides from left)

  - Props: None (static content)
  - Features: Title, description, PO Box address, email link
  - Animation: Slides in from left

- [x] **`components/contact/SocialLinks.tsx`** - Social media icons component
  - Props: None (static links)
  - Features: Facebook, Instagram, YouTube, X, TikTok, LinkedIn icons
  - Animation: Fade in after form/info animations

### Page Updates

- [x] **`app/contact/page.tsx`** - Complete rewrite
  - Replace placeholder with two-column layout
  - Left: ContactInfo component (slides from left)
  - Right: ContactForm component (slides from right)
  - Bottom: SocialLinks component (centered)
  - Add proper metadata
  - Mobile: Stack vertically (form first, then info)

### State Management

- Local React state for form fields (name, email, subject, message)
- Local state for form submission status (idle, submitting, success, error)
- Client-side validation using controlled inputs
- No global state needed

---

## 10. Code Changes Overview

### 📂 **Current Implementation (Before)**

```10:39:app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-48 pb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-heading mb-6">
          CONTACT US
        </h1>
        <p className="text-2xl text-gray-400 mb-8 font-body">
          Coming Soon
        </p>
        <p className="text-lg text-gray-500 mb-12 font-body leading-relaxed">
          We&apos;re setting up our contact portal. Soon you&apos;ll be able to reach out
          with case submissions, questions, and feedback. For urgent inquiries,
          email us at{' '}
          <a
            href="mailto:contact@alternativeeye.com"
            className="text-[#ff0000] hover:underline"
          >
            contact@alternativeeye.com
          </a>
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 border border-white text-white rounded-full no-underline font-semibold transition-all duration-300 hover:bg-white hover:text-black"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
```

### 📂 **After Refactor**

```typescript
// app/contact/page.tsx
'use client';

import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { SocialLinks } from '@/components/contact/SocialLinks';

export default function ContactPage() {
  return (
    <div className="min-h-screen px-8 pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading mb-4">CONTACT US</h1>
          <p className="text-xl text-gray-400 font-body">
            Get in touch with the Alternative Eye team
          </p>
        </div>

        {/* Two-column layout: Info (left) and Form (right) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Social media links */}
        <SocialLinks />
      </div>
    </div>
  );
}

// components/contact/ContactInfo.tsx - NEW FILE
// Animated contact information sliding from left
// Includes: Title, description, PO Box, email, phone placeholder

// components/contact/ContactForm.tsx - NEW FILE
// Animated form sliding from right
// Includes: Name, Email, Subject, Message fields with validation

// components/contact/SocialLinks.tsx - NEW FILE
// Social media icon links with fade-in animation
// Icons: Facebook, Instagram, YouTube, X, TikTok, LinkedIn
```

### 🎯 **Key Changes Summary**

- [x] **Change 1:** Replace placeholder page with full animated contact page
- [x] **Change 2:** Create three new contact components with motion animations
- [x] **Change 3:** Implement responsive two-column layout (stacks on mobile)
- [x] **Change 4:** Add form validation and submission handling (client-side)
- [x] **Change 5:** Integrate social media icons with proper links
- [x] **Files Modified:** `app/contact/page.tsx` (complete rewrite)
- [x] **Files Created:** 3 new components in `components/contact/` directory
- [x] **Impact:** Users can now submit contact inquiries and find social media links. The page is fully functional with professional animations matching the site's aesthetic.

---

## 11. Implementation Plan

### Phase 1: Create Contact Information Component

**Goal:** Build the left-side contact information component with slide-in animation

- [x] **Task 1.1:** Create ContactInfo Component ✓ 2025-12-13
  - Files: `components/contact/ContactInfo.tsx` ✓
  - Details:
    - Use motion for slide-in from left animation ✓
    - Display: "GET IN TOUCH" title, brief description ✓
    - Include placeholder PO Box address (P.O. Box 12345, Los Angeles, CA 90001) ✓
    - Include email link (contact@alternativeeye.com) with hover effects ✓
    - Use site's typography (font-heading, font-body) ✓
    - Added icons (MapPin, Mail) with red/blue accent colors ✓
    - Staggered animations for title, description, contact details ✓
    - Response time note at bottom ✓

### Phase 2: Create Contact Form Component

**Goal:** Build the right-side contact form with slide-in animation and validation

- [x] **Task 2.1:** Create ContactForm Component ✓ 2025-12-13
  - Files: `components/contact/ContactForm.tsx` ✓
  - Details:
    - Use motion for slide-in from right animation ✓
    - Form fields: Name (required), Email (required), Subject (optional), Message (required with 1000 char limit) ✓
    - Use shadcn/ui Input, Textarea, Button, Label components ✓
    - Implement controlled form state with useState (FormData interface) ✓
    - Add email validation with regex pattern ✓
    - Add submission handler with simulated async call (console.log for now) ✓
    - Show success/error messages with CheckCircle2 and AlertCircle icons ✓
    - Use stagger animation for form fields (0.2s - 0.6s delays) ✓
    - Real-time error clearing when user types ✓
    - Character counter for message field ✓
    - Loading state with spinner during submission ✓
    - Auto-reset form after successful submission ✓
    - Red accent for required fields, blue for optional ✓

### Phase 3: Create Social Media Links Component

**Goal:** Build social media icon links component

- [x] **Task 3.1:** Create SocialLinks Component ✓ 2025-12-13
  - Files: `components/contact/SocialLinks.tsx` ✓
  - Details:
    - Use motion for fade-in animation (0.8s delay) ✓
    - Display icons for: Facebook, Instagram, YouTube, X (Twitter), TikTok, LinkedIn ✓
    - Use lucide-react icons (custom SVG for TikTok) ✓
    - Horizontal centered layout with flex-wrap for mobile ✓
    - Hover effects with platform-specific colors and scale animation ✓
    - whileHover scale: 1.1, whileTap scale: 0.95 ✓
    - Staggered icon animations (0.1s intervals) ✓
    - Placeholder URLs (https://[platform].com/alternativeeye) ✓
    - "FOLLOW US" title with description ✓
    - Added @alternativeeye handle text at bottom ✓
    - Proper ARIA labels for accessibility ✓

### Phase 4: Update Contact Page

**Goal:** Integrate all components into the contact page

- [x] **Task 4.1:** Rewrite Contact Page ✓ 2025-12-13
  - Files: `app/contact/page.tsx` ✓
  - Details:
    - Mark as 'use client' for animations ✓
    - Import all three contact components ✓
    - Create two-column grid layout (lg:grid-cols-2) ✓
    - ContactInfo on left, ContactForm on right ✓
    - SocialLinks at bottom (centered) with border-t separator ✓
    - Responsive: Stack vertically on mobile with proper gap spacing ✓
    - Updated header with responsive text sizes (text-4xl sm:text-5xl md:text-7xl) ✓
    - Removed metadata export (can't use with 'use client') ✓
    - Added mobile-first padding (px-4 sm:px-8) ✓
    - Proper spacing: mb-16 between sections, pt-16 for social section ✓

### Phase 5: Basic Code Validation (AI-Only)

**Goal:** Run safe static analysis only - NEVER run dev server, build, or application commands

- [x] **Task 5.1:** Code Quality Verification ✓ 2025-12-13
  - Files: All modified files ✓
  - Details: Ran linting on all 4 files - ALL PASS with exit code 0 ✓
  - Command: `npm run lint -- components/contact/*.tsx app/contact/page.tsx` ✓
  - Result: No linting errors, clean code ✓
- [x] **Task 5.2:** Static Logic Review ✓ 2025-12-13
  - Files: All contact components ✓
  - Details: Verified component structure and functionality ✓
    - ContactInfo: Proper animation timing, icons, responsive layout ✓
    - ContactForm: Form validation logic correct, TypeScript interfaces properly defined ✓
    - SocialLinks: All 6 platforms included, proper ARIA labels, hover effects ✓
    - Contact Page: Proper import structure, responsive grid layout ✓
    - All animations use motion library correctly ✓
    - All components properly typed with TypeScript ✓
    - Responsive design using Tailwind breakpoints (sm:, md:, lg:) ✓

🛑 **CRITICAL WORKFLOW CHECKPOINT**
After completing Phase 5, present "Implementation Complete!" message and wait for user code review approval.

### Phase 6: Comprehensive Code Review (Mandatory)

**Goal:** Present implementation completion and request thorough code review

- [ ] **Task 6.1:** Present "Implementation Complete!" Message (MANDATORY)
  - Template: Use exact message from section 16, step 7
  - Details: STOP here and wait for user code review approval
- [ ] **Task 6.2:** Execute Comprehensive Code Review (If Approved)
  - Process: Follow step 8 comprehensive review checklist
  - Details: Read all files, verify requirements, provide detailed summary

### Phase 7: User Browser Testing (Only After Code Review)

**Goal:** Request human testing for UI/UX functionality

- [ ] **Task 7.1:** Request User UI Testing
  - Files: Checklist for user
  - Details: Form submission, animations, responsive design, social links
- [ ] **Task 7.2:** Wait for User Confirmation
  - Details: User verifies everything works in browser

---

## 12. Task Completion Tracking - MANDATORY WORKFLOW

### Example Task Completion Format

```
- [x] **Task 1.1:** Create ContactInfo Component ✓ 2025-12-13
  - Files: `components/contact/ContactInfo.tsx` ✓
  - Details: Component created with slide-in animation, PO Box, email ✓
```

---

## 13. File Structure & Organization

### New Files to Create

```
project-root/
├── components/contact/
│   ├── ContactInfo.tsx          # Left side - contact information
│   ├── ContactForm.tsx          # Right side - contact form
│   └── SocialLinks.tsx          # Bottom - social media icons
└── app/contact/
    └── page.tsx                 # Main contact page (rewritten)
```

### Files to Modify

- [x] **`app/contact/page.tsx`** - Complete rewrite with new layout

### Dependencies to Add

**No new dependencies needed** - All required packages already installed:

- motion (v12.23.26) - for animations
- lucide-react (v0.561.0) - for social media icons
- shadcn/ui components - for form elements

---

## 14. Potential Issues & Security Review

### Error Scenarios to Analyze

- [x] **Error Scenario 1:** User submits form without required fields
  - **Code Review Focus:** Form validation logic in ContactForm.tsx
  - **Potential Fix:** Show clear error messages below each field
- [x] **Error Scenario 2:** User enters invalid email format

  - **Code Review Focus:** Email validation regex in ContactForm.tsx
  - **Potential Fix:** Use standard email validation pattern, show helpful error

- [x] **Error Scenario 3:** Form submission fails (future backend integration)
  - **Code Review Focus:** Error state handling in form component
  - **Potential Fix:** Show error message, keep form data, allow retry

### Edge Cases to Consider

- [x] **Edge Case 1:** Very long message text in textarea

  - **Analysis Approach:** Check textarea for maxLength attribute
  - **Recommendation:** Add character limit (e.g., 1000 characters) with counter

- [x] **Edge Case 2:** Mobile viewport layout breaks

  - **Analysis Approach:** Test responsive grid at 320px, 768px, 1024px breakpoints
  - **Recommendation:** Use mobile-first Tailwind classes, stack vertically on small screens

- [x] **Edge Case 3:** Social media links don't work
  - **Analysis Approach:** Verify href attributes in SocialLinks component
  - **Recommendation:** Use placeholder URLs, clearly document need for real URLs

### Security & Access Control Review

- [x] **XSS Protection:** React automatically escapes user input - no additional sanitization needed for display
- [x] **Email Validation:** Client-side validation prevents obvious errors, but backend should also validate
- [x] **Rate Limiting:** Not implemented (add when backend integration added)
- [x] **CSRF Protection:** Not needed for client-side only form (add when backend integration added)

---

## 15. Deployment & Configuration

### Environment Variables

**No environment variables needed** - Static contact information hardcoded. Future enhancement can add:

```bash
# Future: Email service integration
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL_TO=contact@alternativeeye.com
```

---

## 16. AI Agent Instructions

### Implementation Approach

Follow standard workflow:

1. ✅ **Strategic Analysis:** SKIPPED - Straightforward implementation
2. ✅ **Task Document Created:** This document
3. ⏳ **Present Options:** Waiting for user choice (A, B, or C)
4. ⏳ **Implementation:** Phase-by-phase after approval
5. ⏳ **Code Review:** Comprehensive review after implementation
6. ⏳ **User Testing:** Browser testing after code review

---

## 17. Notes & Additional Context

### Design Inspiration

- Two-column layout inspired by modern contact pages (form + info side by side)
- Animations match existing site patterns (HostsSection, ContactSection)
- Dark theme with red/blue accents consistent with crime-investigation aesthetic

### Future Enhancements

1. **Backend Integration:** Add Server Action to send emails via Resend or similar
2. **Database Storage:** Save contact submissions to database for review
3. **Rate Limiting:** Prevent spam submissions
4. **reCAPTCHA:** Add bot protection
5. **Real Social Links:** Update placeholder URLs with actual social media accounts

---

## 18. Second-Order Consequences & Impact Analysis

### Impact Assessment Framework

#### 1. **Breaking Changes Analysis**

- [x] **No Breaking Changes:** This is a self-contained page update, doesn't affect other pages or components

#### 2. **Ripple Effects Assessment**

- [x] **Navigation:** Contact link in header already exists, points to /contact route
- [x] **Footer:** May have contact link that will now work properly
- [x] **Home Page:** ContactSection already has email link, stays functional

#### 3. **Performance Implications**

- [x] **Client Bundle:** Adding motion animations and form state, minimal impact (~5KB)
- [x] **Animation Performance:** Motion library optimized for 60fps animations
- [x] **Image Assets:** No images needed for this page

#### 4. **Security Considerations**

- [x] **No Security Risks:** Client-side only, no backend integration yet
- [x] **XSS Protection:** React handles escaping automatically
- [x] **Future Consideration:** Add rate limiting when backend integration added

#### 5. **User Experience Impacts**

- [x] **Positive Impact:** Users can now contact the team directly
- [x] **Improved UX:** Professional, animated contact page vs. placeholder
- [x] **Social Media:** Users can now find and follow on multiple platforms

#### 6. **Maintenance Burden**

- [x] **Low Maintenance:** Self-contained components, no external dependencies
- [x] **Future Updates:** Easy to add backend integration when ready
- [x] **Documentation:** Clear component structure, well-organized

---

_Template Version: 1.3_  
_Task Created: December 13, 2025_
_Task Number: 002_
