'use client';

import { Twitter, Facebook, Linkedin, Share2 } from 'lucide-react';
import { useState } from 'react';

interface SocialShareButtonsProps {
  title: string;
  slug: string;
  siteUrl: string;
}

export function SocialShareButtons({ title, slug, siteUrl }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const articleUrl = `${siteUrl}/case-intelligence/${slug}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(articleUrl);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: articleUrl,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-heading text-white">Share this article</h3>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-lg text-white hover:bg-[#1a1a1a] hover:border-[#333] transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5" />
          <span className="text-sm">Twitter</span>
        </a>

        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-lg text-white hover:bg-[#1a1a1a] hover:border-[#333] transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
          <span className="text-sm">Facebook</span>
        </a>

        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-lg text-white hover:bg-[#1a1a1a] hover:border-[#333] transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
          <span className="text-sm">LinkedIn</span>
        </a>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-lg text-white hover:bg-[#1a1a1a] hover:border-[#333] transition-colors"
          aria-label={copied ? 'Link copied!' : 'Share article'}
        >
          <Share2 className="w-5 h-5" />
          <span className="text-sm">{copied ? 'Copied!' : 'Share'}</span>
        </button>
      </div>
    </div>
  );
}
