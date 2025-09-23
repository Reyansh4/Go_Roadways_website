import React from 'react';
import { Users, Car, Truck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Beta Rides',
      description: 'Currently testing our core ride-sharing service in downtown Toronto with limited availability.',
      features: ['No surge pricing', 'Direct feedback', 'Early access'],
      color: 'blue',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Building',
      description: 'Join our growing community of beta testers and help shape the future of transportation.',
      features: ['Exclusive access', 'Direct input', 'Community perks'],
      color: 'purple',
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Future Features',
      description: 'We\'re planning delivery services and expanded coverage based on your feedback.',
      features: ['Coming soon', 'Your input matters', 'Expanding coverage'],
      color: 'green',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation Lab',
      description: 'We\'re constantly improving based on real user feedback and testing new features.',
      features: ['Rapid iteration', 'User-driven', 'Cutting-edge tech'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: darkMode ? 'bg-primary/20' : 'bg-primary/10',
        icon: 'text-primary',
        border: 'border-primary/20',
      },
      purple: {
        bg: darkMode ? 'bg-accent/20' : 'bg-accent/10',
        icon: 'text-accent',
        border: 'border-accent/20',
      },
      green: {
        bg: darkMode ? 'bg-success/20' : 'bg-success/10',
        icon: 'text-success',
        border: 'border-success/20',
      },
      orange: {
        bg: darkMode ? 'bg-warning/20' : 'bg-warning/10',
        icon: 'text-warning',
        border: 'border-warning/20',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className={`py-20 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            What We're Building
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
            We're creating a better ride-sharing experience for Toronto. 
            Currently in beta, we're testing features that will revolutionize how you get around the city.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
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
                  className={`inline-flex p-3 rounded-xl mb-4 ${colorClasses.bg}`}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={colorClasses.icon}>
                    {service.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        service.color === 'blue' ? 'bg-primary' :
                        service.color === 'purple' ? 'bg-accent' :
                        service.color === 'green' ? 'bg-success' :
                        'bg-warning'
                      }`}></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;