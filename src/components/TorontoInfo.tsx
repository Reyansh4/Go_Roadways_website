import React from 'react';
import { MapPin, Clock, Building2, Users } from 'lucide-react';

interface TorontoInfoProps {
  darkMode: boolean;
}

const TorontoInfo: React.FC<TorontoInfoProps> = ({ darkMode }) => {
  return (
    <div className={`py-4 ${
      darkMode ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-200'
    } border-t border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          {/* Toronto Focus */}
          <div className="flex items-center space-x-2">
            <MapPin className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              Currently Testing in Toronto, ON
            </span>
          </div>
          
          {/* Service Info */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <Building2 className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Downtown & GTA
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                24/7 Service
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Limited Beta
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorontoInfo;
