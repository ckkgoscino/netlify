import { useState } from 'react';

type NavigationProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = ['Strona Główna', 'Aktualności', 'Zajęcia', 'Kontakt'];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('Strona Główna')}
          >
            <img
              src="/image.png"
              alt="CKiK Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`px-3 py-2 text-lg font-medium transition-colors ${
                  currentPage === page
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-700 hover:text-yellow-400'
                }`}
              >
                {page}
              </button>
            ))}

            {/* IKONA FACEBOOK */}
            <a
              href="https://facebook.com/ckkgoscino"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-700 hover:text-yellow-400 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => {
                  onNavigate(page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  currentPage === page
                    ? 'text-yellow-400 bg-gray-50'
                    : 'text-gray-700 hover:text-yellow-400 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            {/* FACEBOOK MOBILE */}
            <a
              href="https://facebook.com/ckkgoscino"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-400"
            >
              Facebook
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
