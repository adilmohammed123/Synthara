import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience and conversion rates.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with PCI compliance and data protection.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in e-commerce development and innovation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Proven Results',
      description: 'Track record of increasing sales and improving customer satisfaction.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-2">
                E-Commerce Experts
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-secondary-600 mb-8">
              We are a team of passionate developers, designers, and strategists dedicated to creating 
              exceptional e-commerce experiences. With over 8 years of experience in the digital commerce space, 
              we've helped hundreds of businesses transform their online presence and achieve remarkable growth.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-secondary-600 mb-8">
              Our expertise spans across all major e-commerce platforms including Shopify, WooCommerce, 
              Magento, and custom solutions. We don't just build websites – we create digital storefronts 
              that convert visitors into loyal customers.
            </motion.p>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">8+</div>
                <div className="text-secondary-600">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-secondary-600">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-secondary-600">Client Satisfaction</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-secondary-600">Support Available</div>
              </motion.div>
            </div>

            {/* Mockup Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-secondary-200 rounded w-3/4"></div>
                    <div className="h-4 bg-secondary-200 rounded w-1/2"></div>
                    <div className="h-4 bg-secondary-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="w-32 h-8 bg-primary-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 