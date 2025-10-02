import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/assets/images/homepage/hero-image.jpg',
    '/assets/images/homepage/beta-image.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleBookRide = () => {
    // Handle booking logic here
    console.log('Book a Ride clicked');
  };

  return (
    <section id="home" className={`pt-20 py-20 flex items-center ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-white text-gray-900'
    }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Booking Form */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's <span className="text-primary font-bold">GO</span> anywhere
            </motion.h1>

            {/* Route Display */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Pickup Location */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="Pickup Location"
                    className={`flex-1 px-3 py-2 rounded-xl border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary'
                    } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                  />
                </div>
                {/* Route Line */}
                <motion.div 
                  className="flex justify-start"
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-0.5 h-12 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full ml-2`}></div>
                </motion.div>
              </motion.div>

              {/* Drop Location */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-lg"></div>
                  <input
                    type="text"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    placeholder="Drop Location"
                    className={`flex-1 px-3 py-2 rounded-xl border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary'
                    } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                  />
                </div>
              </motion.div>

              {/* Date and Time Inputs */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                {/* Date Input */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Date
                  </label>
                  <input
                    type="text"
                    value="Today"
                    readOnly
                    className={`w-full px-3 py-2 rounded-xl border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>

                {/* Time Input */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    Time
                  </label>
                  <input
                    type="text"
                    value="Now"
                    readOnly
                    className={`w-full px-3 py-2 rounded-xl border transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
              </motion.div>

              {/* Book Ride Button */}
              <motion.button 
                onClick={handleBookRide}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-400 transform hover:scale-105 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book a Ride</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full">
                <ResponsiveImage
                  src={heroImages[currentImageIndex]}
                  alt="Professional driver in modern car"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;