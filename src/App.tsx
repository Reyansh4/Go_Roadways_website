import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DevBanner from './components/DevBanner';
import TorontoInfo from './components/TorontoInfo';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RidePage from './pages/RidePage';
import DrivePage from './pages/DrivePage';
import ExplorePage from './pages/ExplorePage';
import AboutPage from './pages/AboutPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      // Check system preference
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Update localStorage when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <DevBanner darkMode={darkMode} />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <TorontoInfo darkMode={darkMode} />
        
            <Routes>
              <Route path="/" element={<HomePage darkMode={darkMode} />} />
              <Route path="/ride" element={<RidePage darkMode={darkMode} />} />
              <Route path="/drive" element={<DrivePage darkMode={darkMode} />} />
              <Route path="/explore" element={<ExplorePage darkMode={darkMode} />} />
              <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
            </Routes>
        
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;