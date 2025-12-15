'use client';

import { useState } from 'react';
import { CaseArticleCard } from '@/components/case-intelligence/CaseArticleCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination';

// Sample data for demonstration - replace with real CMS/database data
const SAMPLE_ARTICLES = [
  {
    id: '1',
    slug: 'decoding-cryptocurrency-fraud',
    title: 'Decoding Cryptocurrency Fraud',
    description:
      'An in-depth analysis of modern cryptocurrency fraud schemes and how blockchain forensics are revolutionizing financial crime investigations.',
    featuredImage: '',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    author: 'Dr. Sarah Mitchell',
  },
  {
    id: '2',
    slug: 'digital-footprints-murder-case',
    title: 'Digital Footprints in a Murder Case',
    description:
      'How GPS data, social media activity, and cell phone records helped solve a cold case that had stumped investigators for over a decade.',
    featuredImage: '',
    date: 'Dec 8, 2025',
    readTime: '12 min read',
    author: 'James Rodriguez',
  },
  {
    id: '3',
    slug: 'ai-powered-forensic-analysis',
    title: 'AI-Powered Forensic Analysis',
    description:
      'Exploring how artificial intelligence and machine learning are transforming evidence analysis and pattern recognition in criminal investigations.',
    featuredImage: '',
    date: 'Dec 5, 2025',
    readTime: '10 min read',
    author: 'Dr. Emily Chen',
  },
  {
    id: '4',
    slug: 'anatomy-of-corporate-espionage',
    title: 'Anatomy of Corporate Espionage',
    description:
      'A deep dive into a multi-million dollar corporate espionage case involving trade secrets, insider threats, and international data theft.',
    featuredImage: '',
    date: 'Dec 3, 2025',
    readTime: '15 min read',
    author: 'Michael Torres',
  },
  {
    id: '5',
    slug: 'darknet-marketplace-takedown',
    title: 'Darknet Marketplace Takedown',
    description:
      'The coordinated international operation that dismantled one of the largest illegal marketplaces on the dark web and brought its operators to justice.',
    featuredImage: '',
    date: 'Nov 28, 2025',
    readTime: '11 min read',
    author: 'Alex Johnson',
  },
  {
    id: '6',
    slug: 'forensic-linguistics-ransom-note',
    title: 'Forensic Linguistics and the Ransom Note',
    description:
      'How linguistic analysis and writing pattern recognition helped identify the author of a threatening ransom note in a high-profile kidnapping case.',
    featuredImage: '',
    date: 'Nov 25, 2025',
    readTime: '9 min read',
    author: 'Dr. Rachel Adams',
  },
  {
    id: '7',
    slug: 'social-engineering-attack',
    title: 'Social Engineering Attack Exposed',
    description:
      'Breaking down a sophisticated social engineering attack that compromised a Fortune 500 company and exposed millions of customer records.',
    featuredImage: '',
    date: 'Nov 22, 2025',
    readTime: '10 min read',
    author: 'David Kim',
  },
  {
    id: '8',
    slug: 'metadata-murder-investigation',
    title: 'When Metadata Solved a Murder',
    description:
      'The surprising role that photo metadata, timestamps, and geolocation data played in uncovering the truth behind a suspicious death.',
    featuredImage: '',
    date: 'Nov 20, 2025',
    readTime: '13 min read',
    author: 'Lisa Martinez',
  },
  {
    id: '9',
    slug: 'ransomware-crisis-response',
    title: 'Ransomware Crisis Response',
    description:
      'A case study of how rapid response, digital forensics, and negotiation tactics helped a hospital recover from a devastating ransomware attack.',
    featuredImage: '',
    date: 'Nov 18, 2025',
    readTime: '14 min read',
    author: 'Thomas Wright',
  },
  {
    id: '10',
    slug: 'insider-threat-detection',
    title: 'Detecting the Insider Threat',
    description:
      'Advanced behavioral analytics and anomaly detection techniques that identified a trusted employee stealing sensitive intellectual property.',
    featuredImage: '',
    date: 'Nov 15, 2025',
    readTime: '11 min read',
    author: 'Dr. Patricia Lee',
  },
  {
    id: '11',
    slug: 'cyberstalking-digital-evidence',
    title: 'Cyberstalking and Digital Evidence',
    description:
      'How investigators traced online harassment campaigns and built a compelling case using IP logs, social media forensics, and digital breadcrumbs.',
    featuredImage: '',
    date: 'Nov 12, 2025',
    readTime: '10 min read',
    author: 'Jennifer Brooks',
  },
  {
    id: '12',
    slug: 'supply-chain-attack-analysis',
    title: 'Supply Chain Attack Analysis',
    description:
      'Dissecting a sophisticated supply chain attack that compromised software updates and affected thousands of organizations worldwide.',
    featuredImage: '',
    date: 'Nov 10, 2025',
    readTime: '12 min read',
    author: 'Robert Chen',
  },
  {
    id: '13',
    slug: 'voice-recognition-fraud-case',
    title: 'Voice Recognition in Fraud Cases',
    description:
      'The emerging field of voice biometrics and how audio forensics helped identify perpetrators in a series of phone-based fraud schemes.',
    featuredImage: '',
    date: 'Nov 8, 2025',
    readTime: '9 min read',
    author: 'Dr. Amanda Foster',
  },
  {
    id: '14',
    slug: 'cryptocurrency-laundering-scheme',
    title: 'Cryptocurrency Laundering Scheme',
    description:
      'Unraveling a complex money laundering operation that used mixing services, privacy coins, and decentralized exchanges to hide illicit funds.',
    featuredImage: '',
    date: 'Nov 5, 2025',
    readTime: '13 min read',
    author: 'Marcus Thompson',
  },
  {
    id: '15',
    slug: 'iot-device-security-breach',
    title: 'IoT Device Security Breach',
    description:
      'How a network of compromised smart home devices was used to launch a massive DDoS attack and the forensic techniques used to trace it back.',
    featuredImage: '',
    date: 'Nov 3, 2025',
    readTime: '11 min read',
    author: 'Dr. Kevin Zhang',
  },
  {
    id: '16',
    slug: 'email-forgery-investigation',
    title: 'Email Forgery Investigation',
    description:
      'Analyzing email headers, DKIM signatures, and mail server logs to expose a sophisticated email spoofing campaign targeting executives.',
    featuredImage: '',
    date: 'Nov 1, 2025',
    readTime: '10 min read',
    author: 'Sarah Williams',
  },
  {
    id: '17',
    slug: 'deepfake-detection-methods',
    title: 'Deepfake Detection Methods',
    description:
      'Cutting-edge techniques for identifying AI-generated deepfake videos and audio used in misinformation campaigns and fraud attempts.',
    featuredImage: '',
    date: 'Oct 29, 2025',
    readTime: '12 min read',
    author: 'Dr. Hassan Ali',
  },
  {
    id: '18',
    slug: 'medical-records-breach',
    title: 'Medical Records Breach Investigation',
    description:
      'The complex investigation into a healthcare data breach that exposed patient information and the legal implications that followed.',
    featuredImage: '',
    date: 'Oct 27, 2025',
    readTime: '14 min read',
    author: 'Laura Anderson',
  },
];

export default function CaseIntelligencePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Calculate pagination
  const totalPages = Math.ceil(SAMPLE_ARTICLES.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = SAMPLE_ARTICLES.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen px-8 pt-48 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Page title */}
        <h1 className="text-6xl md:text-8xl font-heading mb-4 text-center">
          CASE INTELLIGENCE
        </h1>
        <p className="text-xl text-gray-400 mb-12 text-center font-body max-w-3xl mx-auto">
          In-depth case analyses, investigative insights, and expert perspectives
          on the intersection of crime, technology, and justice.
        </p>

        {/* Article grid - responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
            <CaseArticleCard key={article.id} {...article} />
          ))}
        </div>

        {/* Pagination controls - only show if multiple pages */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={
                    currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                  }
                />
              </PaginationItem>

              {getPageNumbers().map((pageNum, idx) => (
                <PaginationItem key={idx}>
                  {pageNum === '...' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNum as number);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      isActive={currentPage === pageNum}
                    >
                      {pageNum}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={
                    currentPage === totalPages
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
