import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import ResponsiveImage from '../components/ResponsiveImage';

interface HomePageProps {
  darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      
      {/* Book a Ride Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                Book a Ride
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Get a reliable ride in minutes. Our professional drivers are ready to take you anywhere in Toronto with comfort and safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>24/7 availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Professional drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Safe and comfortable</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveImage
                  src="/assets/images/homepage/main-page-01.png"
                  alt="Book a ride interface"
                  aspectRatio="auto"
                  minHeight={{
                    mobile: '16rem',
                    sm: '20rem',
                    lg: '24rem',
                  }}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call a Cab Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Desktop: Image | Text */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveImage
                  src="/assets/images/homepage/main-page-02.png"
                  alt="Call a cab service"
                  aspectRatio="auto"
                  minHeight={{
                    mobile: '16rem',
                    sm: '20rem',
                    lg: '24rem',
                  }}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                Call a Cab at any time
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Need a ride immediately? Our cab service is available 24/7. Just call and we'll be there in minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Instant booking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Quick response time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Reliable service</span>
                </div>
              </div>
            </motion.div>

            {/* Tablet/Mobile: Text | Image */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                Call a Cab at any time
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Need a ride immediately? Our cab service is available 24/7. Just call and we'll be there in minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Instant booking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Quick response time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Reliable service</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveImage
                  src="/assets/images/homepage/main-page-02.png"
                  alt="Call a cab service"
                  aspectRatio="auto"
                  minHeight={{
                    mobile: '16rem',
                    sm: '20rem',
                    lg: '24rem',
                  }}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Earn When You Want Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                Earn when you want
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Drive with us and earn money on your own schedule. Work part-time or full-time, it's up to you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Flexible hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Competitive rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Weekly payments</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveImage
                  src="/assets/images/homepage/main-page-03.png"
                  alt="Driver earning money"
                  aspectRatio="auto"
                  minHeight={{
                    mobile: '16rem',
                    sm: '20rem',
                    lg: '24rem',
                  }}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Make Money by Renting Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Desktop: Image | Text */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveImage
                  src="/assets/images/homepage/main-page-04.png"
                  alt="Car rental service"
                  aspectRatio="auto"
                  minHeight={{
                    mobile: '16rem',
                    sm: '20rem',
                    lg: '24rem',
                  }}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                Make money by renting out your car
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Have a car sitting idle? Rent it out and earn passive income. We handle everything for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Passive income</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Full insurance coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Easy management</span>
                </div>
              </div>
            </motion.div>

            {/* Tablet/Mobile: Text | Image */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                Make money by renting out your car
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Have a car sitting idle? Rent it out and earn passive income. We handle everything for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Passive income</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Full insurance coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Easy management</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveImage
                  src="/assets/images/homepage/main-page-04.png"
                  alt="Car rental service"
                  aspectRatio="auto"
                  minHeight={{
                    mobile: '16rem',
                    sm: '20rem',
                    lg: '24rem',
                  }}
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Get Started by downloading apps
            </h2>
            <p className={`text-lg leading-relaxed mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Download our apps to start booking rides or earning money. Choose the app that fits your needs.
            </p>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14">
              {/* Rider App QR Code */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-64 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 mx-auto p-2">
                  <img 
                    src="/assets/images/homepage/qr-code.png" 
                    alt="Rider App QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-primary">Rider App</p>
              </motion.div>

              {/* Driver App QR Code */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-64 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 mx-auto p-2">
                  <img 
                    src="/assets/images/homepage/qr-code.png" 
                    alt="Driver App QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-primary">Driver App</p>
              </motion.div>

              {/* Coming soon badge */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold text-primary leading-tight">Coming soon....</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
