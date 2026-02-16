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
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('Strona Główna')}>
            <img
              src="/image.png"
              alt="CKiK Logo"
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8">
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
          </div>

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
          </div>
        )}
      </div>
    </nav>
  );
}
