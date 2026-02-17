import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SoldPropertiesPage from './SoldPropertiesPage.jsx'
import './index.css'

function Router() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check initial hash
    const hash = window.location.hash;
    if (hash === '#/sold') {
      setCurrentPage('sold');
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/sold') {
        setCurrentPage('sold');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'sold') {
    return <SoldPropertiesPage />;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

