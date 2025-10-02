import React from 'react';
import { DollarSign, Clock, ArrowRight, CheckCircle, TrendingUp, Car, Map, Calendar, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import ResponsiveImage from '../components/ResponsiveImage';

interface DrivePageProps {
  darkMode: boolean;
}

const DrivePage: React.FC<DrivePageProps> = ({ darkMode }) => {
  const earningStats = [
    { label: 'Average per hour', value: '$25-35', icon: <DollarSign className="h-5 w-5" /> },
    { label: 'Peak hours bonus', value: 'Up to 2x', icon: <TrendingUp className="h-5 w-5" /> },
    { label: 'Weekly payout', value: 'Every Tuesday', icon: <Clock className="h-5 w-5" /> },
  ];


  const requirements = [
    'Valid Ontario Driver\'s License (Class G)',
    'Clean driving record (no major violations)',
    'Vehicle insurance in your name',
    'Background check clearance',
    '21+ years old',
    'Smartphone with data plan'
  ];


  return (
    <div className="pt-24">
      {/* Hero Section - Uber-style */}
      <section className={`py-16 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.div
                  className="text-sm font-semibold text-primary uppercase tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Drive with Go Roadways
                </motion.div>
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Earn money driving
                  <br />
                  <span className="text-primary">when you want</span>
                </motion.h1>
                <motion.p 
                  className={`text-xl leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Set your own schedule and earn on your terms. Join thousands of drivers 
                  already earning with Go Roadways in Toronto.
                </motion.p>
              </div>

              {/* Earning Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {earningStats.map((stat, index) => (
                  <div key={index} className={`p-4 rounded-xl ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-primary">{stat.icon}</div>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {stat.label}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-primary">{stat.value}</div>
                  </div>
                ))}
              </motion.div>

            </motion.div>

            {/* Right Content - Driver Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-full h-96 rounded-3xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveImage
                  src="/assets/images/drivepage/drive-page-01.png"
                  alt="Professional driver with Go Roadways"
                  aspectRatio="auto"
                  minHeight={{
                    mobile: '20rem',
                    sm: '22rem',
                    md: '24rem',
                  }}
                  maxHeight="30rem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Drivers Choose Us Section */}
      <section className={`py-10 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
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
              Why drivers choose us
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
              Join thousands of drivers who trust Go Roadways for their earning needs. Experience the freedom of flexible schedules, competitive rates, and reliable support. Start earning today with Canada's most trusted ride-sharing platform.
            </motion.p>
          </motion.div>

          {/* 3D Pie Diagram */}
          <div className="flex justify-center items-center">
            <motion.div 
              className="relative w-[600px] h-[600px]"
              initial={{ scale: 0, rotateY: -15 }}
              whileInView={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ perspective: '1000px' }}
            >
              {/* 3D Pie Chart Container */}
              <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Quarter 1 - Top Right (3D) with Text */}
                <motion.div 
                  className="absolute top-0 right-0 w-1/2 h-1/2 cursor-pointer"
                  style={{
                    transform: 'translateZ(20px)'
                  }}
                  whileHover={{
                    translateZ: 40,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Pie Quarter */}
                  <div 
                    className="absolute top-0 right-0 w-full h-full"
                    style={{
                      background: `conic-gradient(from 0deg at 100% 0%, #10b981 0deg, #10b981 90deg, transparent 90deg)`,
                      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
                      borderRadius: '0 100% 0 0'
                    }}
                  />
                  
                  {/* Text Container */}
                  <div className="absolute" style={{ top: '35%', right: '35%', transform: 'translateZ(20px)' }}>
                    <div className={`flex flex-col items-center p-2 rounded-lg border-2 backdrop-blur-sm w-32 ${
                      darkMode ? 'border-white/30 bg-white/10' : 'border-white/50 bg-white/20'
                    }`}>
                      <DollarSign className={`w-6 h-6 mb-2 drop-shadow-lg ${
                        darkMode ? 'text-white' : 'text-white'
                      }`} />
                      <div className={`text-base font-semibold drop-shadow-lg ${
                        darkMode ? 'text-white' : 'text-white'
                      }`}>Fair Price</div>
                      <div className={`text-sm text-center mt-1 leading-tight ${
                        darkMode ? 'text-gray-300' : 'text-white/90'
                      }`}>Competitive rates for every ride</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Quarter 2 - Top Left (3D) with Text */}
                <motion.div 
                  className="absolute top-0 left-0 w-1/2 h-1/2 cursor-pointer"
                  style={{
                    transform: 'translateZ(20px)'
                  }}
                  whileHover={{
                    translateZ: 40,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Pie Quarter */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      background: `conic-gradient(from 90deg at 0% 0%, #10b981 0deg, #10b981 90deg, transparent 90deg)`,
                      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
                      borderRadius: '100% 0 0 0'
                    }}
                  />
                  
                  {/* Text Container */}
                  <div className="absolute" style={{ top: '35%', left: '35%', transform: 'translateZ(20px)' }}>
                    <div className={`flex flex-col items-center p-2 rounded-lg border-2 backdrop-blur-sm w-32 ${
                      darkMode ? 'border-white/30 bg-white/10' : 'border-white/50 bg-white/20'
                    }`}>
                      <ArrowRight className={`w-6 h-6 mb-2 drop-shadow-lg ${
                        darkMode ? 'text-white' : 'text-white'
                      }`} />
                      <div className={`text-base font-semibold drop-shadow-lg ${
                        darkMode ? 'text-white' : 'text-white'
                      }`}>Freedom</div>
                      <div className={`text-sm text-center mt-1 leading-tight ${
                        darkMode ? 'text-gray-300' : 'text-white/90'
                      }`}>Drive when and where you want</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Quarter 3 - Bottom Left (3D) with Text */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-1/2 h-1/2 cursor-pointer"
                  style={{
                    transform: 'translateZ(20px)'
                  }}
                  whileHover={{
                    translateZ: 40,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Pie Quarter */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{
                      background: `conic-gradient(from 180deg at 0% 100%, #10b981 0deg, #10b981 90deg, transparent 90deg)`,
                      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
                      borderRadius: '0 0 0 100%'
                    }}
                  />
                  
                  {/* Text Container */}
                  <div className="absolute" style={{ bottom: '35%', left: '35%', transform: 'translateZ(20px)' }}>
                    <div className={`flex flex-col items-center p-2 rounded-lg border-2 backdrop-blur-sm w-32 ${
                      darkMode ? 'border-white/30 bg-white/10' : 'border-white/50 bg-white/20'
                    }`}>
                      <CheckCircle className={`w-6 h-6 mb-2 drop-shadow-lg ${
                        darkMode ? 'text-white' : 'text-white'
                      }`} />
                      <div className={`text-base font-semibold drop-shadow-lg ${
                        darkMode ? 'text-white' : 'text-white'
                      }`}>Safety</div>
                      <div className={`text-sm text-center mt-1 leading-tight ${
                        darkMode ? 'text-gray-300' : 'text-white/90'
                      }`}>24/7 support and safety features</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Quarter 4 - Bottom Right (3D) with Text */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-1/2 h-1/2 cursor-pointer"
                  style={{
                    transform: 'translateZ(20px)'
                  }}
                  whileHover={{
                    translateZ: 40,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Pie Quarter */}
                  <div 
                    className="absolute bottom-0 right-0 w-full h-full"
                    style={{
                      background: `conic-gradient(from 270deg at 100% 100%, #10b981 0deg, #10b981 90deg, transparent 90deg)`,
                      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
                      borderRadius: '0 0 100% 0'
                    }}
                  />
                  
                  {/* Text Container */}
                  <div className="absolute" style={{ bottom: '35%', right: '35%', transform: 'translateZ(20px)' }}>
                    <div className={`flex flex-col items-center p-2 rounded-lg border-2 backdrop-blur-sm w-32 ${
                      darkMode ? 'border-white/30 bg-white/10' : 'border-white/50 bg-white/20'
                    }`}>
                      <Clock className={`w-6 h-6 mb-2 drop-shadow-lg ${
                        darkMode ? 'text-white' : 'text-white'
                      }`} />
                      <div className={`text-base font-semibold drop-shadow-lg ${
                        darkMode ? 'text-white' : 'text-white'
                      }`}>Flexible</div>
                      <div className={`text-sm text-center mt-1 leading-tight ${
                        darkMode ? 'text-gray-300' : 'text-white/90'
                      }`}>Work around your schedule</div>
                    </div>
                  </div>
                </motion.div>

                {/* 3D Side Panels for depth - all same depth */}
                <div 
                  className="absolute top-0 right-0 w-1/2 h-1/2"
                  style={{
                    background: '#10b981',
                    transform: 'translateZ(-10px) translateX(10px)',
                    borderRadius: '0 100% 0 0',
                    opacity: 0.7
                  }}
                />
                <div 
                  className="absolute top-0 left-0 w-1/2 h-1/2"
                  style={{
                    background: '#10b981',
                    transform: 'translateZ(-10px) translateX(-10px)',
                    borderRadius: '100% 0 0 0',
                    opacity: 0.7
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-1/2 h-1/2"
                  style={{
                    background: '#10b981',
                    transform: 'translateZ(-10px) translateX(-10px)',
                    borderRadius: '0 0 0 100%',
                    opacity: 0.7
                  }}
                />
                <div 
                  className="absolute bottom-0 right-0 w-1/2 h-1/2"
                  style={{
                    background: '#10b981',
                    transform: 'translateZ(-10px) translateX(10px)',
                    borderRadius: '0 0 100% 0',
                    opacity: 0.7
                  }}
                />
              </div>

              {/* 3D Center Circle */}
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-primary flex items-center justify-center`}
                style={{
                  transform: 'translate(-50%, -50%) translateZ(30px)',
                  boxShadow: '0 15px 35px rgba(16, 185, 129, 0.4)',
                  background: darkMode ? 'linear-gradient(145deg, #1f2937, #111827)' : 'linear-gradient(145deg, #ffffff, #f3f4f6)'
                }}
              >
                <div className="text-xl font-bold text-primary">Benefits</div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Driver requirements
                </h2>
                <p className={`text-xl leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  To drive with Go Roadways, you must meet these basic requirements. 
                  We'll help you through the application process.
                </p>
              </div>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-success" />
                    </div>
                    <span className={`text-lg ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {requirement}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start your application</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>

            {/* Right Content - Requirements Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-full h-96 rounded-3xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveImage
                  src="/assets/images/drivepage/drive-page-02.png"
                  alt="Driver requirements and application process"
                  aspectRatio="auto"
                  minHeight={{
                    mobile: '20rem',
                    sm: '22rem',
                    md: '24rem',
                  }}
                  maxHeight="30rem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Earn with Us Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
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
              How to earn with us
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
              Multiple ways to earn money with Go Roadways. Choose what works best for your schedule and preferences.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "City Rides",
                description: "Short trips within Toronto for quick earnings throughout the day.",
                icon: <Car className="h-8 w-8" />
              },
              {
                title: "City to City",
                description: "Longer trips between cities for higher earnings per ride.",
                icon: <Map className="h-8 w-8" />
              },
              {
                title: "Scheduled Rides",
                description: "Pre-booked rides with guaranteed income and better planning.",
                icon: <Calendar className="h-8 w-8" />
              },
              {
                title: "Courier Delivery",
                description: "Package and food delivery services for additional income streams.",
                icon: <Package className="h-8 w-8" />
              }
            ].map((earningType, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  darkMode ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
                }`}>
                  {earningType.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{earningType.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {earningType.description}
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
              Ready to start driving?
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
              Join thousands of drivers already earning with Go Roadways. 
              Start your application today and begin driving in as little as 24 hours.
            </motion.p>
            <motion.button 
              className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Apply to drive</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DrivePage;
