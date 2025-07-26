import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, Smartphone, Globe } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'FashionHub E-Commerce',
      category: 'ecommerce',
      description: 'A modern fashion e-commerce platform with advanced filtering, wishlist, and AR try-on features.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['AR Try-On', 'Advanced Search', 'Wishlist', 'Payment Gateway'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { revenue: '$2.5M', users: '50K+', conversion: '3.8%' }
    },
    {
      id: 2,
      title: 'TechStore Mobile App',
      category: 'mobile',
      description: 'Cross-platform mobile app for electronics store with barcode scanning and price comparison.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Stripe'],
      features: ['Barcode Scanner', 'Price Comparison', 'Push Notifications', 'Offline Mode'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { revenue: '$1.8M', users: '35K+', conversion: '4.2%' }
    },
    {
      id: 3,
      title: 'FreshMarket Online',
      category: 'ecommerce',
      description: 'Grocery delivery platform with real-time inventory tracking and subscription management.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Twilio'],
      features: ['Real-time Inventory', 'Subscription Plans', 'Delivery Tracking', 'Recipe Suggestions'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { revenue: '$3.2M', users: '75K+', conversion: '5.1%' }
    },
    {
      id: 4,
      title: 'ArtisanCraft Marketplace',
      category: 'marketplace',
      description: 'Handmade goods marketplace connecting artisans with customers worldwide.',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
      features: ['Multi-vendor', 'Commission System', 'Escrow Payments', 'Review System'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { revenue: '$4.1M', users: '120K+', conversion: '2.9%' }
    },
    {
      id: 5,
      title: 'FitnessGear Store',
      category: 'ecommerce',
      description: 'Sports equipment e-commerce with virtual fitting and workout planning features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Angular', 'Express.js', 'MongoDB', 'PayPal'],
      features: ['Virtual Fitting', 'Workout Plans', 'Size Calculator', 'Video Reviews'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { revenue: '$1.9M', users: '45K+', conversion: '3.5%' }
    },
    {
      id: 6,
      title: 'BookWorld Digital',
      category: 'ecommerce',
      description: 'Digital bookstore with e-reader integration and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      technologies: ['React', 'GraphQL', 'PostgreSQL', 'Stripe'],
      features: ['E-reader Sync', 'AI Recommendations', 'Reading Progress', 'Book Clubs'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { revenue: '$2.8M', users: '65K+', conversion: '4.7%' }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'marketplace', label: 'Marketplace' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-2 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover our latest e-commerce projects that have transformed businesses 
            and delivered exceptional results for our clients.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {project.category === 'mobile' && <Smartphone className="w-4 h-4 text-primary-600" />}
                    {project.category === 'ecommerce' && <ShoppingCart className="w-4 h-4 text-primary-600" />}
                    {project.category === 'marketplace' && <Globe className="w-4 h-4 text-primary-600" />}
                    <span className="text-sm font-medium text-primary-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-secondary-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-secondary-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{project.stats.revenue}</div>
                      <div className="text-xs text-secondary-600">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{project.stats.users}</div>
                      <div className="text-xs text-secondary-600">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">{project.stats.conversion}</div>
                      <div className="text-xs text-secondary-600">Conversion</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your e-commerce vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-secondary-50 transition-colors"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 