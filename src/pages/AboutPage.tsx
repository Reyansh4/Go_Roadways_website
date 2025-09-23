import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, MapPin } from 'lucide-react';
import About from '../components/About';

interface AboutPageProps {
  darkMode: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ darkMode }) => {
  return (
    <div className="pt-24">
      <About darkMode={darkMode} />
      
      {/* CEO Letter Section */}
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
              A Letter from our CEO
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
              Hear directly from our leadership about our vision for transforming transportation in Toronto.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* CEO Image Placeholder */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-full h-96 rounded-3xl ${
                darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-200 border border-gray-300'
              } flex items-center justify-center`}>
                <div className="text-center">
                  <User className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <span className={`text-lg font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    CEO Photo
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CEO Letter Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Dear Toronto Community,</h3>
                
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  When we started Go Roadways in 2025, we had a simple vision: to create a transportation 
                  service that truly serves the people of Toronto. We were tired of the same old problems 
                  - surge pricing, unreliable service, and a lack of community focus.
                </p>
                
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Our beta testing program isn't just about launching another app - it's about building 
                  something better together. Every piece of feedback from our community helps us create 
                  a service that truly understands Toronto's unique needs.
                </p>
                
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We're committed to transparency, fair pricing, and putting our community first. 
                  Join us in shaping the future of transportation in the GTA.
                </p>
              </div>
              
              <div className="pt-4">
                <p className="text-lg font-semibold text-primary">Rohit Tiwary</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  CEO & Co-Founder, Go Roadways
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTO Mission Section */}
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
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mission of our CTO
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
              Discover how our technology team is building the future of transportation.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* CTO Mission Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent">Building Tomorrow's Transportation</h3>
                
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  As CTO, my mission is to leverage cutting-edge technology to solve real transportation 
                  challenges in Toronto. We're not just building an app - we're creating an ecosystem 
                  that connects people, drivers, and the city in meaningful ways.
                </p>
                
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Our technology stack focuses on real-time optimization, AI-powered matching, and 
                  seamless user experiences. Every line of code we write is designed to make your 
                  journey safer, faster, and more reliable.
                </p>
                
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  The beta program allows us to test and refine our technology with real users, 
                  ensuring we build something that truly works for Toronto's unique landscape 
                  and transportation needs.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className={`p-4 rounded-xl ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <Target className="h-6 w-6 text-accent mb-2" />
                  <p className="font-semibold">AI-Powered</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Smart matching
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <MapPin className="h-6 w-6 text-success mb-2" />
                  <p className="font-semibold">Real-time</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    GPS tracking
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-lg font-semibold text-accent">Rahul Naik</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  CTO & Co-Founder, Go Roadways
                </p>
              </div>
            </motion.div>

            {/* CTO Image Placeholder */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className={`w-full h-96 rounded-3xl ${
                darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-200 border border-gray-300'
              } flex items-center justify-center`}>
                <div className="text-center">
                  <User className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <span className={`text-lg font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    CTO Photo
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
