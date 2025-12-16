import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, ArrowRight, Calendar, Tag, Users } from 'lucide-react';
import { GOOGLE_FORMS } from '../constants/forms';

interface RoutesPageProps {
  darkMode: boolean;
}

const RoutesPage: React.FC<RoutesPageProps> = ({ darkMode }) => {
  const routes = [
    {
      id: 1,
      origin: 'GTA',
      destination: 'Montreal',
      via: null,
      departureTime: '09:00 AM',
      regularPrice: 90,
      discountedPrice: 70,
      direction: 'outbound',
    },
    {
      id: 2,
      origin: 'GTA',
      destination: 'Quebec',
      via: 'Montreal',
      departureTime: '09:00 AM',
      regularPrice: 280,
      discountedPrice: 250,
      direction: 'outbound',
    },
    {
      id: 3,
      origin: 'Quebec',
      destination: 'GTA',
      via: 'Montreal',
      departureTime: '06:00 PM',
      regularPrice: 280,
      discountedPrice: 250,
      direction: 'inbound',
    },
  ];

  const getDiscountPercentage = (regular: number, discounted: number) => {
    return Math.round(((regular - discounted) / regular) * 100);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-lg font-semibold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Scheduled Routes
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Inter-City <span className="text-primary">Routes</span>
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
              Travel comfortably between major cities with our scheduled inter-city routes. 
              Book your seat in advance and enjoy reliable, affordable transportation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Routes Section */}
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
              Available Routes
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
              Choose from our scheduled routes connecting major cities
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {routes.map((route, index) => (
              <motion.div
                key={route.id}
                className={`relative overflow-hidden rounded-2xl ${
                  darkMode 
                    ? 'bg-gray-900 border border-gray-700' 
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center">
                    {/* Route Path */}
                    <div className="md:col-span-2 w-full">
                      <div className="flex items-center justify-between md:justify-start md:space-x-4 mb-6 w-full min-w-0">
                        {/* Origin */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className={`px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base md:text-lg border-2 border-primary whitespace-nowrap ${
                            darkMode ? 'bg-transparent text-primary' : 'bg-transparent text-primary'
                          }`}>
                            {route.origin}
                          </div>
                          <span className={`text-xs mt-1.5 sm:mt-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Origin
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center flex-1 min-w-0 mx-1 md:mx-0 md:flex-1 md:min-w-0">
                          <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                          <ArrowRight className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mx-1 sm:mx-2 flex-shrink-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                        </div>

                        {/* Via (if exists) */}
                        {route.via && (
                          <>
                            <div className="flex flex-col items-center flex-shrink-0">
                              <div className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:px-3 md:py-1.5 rounded-lg flex items-center justify-center text-xs sm:text-sm font-semibold border-2 border-primary whitespace-nowrap ${
                                darkMode ? 'bg-transparent text-primary' : 'bg-transparent text-primary'
                              }`}>
                                {route.via}
                              </div>
                              <span className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Via
                              </span>
                            </div>
                            <div className="flex items-center flex-1 min-w-0 mx-1 md:mx-0 md:flex-1 md:min-w-0">
                              <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                              <ArrowRight className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mx-1 sm:mx-2 flex-shrink-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                              <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                            </div>
                          </>
                        )}

                        {/* Destination */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className={`px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base md:text-lg border-2 border-primary whitespace-nowrap ${
                            darkMode ? 'bg-transparent text-primary' : 'bg-transparent text-primary'
                          }`}>
                            {route.destination}
                          </div>
                          <span className={`text-xs mt-1.5 sm:mt-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Destination
                          </span>
                        </div>
                      </div>

                      {/* Route Details */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className={`flex items-center space-x-3 p-3 rounded-lg ${
                          darkMode ? 'bg-gray-800' : 'bg-gray-50'
                        }`}>
                          <Clock className={`h-5 w-5 ${darkMode ? 'text-primary' : 'text-primary'}`} />
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Departure Time</p>
                            <p className="font-semibold">{route.departureTime}</p>
                          </div>
                        </div>
                        <div className={`flex items-center space-x-3 p-3 rounded-lg ${
                          darkMode ? 'bg-gray-800' : 'bg-gray-50'
                        }`}>
                          <Calendar className={`h-5 w-5 ${darkMode ? 'text-primary' : 'text-primary'}`} />
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Schedule</p>
                            <p className="font-semibold">Daily</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="md:col-span-1">
                      <div className={`relative p-6 rounded-xl ${
                        darkMode ? 'bg-primary/10 border border-primary/20' : 'bg-primary/5 border border-primary/20'
                      }`}>
                        {/* Discount Badge - Attached to price container */}
                        <div className="absolute -top-3 -right-3 z-10">
                          <div className="bg-accent text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg flex items-center space-x-1 sm:space-x-2 shadow-lg">
                            <Tag className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="font-semibold text-xs sm:text-sm">
                              {getDiscountPercentage(route.regularPrice, route.discountedPrice)}% OFF
                            </span>
                          </div>
                        </div>
                        <div className="text-center mb-4">
                          <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Starting from</p>
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <span className={`text-2xl line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                              ${route.regularPrice}
                            </span>
                            <span className="text-4xl font-bold text-primary">
                              ${route.discountedPrice}
                            </span>
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>CAD</span>
                          </div>
                          <div className={`flex items-center justify-center space-x-1.5 ${darkMode ? 'text-primary/80' : 'text-primary'}`}>
                            <Users className="h-4 w-4" />
                            <span className="text-xs sm:text-sm font-medium">Per Passenger</span>
                          </div>
                        </div>
                        <button
                          onClick={() => window.open(GOOGLE_FORMS.BOOK_RIDE, '_blank', 'noopener,noreferrer')}
                          className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <span>Book Now</span>
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: 'Multiple Stops',
                description: 'Routes include stops at major cities for your convenience',
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: 'Fixed Schedule',
                description: 'Reliable daily departures at scheduled times',
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: 'Best Prices',
                description: 'Competitive pricing with special discounts available',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl text-center ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  darkMode ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoutesPage;
