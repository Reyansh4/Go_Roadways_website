import React from 'react';
import { Construction } from 'lucide-react';

interface DevBannerProps {
  darkMode: boolean;
}

const DevBanner: React.FC<DevBannerProps> = ({ darkMode }) => {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${
      darkMode ? 'bg-orange-900/95' : 'bg-orange-100'
    } border-b ${darkMode ? 'border-orange-800' : 'border-orange-200'} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-2">
          <div className="flex items-center space-x-2 text-sm font-medium">
            <Construction className={`h-4 w-4 ${darkMode ? 'text-orange-300' : 'text-orange-600'}`} />
            <span className={darkMode ? 'text-orange-200' : 'text-orange-800'}>
              This website is currently in development mode
            </span>
            <div className={`w-2 h-2 rounded-full ${
              darkMode ? 'bg-orange-400' : 'bg-orange-500'
            } animate-pulse`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevBanner;
