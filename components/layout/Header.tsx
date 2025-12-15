import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-10 left-0 w-full z-[1000] py-6 px-8 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-white no-underline font-heading text-2xl tracking-[0.1em] hover:text-gray-300 transition-colors flex items-center gap-3"
        >
          <Image
            src="/assets/alternative-eye.png"
            alt="Alternative Eye Logo"
            width={40}
            height={32}
            className="w-10 h-8"
            priority
          />
          ALTERNATIVE EYE
        </Link>
        
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-white no-underline text-sm font-medium hover:text-gray-300 transition-colors hidden sm:block"
          >
            Home
          </Link>
          <Link
            href="/episodes"
            className="text-white no-underline text-sm font-medium hover:text-gray-300 transition-colors hidden sm:block"
          >
            Episodes
          </Link>
          <Link
            href="/beyond-the-file"
            className="text-white no-underline text-sm font-medium hover:text-gray-300 transition-colors hidden sm:block"
          >
            Beyond the File
          </Link>
          <Link
            href="/case-intelligence"
            className="text-white no-underline text-sm font-medium hover:text-gray-300 transition-colors hidden sm:block"
          >
            Case Intelligence
          </Link>
          <Link
            href="/contact"
            className="text-white no-underline text-sm font-medium hover:text-gray-300 transition-colors hidden sm:block"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

