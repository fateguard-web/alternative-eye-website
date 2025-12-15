export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  publishDate: string;
  duration: string;
  youtubeId: string;
  spotifyUrl: string;
  thumbnailUrl?: string;
}
