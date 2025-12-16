import React from 'react';

interface MarketingBannerProps {
  darkMode: boolean;
}

const MarketingBanner: React.FC<MarketingBannerProps> = ({ darkMode }) => {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-12 sm:h-14 ${
      darkMode ? 'bg-orange-900/95' : 'bg-orange-100'
    } border-b ${darkMode ? 'border-orange-800' : 'border-orange-200'} backdrop-blur-sm overflow-hidden`}>
      <div className="relative flex items-center h-full py-2.5">
        {/* Fixed OFFER Badge */}
        <div className="flex-shrink-0 z-10 px-3 sm:px-4 md:px-6">
          <div className="new-badge animate-badge-pulse">
            <span className="text-xs sm:text-sm md:text-base font-black">OFFER</span>
          </div>
        </div>
        
        {/* Scrolling Text Container */}
        <div className="marquee-wrapper flex-1 min-w-0">
          <div className="marquee-track">
            {[...Array(10)].map((_, i) => (
              <span 
                key={i}
                className={`text-base sm:text-lg md:text-xl font-bold whitespace-nowrap ${darkMode ? 'text-orange-200' : 'text-orange-800'} marquee-text-item`}
                aria-hidden={i > 0}
              >
                Special Holiday Offer: Get upto 20% OFF on all rides! 🎉
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBanner;
