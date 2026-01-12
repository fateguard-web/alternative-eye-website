'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      const result = await submitContactForm(
        formData.name,
        formData.email,
        formData.subject,
        formData.message
      );

      if (result.success) {
        setStatus('success');
        // Auto-dismiss success message after 4 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 4000);

        // Reset form after success message dismisses
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white/5 border border-white/10 rounded-lg p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <Label htmlFor="name" className="text-sm font-heading tracking-wide">
            NAME *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#ff0000] transition-colors"
            disabled={status === 'submitting'}
          />
          {errors.name && (
            <p className="text-sm text-[#ff0000] flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-2"
        >
          <Label htmlFor="email" className="text-sm font-heading tracking-wide">
            EMAIL *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#ff0000] transition-colors"
            disabled={status === 'submitting'}
          />
          {errors.email && (
            <p className="text-sm text-[#ff0000] flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </motion.div>

        {/* Subject Field */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-2"
        >
          <Label htmlFor="subject" className="text-sm font-heading tracking-wide">
            SUBJECT
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Case submission / General inquiry"
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#0000ff] transition-colors"
            disabled={status === 'submitting'}
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-2"
        >
          <Label htmlFor="message" className="text-sm font-heading tracking-wide">
            MESSAGE *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your case or inquiry..."
            rows={6}
            maxLength={1000}
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#ff0000] transition-colors resize-none"
            disabled={status === 'submitting'}
          />
          <div className="flex justify-between items-center">
            <div>
              {errors.message && (
                <p className="text-sm text-[#ff0000] flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
            </div>
            <p className="text-xs text-gray-500">
              {formData.message.length}/1000
            </p>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-heading text-lg py-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' && (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            )}
            {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
          </Button>
        </motion.div>

        {/* Success Message */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
          >
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <p className="text-green-500 font-body">
              Message sent successfully! We&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-500 font-body">
              Failed to send message. Please try again or email us directly.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
