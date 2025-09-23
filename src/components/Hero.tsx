import React from 'react';
import { ArrowRight, MapPin, Shield, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`pt-4 min-h-screen flex items-center ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Beta Status Badge */}
            <motion.div 
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-primary/30 text-primary/80' : 'bg-primary/10 text-primary'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.span 
                className="w-2 h-2 bg-primary rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
              Currently in Beta Testing
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Let's <span className="text-primary font-bold">GO</span> anywhere
              </motion.h1>
              
              <motion.p 
                className={`text-xl leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Tired of unreliable ride services? We're building something better for Toronto.
              </motion.p>

              <motion.p 
                className={`text-lg ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Join our growing community of beta testers and help shape the future of transportation in the GTA.
              </motion.p>
            </div>

            {/* Real Benefits for Beta Users */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium">No surge pricing during beta</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium">Direct feedback to our team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium">Exclusive early access features</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Our Beta</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button 
                className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: <Shield className="h-6 w-6 text-primary" />, text: "Secure & Safe", bg: "bg-primary/10" },
                { icon: <MapPin className="h-6 w-6 text-success" />, text: "Downtown Toronto", bg: "bg-success/10" },
                { icon: <Clock className="h-6 w-6 text-accent" />, text: "24/7 Support", bg: "bg-accent/10" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`inline-flex p-3 rounded-full ${
                    darkMode ? 'bg-gray-800' : item.bg
                  }`}>
                    {item.icon}
                  </div>
                  <p className={`mt-2 text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
                  src="/assets/images/homepage/hero-image.jpg"
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
            
            {/* Floating Stats Card */}
            <motion.div 
              className={`absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="text-2xl font-bold text-primary">Beta</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Testing Phase
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <div className="text-2xl font-bold text-success">Toronto</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Launch City
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;