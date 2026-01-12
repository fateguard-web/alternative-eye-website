'use client';

import { useState } from 'react';
import { EpisodeCard } from '@/components/episodes/EpisodeCard';
import { Pagination } from '@/components/episodes/Pagination';
import { MOCK_EPISODES } from '@/lib/data/episodes';

const EPISODES_PER_PAGE = 10;

export function EpisodesClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * EPISODES_PER_PAGE;
  const endIndex = startIndex + EPISODES_PER_PAGE;
  const displayedEpisodes = MOCK_EPISODES.slice(startIndex, endIndex);
  const totalPages = Math.ceil(MOCK_EPISODES.length / EPISODES_PER_PAGE);

  return (
    <div className="min-h-screen pb-16 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading mb-4 tracking-wider">
            EPISODES
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-body">
            Beyond the File — Where Crime Meets Code
          </p>
        </div>

        {/* Episodes Grid */}
        <div className="space-y-5 mb-8">
          {displayedEpisodes.map((episode, index) => (
            <EpisodeCard key={episode.id} episode={episode} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

