'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { YouTubeEmbed } from './YouTubeEmbed';
import { Episode } from '@/lib/types/episode';
import { Clock, Calendar } from 'lucide-react';

interface EpisodeCardProps {
  episode: Episode;
  index: number;
}

export function EpisodeCard({ episode, index }: EpisodeCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left: YouTube Video */}
        <div className="w-full">
          <YouTubeEmbed videoId={episode.youtubeId} title={episode.title} />
        </div>

        {/* Right: Metadata */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Episode Meta Info */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 mb-3">
              <span className="font-heading text-white text-lg">
                EP {episode.episodeNumber}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {episode.publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {episode.duration}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-heading mb-3 leading-tight">
              {episode.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6">
              {episode.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={episode.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1DB954] text-black font-medium rounded-lg hover:bg-[#1ed760] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.78-.6 13.5 1.62.42.181.6.779.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Listen on Spotify
            </a>

            <Link
              href={`/episodes/${episode.id}`}
              className="inline-flex items-center justify-center px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Episode Page
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
