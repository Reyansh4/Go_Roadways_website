import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Camera, Heart, ArrowRight, Users, Coffee, ShoppingBag, Utensils } from 'lucide-react';

interface ExplorePageProps {
  darkMode: boolean;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ darkMode }) => {
  const featuredAttractions = [
    {
      id: 1,
      name: 'CN Tower',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg/330px-Toronto_-_ON_-_Toronto_Harbourfront7.jpg',
      description: 'Iconic 553m tower with panoramic city views',
      rating: 4.5,
      category: 'Landmark',
      time: '2-3 hours',
      coordinates: { lat: 43.6426, lng: -79.3871 }
    },
    {
      id: 2,
      name: 'Royal Ontario Museum',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HddRl0tDncMqFI1aBcS9OLHSifE0px1FfQ&s',
      description: 'World-class museum with diverse collections',
      rating: 4.3,
      category: 'Museum',
      time: '3-4 hours',
      coordinates: { lat: 43.6677, lng: -79.3948 }
    },
    {
      id: 3,
      name: 'Distillery District',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tBToWhASPmMvkBIDRYitgQOevXsYGbWTbA&s',
      description: 'Historic cobblestone streets with shops & restaurants',
      rating: 4.4,
      category: 'Historic',
      time: '2-3 hours',
      coordinates: { lat: 43.6519, lng: -79.3604 }
    },
    {
      id: 4,
      name: 'Toronto Islands',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_7AW7Kr0VYDOuFp0qwT1U2zD6ctg772jJA&s',
      description: 'Scenic islands perfect for cycling and picnics',
      rating: 4.6,
      category: 'Nature',
      time: 'Half day',
      coordinates: { lat: 43.6304, lng: -79.3956 }
    },
    {
      id: 5,
      name: 'St. Lawrence Market',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7hNsAbgzoH-_3Spnyzwp3ZFwbMVyeT9sAw&s',
      description: 'Historic market with local food and crafts',
      rating: 4.2,
      category: 'Market',
      time: '1-2 hours',
      coordinates: { lat: 43.6487, lng: -79.3715 }
    },
    {
      id: 6,
      name: 'Harbourfront Centre',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcaWOrK8xP-xBed0KLOb081s_y7juND1iTg&s',
      description: 'Waterfront cultural hub with events and activities',
      rating: 4.1,
      category: 'Culture',
      time: '2-3 hours',
      coordinates: { lat: 43.6408, lng: -79.3815 }
    }
  ];

  const neighborhoods = [
    {
      name: 'Downtown',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllAnX91uNLi3wLCrBrroH31jgCE5KdUzj0Q&s',
      description: 'Financial district with skyscrapers and shopping',
      highlights: ['CN Tower', 'Eaton Centre', 'Yonge-Dundas Square']
    },
    {
      name: 'Entertainment District',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6DQyHzuS3un56Mt6APoXWnrIobWkRNUmiQ&s',
      description: 'Theater, restaurants, and nightlife hub',
      highlights: ['Royal Alexandra Theatre', 'King Street West', 'TIFF Bell Lightbox']
    },
    {
      name: 'Old Toronto',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhr24ITX-k9vi9onzurXF3quSpHlCpy2Ztnw&s',
      description: 'Historic area with Victorian architecture',
      highlights: ['Distillery District', 'St. Lawrence Market', 'Gooderham Building']
    },
    {
      name: 'Waterfront',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3U9Jreijxopt564R-zT5BOBM7EBzy25ifRw&s',
      description: 'Lake Ontario shoreline with parks and beaches',
      highlights: ['Harbourfront Centre', 'Toronto Islands', 'Sugar Beach']
    }
  ];

  const activities = [
    { icon: <Camera className="h-6 w-6" />, name: 'Photography', color: 'blue' },
    { icon: <Utensils className="h-6 w-6" />, name: 'Food Tours', color: 'green' },
    { icon: <ShoppingBag className="h-6 w-6" />, name: 'Shopping', color: 'purple' },
    { icon: <Coffee className="h-6 w-6" />, name: 'Café Hopping', color: 'orange' },
    { icon: <Users className="h-6 w-6" />, name: 'Group Tours', color: 'pink' },
    { icon: <Heart className="h-6 w-6" />, name: 'Romantic Spots', color: 'red' }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Landmark': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Museum': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Historic': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      'Nature': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Market': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Culture': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900'
      }`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Toronto Skyline"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-lg font-semibold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover Toronto
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore the <span className="text-primary">6ix</span>
            </motion.h1>
            <motion.p 
              className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From iconic landmarks to hidden gems, discover the best of Toronto 
              with our curated guide to the city's most exciting attractions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Attractions */}
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
              Must-Visit Attractions
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
              Discover Toronto's most iconic landmarks and hidden treasures
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                className={`group relative overflow-hidden rounded-2xl ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(attraction.category)}`}>
                      {attraction.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{attraction.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {attraction.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{attraction.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Downtown</span>
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary/80 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
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
              Explore by Neighborhood
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
              Each area of Toronto has its own unique character and attractions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                className={`group relative overflow-hidden rounded-2xl ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative h-64">
                  <img 
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{neighborhood.name}</h3>
                    <p className="text-gray-200">{neighborhood.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold mb-3">Top Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
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
              Things to Do
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
              Discover activities that match your interests
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                className={`group text-center p-6 rounded-2xl ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                } hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  activity.color === 'blue' ? (darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600') :
                  activity.color === 'green' ? (darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600') :
                  activity.color === 'purple' ? (darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600') :
                  activity.color === 'orange' ? (darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-600') :
                  activity.color === 'pink' ? (darkMode ? 'bg-pink-900/30 text-pink-400' : 'bg-pink-100 text-pink-600') :
                  (darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600')
                }`}>
                  {activity.icon}
                </div>
                <h3 className="font-semibold">{activity.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
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
              Travel Tips
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
              Make the most of your Toronto visit
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: 'Best Time to Visit',
                description: 'May to October for warm weather and outdoor activities. Winter months offer unique experiences like skating at Nathan Phillips Square.',
                color: 'blue'
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: 'Getting Around',
                description: 'Use our Go Roadways service for convenient transportation. TTC subway and streetcars also provide excellent city coverage.',
                color: 'green'
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: 'Local Favorites',
                description: 'Try poutine, visit Kensington Market, and don\'t miss the sunset from the Toronto Islands. Ask locals for hidden gems!',
                color: 'purple'
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                className={`p-8 rounded-2xl ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`inline-flex p-4 rounded-full mb-6 ${
                  tip.color === 'blue' ? (darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600') :
                  tip.color === 'green' ? (darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600') :
                  (darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600')
                }`}>
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
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
              Ready to Explore Toronto?
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
              Book your ride with Go Roadways and discover all that Toronto has to offer
            </motion.p>
            <motion.button 
              className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book Your Ride</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
