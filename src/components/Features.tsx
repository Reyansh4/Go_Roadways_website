import React from 'react';
import { Shield, Clock, DollarSign, Smartphone, Users, MapPin } from 'lucide-react';
import ResponsiveImage from './ResponsiveImage';

interface FeaturesProps {
  darkMode: boolean;
}

const Features: React.FC<FeaturesProps> = ({ darkMode }) => {
  const features = [
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'No Surge Pricing',
      description: 'During beta, we guarantee no surge pricing - what you see is what you pay.',
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: 'Direct Feedback',
      description: 'Your feedback goes directly to our team and shapes our development.',
    },
    {
      icon: <DollarSign className="h-7 w-7" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Know the exact fare before you book your ride.',
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: 'Early Access',
      description: 'Be among the first to try new features before they go public.',
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: 'Community Driven',
      description: 'Help us build the perfect ride-sharing experience for Toronto.',
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: 'Toronto Focused',
      description: 'Built specifically for Toronto\'s unique transportation needs.',
    },
  ];

  return (
    <section id="features" className={`py-20 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Join Our Beta?
              </h2>
              <p className={`text-xl leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We're not just another ride-sharing app. We're building something better 
                for Toronto, and we need your help to make it perfect.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className={`rounded-3xl overflow-hidden shadow-2xl ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
              <ResponsiveImage
                src="/assets/images/homepage/beta-image.png"
                alt="Happy passengers in car"
                aspectRatio="auto"
                minHeight={{
                  mobile: '16rem',
                  sm: '20rem',
                  md: '24rem',
                  lg: '28rem',
                  xl: '32rem',
                }}
                maxHeight="40rem"
              />
            </div>
            
            {/* Beta Testing Info Card */}
            <div className={`absolute -bottom-8 -left-8 max-w-xs p-6 rounded-2xl shadow-xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-primary/30' : 'bg-primary/10'
                }`}>
                  <span className="text-primary font-bold text-lg">β</span>
                </div>
                <div>
                  <div className="font-semibold">Beta Testing</div>
                  <div className="text-sm text-primary">Limited Release</div>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "Join our beta program and help shape the future of transportation in Toronto."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;