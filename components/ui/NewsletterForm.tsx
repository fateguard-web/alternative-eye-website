'use client';

import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: Submit to Server Action
    console.log('Newsletter signup:', email);
  };

  return (
    <div className="max-w-[500px] mx-auto my-12">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 bg-transparent border border-[#333] text-white font-body focus:outline-none focus:border-[#ff0000] transition-colors"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-white text-black font-semibold rounded transition-all duration-300 hover:bg-gray-200"
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4 font-body">
        We&apos;ll never spam you or share your email. Unsubscribe anytime.
      </p>
    </div>
  );
}

