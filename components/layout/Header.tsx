import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-10 left-0 w-full z-[1000] py-6 px-8 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-white no-underline font-heading text-2xl tracking-[0.1em] hover:text-gray-300 transition-colors"
        >
          ALTERNATIVE EYE
        </Link>
        
        <div className="flex items-center gap-8">
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
            href="/blog"
            className="text-white no-underline text-sm font-medium hover:text-gray-300 transition-colors hidden sm:block"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-white no-underline text-sm font-medium hover:text-gray-300 transition-colors hidden sm:block"
          >
            Contact
          </Link>
          <a
            href="#"
            className="text-white no-underline border border-white px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium hover:bg-white hover:text-black"
          >
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}

