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

            {/* Vertical Timeline */}
            <div className="relative max-w-7xl mx-auto">
              <div className="relative">
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
                
                <div className="space-y-20 lg:space-y-32">
                  {steps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      className="relative flex items-center justify-center min-h-[300px] lg:min-h-[400px]"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline Node - Centered on line */}
                      <motion.div 
                        className={`relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full font-bold text-xl lg:text-2xl ${
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
                    <div className="absolute left-0 right-1/2 pr-8 lg:pr-16 top-1/2 transform -translate-y-1/2">
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
                            <div className="w-full h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
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
                            </div>
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
                          <div className="text-center lg:text-right">
                            <motion.h3 
                              className="text-2xl lg:text-3xl font-bold mb-4 text-primary"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                              viewport={{ once: true }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p 
                              className={`text-lg lg:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
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
                    <div className="absolute left-1/2 right-0 pl-8 lg:pl-16 top-1/2 transform -translate-y-1/2">
                      {index % 2 === 0 ? (
                        /* Text on right for even steps */
                        <motion.div 
                          className="w-full max-w-md mx-auto"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-center lg:text-left">
                            <motion.h3 
                              className="text-2xl lg:text-3xl font-bold mb-4 text-primary"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                              viewport={{ once: true }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p 
                              className={`text-lg lg:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
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
                            <div className="w-full h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
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
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>
            </div>

        {/* Additional Info */}
        <div className={`mt-16 p-8 rounded-2xl ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        } shadow-lg`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Beta</div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Testing Phase
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">Toronto</div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Launch City
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">2025</div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Founded
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;