import React from 'react';
import { DollarSign, Clock, Users, Shield, MapPin, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
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

  const driverBenefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Earn on your schedule',
      description: 'Drive when you want, work as much or as little as you need',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Flexible hours',
      description: 'No minimum hours required. Work around your life, not the other way around',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Meet new people',
      description: 'Connect with passengers across Toronto and build lasting relationships',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safe & secure',
      description: 'Comprehensive safety training and 24/7 support for all drivers',
    },
  ];

  const requirements = [
    'Valid Ontario Driver\'s License (Class G)',
    'Clean driving record (no major violations)',
    'Vehicle insurance in your name',
    'Background check clearance',
    '21+ years old',
    'Smartphone with data plan'
  ];

  const safetyFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Emergency assistance',
      description: 'Instant emergency response with GPS tracking and direct connection to authorities',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Background verification',
      description: 'Comprehensive background checks for all drivers to ensure passenger safety',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 driver support',
      description: 'Round-the-clock support team available for assistance and safety concerns',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Real-time tracking',
      description: 'GPS tracking and route monitoring for enhanced security and accountability',
    },
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.div
                  className="text-sm font-semibold text-primary uppercase tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Drive with Go Roadways
                </motion.div>
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Set your own schedule and earn on your terms. Join thousands of drivers 
                  already earning with Go Roadways in Toronto.
                </motion.p>
              </div>

              {/* Earning Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
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
                  <span>Get started</span>
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
                  Learn more
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Driver Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why drive with Go Roadways?
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
              Join a platform that puts drivers first with competitive rates, 
              flexible scheduling, and comprehensive support.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {driverBenefits.map((benefit, index) => (
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
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
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
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
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
              Safety features for drivers
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
              Your safety is our priority. We provide comprehensive safety features 
              and support to ensure you have a secure driving experience.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
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
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
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
