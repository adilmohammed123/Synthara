import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Smartphone, 
  Palette, 
  Zap, 
  Shield, 
  BarChart3,
  Globe,
  Headphones
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-Commerce Development',
      description: 'Custom online stores built with modern technologies like React, Node.js, and Shopify.',
      features: ['Responsive Design', 'Payment Integration', 'Inventory Management', 'Order Processing'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'Push Notifications'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve search engine rankings with optimization.',
      features: ['Page Speed', 'SEO Optimization', 'Caching', 'CDN Setup'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with PCI DSS compliance and data protection.',
      features: ['SSL Certificates', 'PCI Compliance', 'Data Encryption', 'Security Audits'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting to track performance and growth.',
      features: ['Google Analytics', 'Custom Dashboards', 'Conversion Tracking', 'A/B Testing'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Platform Integration',
      description: 'Seamless integration with third-party platforms and services.',
      features: ['API Development', 'Webhook Setup', 'Third-party APIs', 'Data Sync'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for your e-commerce platform.',
      features: ['Live Chat', 'Ticket System', 'Phone Support', 'Emergency Response'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
    <section id="services" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-2 mb-6">
            Complete E-Commerce Solutions
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end e-commerce development services 
            that help businesses grow and succeed in the digital marketplace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="card p-6 h-full group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives results. 
              Get in touch with our team today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 