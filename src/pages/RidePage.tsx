import React from 'react';
import { Car, MapPin, Clock, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HowItWorks from '../components/HowItWorks';

interface RidePageProps {
  darkMode: boolean;
}

const RidePage: React.FC<RidePageProps> = ({ darkMode }) => {
  const rideFeatures = [
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Book a Ride',
      description: 'Easy booking with real-time driver tracking',
      color: 'primary',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Live Tracking',
      description: 'Track your driver and estimated arrival time',
      color: 'success',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Quick Pickup',
      description: 'Average pickup time under 5 minutes',
      color: 'accent',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safe & Secure',
      description: 'Verified drivers and 24/7 safety support',
      color: 'warning',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: darkMode ? 'bg-primary/20 text-primary/80' : 'bg-primary/10 text-primary',
      success: darkMode ? 'bg-success/20 text-success/80' : 'bg-success/10 text-success',
      accent: darkMode ? 'bg-accent/20 text-accent/80' : 'bg-accent/10 text-accent',
      warning: darkMode ? 'bg-warning/20 text-warning/80' : 'bg-warning/10 text-warning',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's <span className="text-primary font-bold">GO</span> anywhere
            </motion.h1>
            <motion.p 
              className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Experience seamless transportation in Toronto with our reliable ride-hailing service. 
              Safe, affordable, and available 24/7 across the Greater Toronto Area.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rideFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl text-center ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className={`inline-flex p-3 rounded-full mb-4 ${getColorClasses(feature.color)}`}
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      
      <HowItWorks darkMode={darkMode} />
      
      {/* Ride Suggestions Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ride Suggestions
            </motion.h2>
            <motion.p 
              className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Choose the perfect ride for your journey. Each option is designed to meet your specific needs and budget.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <img src="/assets/images/svgs/Economy.svg" alt="Economy" className="h-60 w-60" />,
                title: 'Economy',
                description: 'Affordable rides for everyday travel',
              },
              {
                icon: <img src="/assets/images/svgs/SUV.svg" alt="Premium" className="h-60 w-60" />,
                title: 'SUV',
                description: 'Spacious rides for groups',
              },
              {
                icon: <img src="/assets/images/svgs/Premium.svg" alt="Premium" className="h-60 w-60" />,
                title: 'Premium',
                description: 'Luxury rides with premium service',
              },
              {
                icon: <img src="/assets/images/svgs/Go Pink.svg" alt="Go Pink" className="h-60 w-60" />,
                title: 'Go Pink',
                description: 'For female riders, by female drivers',
              },
              {
                icon: <img src="/assets/images/svgs/Go Pet.svg" alt="Go Pet" className="h-60 w-60" />,
                title: 'Go Pet',
                description: 'Friendly rides with your furry friends',
              },
              {
                icon: <img src="/assets/images/svgs/Go Green.svg" alt="Accessible" className="h-60 w-60" />,
                title: 'Go Green',
                description: 'Environmentally friendly rides',
              }
            ].map((ride, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                } shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div 
                  className={`inline-flex p-3 rounded-full mb-4 border-2${
                    darkMode ? 'border-primary/50' : 'border-primary/30'
                  }`}
                >
                  {ride.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-primary">{ride.title}</h3>
                <p className={`text-lg mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {ride.description}
                </p>

                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to book your ride?
            </motion.h2>
            <motion.p 
              className={`text-xl leading-relaxed max-w-2xl mx-auto mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join thousands of riders who trust Go Roadways for safe, reliable transportation. 
              Download our app today and experience seamless rides across Toronto.
            </motion.p>
            <motion.button 
              className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book a ride now</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RidePage;
