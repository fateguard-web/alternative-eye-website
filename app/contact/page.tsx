'use client';

import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo, MailingAddress, FollowUsSection } from '@/components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 sm:px-8 pb-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading mb-6 tracking-wider">
            CONTACT US
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-body max-w-2xl mx-auto leading-relaxed">
            Have a case you&apos;d like us to investigate? Questions about the show? 
            We&apos;d love to hear from you. Fill out the form and we&apos;ll get back 
            to you as soon as possible.
          </p>
        </div>

        {/* Desktop: Two-column layout with Info (left) and Form (right) */}
        {/* Mobile: Form, then Mailing Address, then Follow Us, then Response Time */}
        <div className="mb-16">
          {/* Mobile Layout: Stacked vertically */}
          <div className="flex flex-col gap-8 lg:hidden">
            {/* Contact Form - appears first on mobile */}
            <ContactForm />
            
            {/* Mailing Address */}
            <MailingAddress />
            
            {/* Follow Us Section */}
            <div className="space-y-6">
              <FollowUsSection />
            </div>
          </div>

          {/* Desktop Layout: Two-column grid */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

