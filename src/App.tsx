import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ClassesPage from './pages/ClassesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('Strona Główna');

  const renderPage = () => {
    switch (currentPage) {
      case 'Strona Główna':
        return <HomePage />;
      case 'Aktualności':
        return <NewsPage />;
      case 'Zajęcia':
        return <ClassesPage />;
      case 'Kontakt':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
