import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import BetaProgram from '../components/BetaProgram';

interface HomePageProps {
  darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <BetaProgram darkMode={darkMode} />
    </>
  );
};

export default HomePage;
