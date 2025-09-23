import React from 'react';
import { Car, MapPin, Clock, Shield, Users, Zap, Truck, Crown, Heart } from 'lucide-react';
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's <span className="text-primary font-bold">GO</span> anywhere
            </motion.h1>
            <motion.p 
              className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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
                icon: <Car className="h-8 w-8" />,
                title: 'Economy',
                description: 'Affordable rides for everyday commuting',
                price: 'Starting at $8',
                features: ['Standard vehicles', 'Quick pickup', 'City coverage'],
                color: 'primary'
              },
              {
                icon: <Crown className="h-8 w-8" />,
                title: 'Premium',
                description: 'Luxury vehicles with professional drivers',
                price: 'Starting at $15',
                features: ['Luxury cars', 'Professional drivers', 'VIP service'],
                color: 'accent'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Shared',
                description: 'Share your ride and save money',
                price: 'Starting at $5',
                features: ['Cost-effective', 'Meet new people', 'Eco-friendly'],
                color: 'success'
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'Express',
                description: 'Fastest rides for urgent travel',
                price: 'Starting at $12',
                features: ['Priority booking', 'Fastest routes', 'Instant pickup'],
                color: 'warning'
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: 'XL',
                description: 'Larger vehicles for groups and luggage',
                price: 'Starting at $18',
                features: ['6+ passengers', 'Extra luggage space', 'Group friendly'],
                color: 'primary'
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: 'Accessible',
                description: 'Wheelchair accessible vehicles',
                price: 'Starting at $10',
                features: ['Wheelchair accessible', 'Trained drivers', 'Specialized equipment'],
                color: 'success'
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
                <motion.div 
                  className={`inline-flex p-3 rounded-full mb-4 ${
                    ride.color === 'primary' ? (darkMode ? 'bg-primary/20 text-primary/80' : 'bg-primary/10 text-primary') :
                    ride.color === 'accent' ? (darkMode ? 'bg-accent/20 text-accent/80' : 'bg-accent/10 text-accent') :
                    ride.color === 'success' ? (darkMode ? 'bg-success/20 text-success/80' : 'bg-success/10 text-success') :
                    (darkMode ? 'bg-warning/20 text-warning/80' : 'bg-warning/10 text-warning')
                  }`}
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {ride.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">{ride.title}</h3>
                <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {ride.description}
                </p>
                
                <div className={`text-lg font-bold mb-4 ${
                  ride.color === 'primary' ? 'text-primary' :
                  ride.color === 'accent' ? 'text-accent' :
                  ride.color === 'success' ? 'text-success' :
                  'text-warning'
                }`}>
                  {ride.price}
                </div>
                
                <ul className="space-y-2">
                  {ride.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className={`text-sm flex items-center ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        ride.color === 'primary' ? 'bg-primary' :
                        ride.color === 'accent' ? 'bg-accent' :
                        ride.color === 'success' ? 'bg-success' :
                        'bg-warning'
                      }`}></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RidePage;
