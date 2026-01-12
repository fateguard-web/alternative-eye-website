'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '@/app/actions/newsletter';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const result = await subscribeNewsletter(email);
      
      if (result.success) {
        setStatus('success');
        setEmail('');
        // Auto-dismiss success message after 4 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to subscribe. Please try again.');
        setTimeout(() => {
          setStatus('idle');
          setErrorMessage('');
        }, 5000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
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
          disabled={status === 'submitting'}
          className="flex-1 px-4 py-3 bg-transparent border border-[#333] text-white font-body focus:outline-none focus:border-[#ff0000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-8 py-3 bg-white text-black font-semibold rounded transition-all duration-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {status === 'submitting' && (
            <Loader2 className="w-4 h-4 animate-spin" />
          )}
          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {/* Success Message */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg mt-4"
        >
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <p className="text-green-500 font-body">
            Successfully subscribed! Check your email for a welcome message.
          </p>
        </motion.div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg mt-4"
        >
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-500 font-body">
            {errorMessage}
          </p>
        </motion.div>
      )}

      <p className="text-sm text-gray-500 mt-4 font-body">
        We&apos;ll never spam you or share your email. Unsubscribe anytime.
      </p>
    </div>
  );
}

