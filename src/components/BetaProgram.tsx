import React from 'react';
import { Users, Clock, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface BetaProgramProps {
  darkMode: boolean;
}

const BetaProgram: React.FC<BetaProgramProps> = ({ darkMode }) => {
  const betaFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Limited Access',
      description: 'Exclusive access to our platform before public launch',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Priority Support',
      description: 'Direct line to our development team for feedback',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Toronto Focus',
      description: 'Help us perfect the service in your city',
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Early Adopter',
      description: 'Be part of shaping the future of transportation',
    },
  ];

  return (
    <section className={`py-20 ${
      darkMode ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.span>
            Beta Testing Program
          </motion.div>
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Help Us Build the Future
              </motion.h2>
              <motion.p 
                className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We're tired of the same old ride-sharing problems. Join our beta and help us create 
                something truly better for Toronto - no surge pricing, better drivers, and real community input.
              </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {betaFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl text-center ${
                darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className={`inline-flex p-3 rounded-full mb-4 ${
                  darkMode ? 'bg-primary/30 text-primary/80' : 'bg-primary/10 text-primary'
                }`}
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BetaProgram;
