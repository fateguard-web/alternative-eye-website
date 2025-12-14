'use client';

import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen px-4 sm:px-8 pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading mb-4">
            CONTACT US
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-body">
            Get in touch with the Alternative Eye team
          </p>
        </div>

        {/* Two-column layout: Info (left) and Form (right) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

