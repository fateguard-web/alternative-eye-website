import type { Metadata } from 'next';
import { EpisodesClient } from './EpisodesClient';

export const metadata: Metadata = {
  title: 'Episodes | Alternative Eye',
  description: 'Beyond the File — Where Crime Meets Code. Watch our latest episodes exploring true crime cases through investigative analysis and expert insights.',
};

export default function EpisodesPage() {
  return <EpisodesClient />;
}
