import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Alternative Eye',
  description: 'Alternative Eye Privacy Policy - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen px-4 sm:px-8 pb-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-heading mb-4 tracking-wider">
            PRIVACY POLICY
          </h1>
          <p className="text-sm text-gray-500 font-body italic">
            Last updated: 12/16/2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none font-body text-gray-300 leading-relaxed space-y-8">
          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">1. Information We Collect</h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Personal information voluntarily provided</strong> (name, email address, contact details)</li>
              <li><strong>Communications sent to Alternative Eye</strong></li>
              <li><strong>Limited technical data</strong> (IP address, browser type, device information)</li>
              <li><strong>Analytics and usage data</strong> to understand how the Site is accessed and used</li>
            </ul>
            <p>
              Alternative Eye does <strong>not</strong> knowingly collect personal information from children under the age of 13.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">2. How We Use Information</h2>
            <p className="mb-4">
              Information collected may be used to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate, maintain, and improve the Site</li>
              <li>Communicate with users and respond to inquiries</li>
              <li>Analyze audience engagement and Site performance</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">3. Sharing of Information</h2>
            <p className="mb-4">
              Alternative Eye does not sell personal information. Information may be shared only:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted service providers assisting in Site operations</li>
              <li>When required by law, subpoena, or legal process</li>
              <li>To protect the rights, safety, or integrity of Alternative Eye, its users, or the public</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">4. Cookies & Analytics</h2>
            <p>
              The Site may use cookies or similar technologies for functionality and analytics purposes. You may disable cookies through your browser settings, though certain features of the Site may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">5. Data Security</h2>
            <p>
              Reasonable administrative and technical measures are taken to protect personal information. However, no method of transmission or storage is completely secure, and absolute security cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or limit certain processing activities</li>
            </ul>
            <p>
              Requests may be submitted using the contact information below.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">7. Third-Party Platforms</h2>
            <p>
              Alternative Eye content may be hosted or distributed through third-party platforms such as podcast hosts, video platforms, or social media networks. Their privacy practices are governed by their respective policies, not this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">8. Changes to This Policy</h2>
            <p>
              This Privacy Policy may be updated periodically. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading mb-4 text-white">Contact</h2>
            <p className="mb-4">
              For privacy-related questions or requests, contact:
            </p>
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
              <em>This Privacy Policy is provided for general informational purposes and does not constitute legal advice. Consultation with a qualified attorney is recommended before publication.</em>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

