import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';
import ResponsiveImage from './ResponsiveImage';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '2025', label: 'Founded' },
    { icon: <Award className="h-8 w-8" />, value: 'Beta', label: 'Testing Phase' },
    { icon: <TrendingUp className="h-8 w-8" />, value: 'Toronto', label: 'Launch City' },
    { icon: <Target className="h-8 w-8" />, value: 'Coming Soon', label: 'Full Launch' },
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="w-full h-64 lg:h-72 rounded-2xl overflow-hidden shadow-lg">
                  <ResponsiveImage
                    src="/assets/images/aboutpage/about-page-01.png"
                    alt="Go Roadways team and vision"
                    aspectRatio="auto"
                    minHeight={{
                      mobile: '14rem',
                      sm: '16rem',
                      md: '18rem',
                    }}
                    maxHeight="20rem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden shadow-lg">
                  <ResponsiveImage
                    src="/assets/images/aboutpage/about-page-02.png"
                    alt="Professional drivers and service"
                    aspectRatio="auto"
                    minHeight={{
                      mobile: '10rem',
                      sm: '12rem',
                      md: '14rem',
                    }}
                    maxHeight="16rem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="w-full h-48 lg:h-56 rounded-2xl overflow-hidden shadow-lg">
                  <ResponsiveImage
                    src="/assets/images/aboutpage/about-page-03.png"
                    alt="Modern transportation technology"
                    aspectRatio="auto"
                    minHeight={{
                      mobile: '10rem',
                      sm: '12rem',
                      md: '14rem',
                    }}
                    maxHeight="16rem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-64 lg:h-72 rounded-2xl overflow-hidden shadow-lg">
                  <ResponsiveImage
                    src="/assets/images/aboutpage/about-page-04.png"
                    alt="Toronto city and community focus"
                    aspectRatio="auto"
                    minHeight={{
                      mobile: '14rem',
                      sm: '16rem',
                      md: '18rem',
                    }}
                    maxHeight="20rem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                About Go Roadways
              </h2>
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Founded in 2025, Go Roadways is launching a new era of transportation in Toronto 
                  by connecting riders with reliable, professional drivers through our 
                  innovative platform. Currently in beta testing across the Greater Toronto Area.
                </p>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We believe in making transportation accessible, safe, and convenient 
                  for everyone in Toronto while providing economic opportunities for drivers 
                  in our local communities.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className={`p-6 rounded-2xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Target className="h-5 w-5 text-primary mr-2" />
                Our Mission
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To provide safe, reliable, and affordable transportation solutions 
                that connect communities and create opportunities for drivers while 
                exceeding customer expectations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl text-center ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg`}
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;