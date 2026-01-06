import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Alternative Eye Terms and Conditions - Review our terms of use and guidelines.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen px-4 sm:px-8 pb-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-heading mb-4 tracking-wider">
            TERMS AND CONDITIONS
          </h1>
          <p className="text-sm text-gray-500 font-body italic">
            Last updated: 12/16/2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none font-body text-gray-300 leading-relaxed space-y-8">
          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Alternative Eye website (the &quot;Site&quot;), including all content, media, podcasts, videos, articles, and related services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">2. Purpose of the Site</h2>
            <p>
              Alternative Eye is a media and investigative commentary platform focused on crime analysis, cold cases, behavioral profiling, interviews, and investigative storytelling. <strong>Content is provided for educational, informational, and public-interest purposes only.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">3. No Professional, Legal, or Law Enforcement Advice</h2>
            <p>
              Content on this Site does <strong>not</strong> constitute legal advice, law enforcement guidance, forensic determinations, psychological diagnoses, or professional investigative services. Users should not rely on any content as a substitute for advice from qualified professionals, including attorneys, licensed investigators, clinicians, or law enforcement authorities.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">4. Investigative & Content Disclaimer</h2>
            <p className="mb-4">
              Alternative Eye produces investigative commentary and media content that may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Analysis of cold cases</strong></li>
              <li><strong>Review of historical and contemporary criminal matters</strong></li>
              <li><strong>Behavioral and pattern-based analysis</strong></li>
              <li><strong>Interviews with experts, witnesses, or members of the public</strong></li>
              <li><strong>Review of documents, records, and publicly available information</strong></li>
            </ul>
            <p className="mb-4">
              All content reflects <strong>analysis, opinion, and interpretation</strong>, not statements of fact or legal conclusions. Alternative Eye does not accuse, identify, or legally implicate any individual and does not claim to solve crimes or replace official investigations.
            </p>
            <p>
              Information discussed may be incomplete, disputed, or subject to change. Reasonable efforts are made to review sources, but accuracy or completeness is not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">5. Intellectual Property</h2>
            <p className="mb-4">
              All content on the Site, including text, audio, video, graphics, logos, trademarks, investigative frameworks, and branding, is the exclusive property of Alternative Eye or its licensors and is protected by U.S. and international intellectual property laws.
            </p>
            <p>
              No content may be reproduced, distributed, modified, published, or exploited without prior written consent, except for limited personal, non-commercial use with proper attribution.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">6. User Conduct</h2>
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harass, threaten, defame, or harm others</li>
              <li>Misrepresent facts, identities, or affiliations</li>
              <li>Encourage harassment, vigilantism, or interference with investigations</li>
              <li>Attempt to disrupt the Site&apos;s operation or security</li>
              <li>Use the Site for unlawful or malicious purposes</li>
            </ul>
            <p className="mt-4">
              Alternative Eye reserves the right to remove content or restrict access at its discretion.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">7. Third-Party Content & Links</h2>
            <p>
              The Site may include third-party links, interviews, or references. Alternative Eye does not control or endorse third-party content and is not responsible for its accuracy, availability, or practices.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Alternative Eye shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from use of the Site or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Alternative Eye, its owners, affiliates, contributors, and partners from any claims, losses, or damages arising from your use of the Site or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed under the laws of the United States and the State in which Alternative Eye is incorporated, without regard to conflict-of-law principles.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">11. Changes to Terms</h2>
            <p>
              Alternative Eye may update these Terms at any time. Continued use of the Site constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">Contact</h2>
            <p className="mb-4">
              <strong>Alternative Eye</strong>
            </p>
            <p>
              <Link 
                href="/contact" 
                className="text-white hover:underline transition-colors"
              >
                SEE CONTACT PAGE
              </Link>
            </p>
          </section>

          <section className="pt-8 border-t border-[#333]">
            <p className="text-sm text-gray-500 italic">
              <em>This document is provided for general informational purposes and does not constitute legal advice. Consultation with a qualified attorney is recommended before publication.</em>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

