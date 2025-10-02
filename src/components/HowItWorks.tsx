import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

interface HowItWorksProps {
  darkMode: boolean;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ darkMode }) => {
  const steps = [
    {
      title: 'Book Your Ride',
      description: 'Open our app, enter your destination, and choose your preferred ride type.',
    },
    {
      title: 'Get Matched',
      description: 'Our algorithm instantly connects you with the nearest available driver.',
    },
    {
      title: 'Enjoy the Ride',
      description: 'Track your driver in real-time and enjoy a comfortable, safe journey.',
    },
    {
      title: 'Rate & Review',
      description: 'Share your experience and help us maintain our high service standards.',
    },
  ];


  return (
    <section id="how-it-works" className={`py-20 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Getting a ride with Go Roadways is simple, fast, and reliable. 
            Follow these easy steps to start your journey.
          </p>
        </div>

            {/* Responsive Timeline */}
            <div className="relative max-w-7xl mx-auto">
              {/* Desktop Timeline with Line */}
              <div className="hidden lg:block relative">
                {/* Timeline Container with Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
                  <motion.div 
                    className={`w-full h-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'top' }}
                  ></motion.div>
                </div>
                
                <div className="space-y-32">
          {steps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      className="relative flex items-center justify-center min-h-[400px]"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline Node - Centered on line */}
                      <motion.div 
                        className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full font-bold text-2xl ${
                          darkMode ? 'bg-primary/30 text-primary border-2 border-primary/50' : 'bg-primary text-white'
                        }`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {index + 1}
                      </motion.div>
                    
                    {/* Left Content */}
                    <div className="absolute left-0 right-1/2 pr-16 top-1/2 transform -translate-y-1/2">
                      {index % 2 === 0 ? (
                        /* Image on left for even steps */
                        <motion.div 
                          className="w-full max-w-md mx-auto"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative">
                            <motion.div 
                              className="w-full h-64 rounded-2xl overflow-hidden shadow-xl"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ResponsiveImage
                                src={`/assets/images/ridepage/step-0${index + 1}.png`}
                                alt={`Step ${index + 1}: ${step.title}`}
                                aspectRatio="auto"
                                minHeight={{
                                  mobile: '12rem',
                                  sm: '14rem',
                                  lg: '16rem',
                                }}
                                maxHeight="20rem"
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                          </div>
                        </motion.div>
                      ) : (
                        /* Text on left for odd steps */
                        <motion.div 
                          className="w-full max-w-md mx-auto"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-right">
                            <motion.h3 
                              className="text-3xl font-bold mb-4 text-primary"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                              viewport={{ once: true }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p 
                              className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                              viewport={{ once: true }}
                            >
                              {step.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Right Content */}
                    <div className="absolute left-1/2 right-0 pl-16 top-1/2 transform -translate-y-1/2">
                      {index % 2 === 0 ? (
                        /* Text on right for even steps */
                        <motion.div 
                          className="w-full max-w-md mx-auto"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-left">
                            <motion.h3 
                              className="text-3xl font-bold mb-4 text-primary"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                              viewport={{ once: true }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p 
                              className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                              viewport={{ once: true }}
                            >
                              {step.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      ) : (
                        /* Image on right for odd steps */
                        <motion.div 
                          className="w-full max-w-md mx-auto"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative">
                            <motion.div 
                              className="w-full h-64 rounded-2xl overflow-hidden shadow-xl"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ResponsiveImage
                                src={`/assets/images/ridepage/step-0${index + 1}.png`}
                                alt={`Step ${index + 1}: ${step.title}`}
                                aspectRatio="auto"
                                minHeight={{
                                  mobile: '12rem',
                                  sm: '14rem',
                                  lg: '16rem',
                                }}
                                maxHeight="20rem"
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>

              {/* Tablet Timeline Layout */}
              <div className="hidden md:block lg:hidden relative">
                {/* Timeline Container with Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
                  <motion.div 
                    className={`w-full h-full ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'top' }}
                  ></motion.div>
                </div>
                
                <div className="space-y-16">
                  {steps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      className="relative flex items-center justify-center min-h-[300px]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline Node - Centered on line */}
                      <motion.div 
                        className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full font-bold text-xl ${
                          darkMode ? 'bg-primary/30 text-primary border-2 border-primary/50' : 'bg-primary text-white'
                        }`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                  {index + 1}
                      </motion.div>
                    
                    {/* Left Content */}
                    <div className="absolute left-0 right-1/2 pr-8 top-1/2 transform -translate-y-1/2">
                      {index % 2 === 0 ? (
                        /* Image on left for even steps */
                        <motion.div 
                          className="w-full max-w-sm mx-auto"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative">
                            <motion.div 
                              className="w-full h-56 rounded-xl overflow-hidden shadow-lg"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ResponsiveImage
                                src={`/assets/images/ridepage/step-0${index + 1}.png`}
                                alt={`Step ${index + 1}: ${step.title}`}
                                aspectRatio="auto"
                                minHeight={{
                                  mobile: '12rem',
                                  sm: '14rem',
                                }}
                                maxHeight="16rem"
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                          </div>
                        </motion.div>
                      ) : (
                        /* Text on left for odd steps */
                        <motion.div 
                          className="w-full max-w-sm mx-auto"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-right">
                            <motion.h3 
                              className="text-2xl font-bold mb-3 text-primary"
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.9 + index * 0.15 }}
                              viewport={{ once: true }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p 
                              className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 1.0 + index * 0.15 }}
                              viewport={{ once: true }}
                            >
                              {step.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                </div>
                
                    {/* Right Content */}
                    <div className="absolute left-1/2 right-0 pl-8 top-1/2 transform -translate-y-1/2">
                      {index % 2 === 0 ? (
                        /* Text on right for even steps */
                        <motion.div 
                          className="w-full max-w-sm mx-auto"
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-left">
                            <motion.h3 
                              className="text-2xl font-bold mb-3 text-primary"
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.9 + index * 0.15 }}
                              viewport={{ once: true }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p 
                              className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 1.0 + index * 0.15 }}
                              viewport={{ once: true }}
                            >
                              {step.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      ) : (
                        /* Image on right for odd steps */
                        <motion.div 
                          className="w-full max-w-sm mx-auto"
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative">
                            <motion.div 
                              className="w-full h-56 rounded-xl overflow-hidden shadow-lg"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ResponsiveImage
                                src={`/assets/images/ridepage/step-0${index + 1}.png`}
                                alt={`Step ${index + 1}: ${step.title}`}
                                aspectRatio="auto"
                                minHeight={{
                                  mobile: '12rem',
                                  sm: '14rem',
                                }}
                                maxHeight="16rem"
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
                </div>
                </div>
                
              {/* Mobile Stacked Layout */}
              <div className="md:hidden space-y-8">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                     {/* Mobile Card */}
                     <div className={`relative p-6 rounded-2xl shadow-lg ${
                       darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                     }`}>
                {/* Content */}
                      <div className="text-center">
                        {/* Image */}
                        <motion.div 
                          className="w-full max-w-sm mx-auto mb-6"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative">
                            <motion.div 
                              className="w-full h-48 rounded-xl overflow-hidden shadow-lg"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ResponsiveImage
                                src={`/assets/images/ridepage/step-0${index + 1}.png`}
                                alt={`Step ${index + 1}: ${step.title}`}
                                aspectRatio="auto"
                                minHeight={{
                                  mobile: '12rem',
                                }}
                                maxHeight="14rem"
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                          </div>
                        </motion.div>

                        {/* Text */}
                        <motion.h3 
                          className="text-xl font-bold mb-3 text-primary"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {step.title}
                        </motion.h3>
                        <motion.p 
                          className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                  {step.description}
                        </motion.p>
              </div>
            </div>
                  </motion.div>
          ))}
              </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        } shadow-lg`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
              <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Available
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-success mb-2">Toronto</div>
              <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Launch City
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">2025</div>
              <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Founded
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;