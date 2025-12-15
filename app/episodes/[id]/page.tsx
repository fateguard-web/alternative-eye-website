import { notFound } from 'next/navigation';
import Link from 'next/link';
import { YouTubeEmbed } from '@/components/episodes/YouTubeEmbed';
import { MOCK_EPISODES } from '@/lib/data/episodes';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';

interface EpisodePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return MOCK_EPISODES.map((episode) => ({
    id: episode.id,
  }));
}

export async function generateMetadata({ params }: EpisodePageProps) {
  const { id } = await params;
  const episode = MOCK_EPISODES.find((ep) => ep.id === id);

  if (!episode) {
    return {
      title: 'Episode Not Found | Alternative Eye',
    };
  }

  return {
    title: `Episode ${episode.episodeNumber}: ${episode.title} | Alternative Eye`,
    description: episode.description,
  };
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { id } = await params;
  const episode = MOCK_EPISODES.find((ep) => ep.id === id);

  if (!episode) {
    notFound();
  }

  return (
    <div className="min-h-screen py-32 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <Link
          href="/episodes"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Episodes</span>
        </Link>

        {/* Episode Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="font-heading text-accent-red text-2xl">
              EPISODE {episode.episodeNumber}
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

          <h1 className="text-4xl md:text-5xl font-heading mb-4 leading-tight">
            {episode.title}
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            {episode.description}
          </p>
        </div>

        {/* Video Player */}
        <div className="mb-8">
          <YouTubeEmbed videoId={episode.youtubeId} title={episode.title} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={episode.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1DB954] text-black font-heading text-xl rounded-full hover:bg-[#1ed760] transition-all hover:shadow-[0_5px_20px_rgba(29,185,84,0.4)] hover:-translate-y-1"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.78-.6 13.5 1.62.42.181.6.779.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Listen on Spotify
          </a>

          <a
            href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff0000] text-white font-heading text-xl rounded-full hover:bg-[#e60000] transition-all hover:shadow-[0_5px_20px_rgba(255,0,0,0.4)] hover:-translate-y-1"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube
          </a>
        </div>

        {/* Episode Details Section */}
        <div className="bg-[#1a1a1a] rounded-lg p-8 border border-white/10">
          <h2 className="text-3xl font-heading mb-6">About This Episode</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {episode.description}
            </p>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-heading mb-3">Episode Information</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
                <div>
                  <dt className="font-semibold text-white mb-1">Episode Number</dt>
                  <dd>{episode.episodeNumber}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white mb-1">Duration</dt>
                  <dd>{episode.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white mb-1">Published</dt>
                  <dd>{episode.publishDate}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white mb-1">Format</dt>
                  <dd>Video & Audio Podcast</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
