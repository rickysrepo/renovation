'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Service } from '@/types';

const services: Service[] = [
  {
    id: '1',
    icon: '🎨',
    title: 'Creative Design',
    description: 'Stunning visual designs that capture your brand essence and engage your audience effectively.',
  },
  {
    id: '2',
    icon: '💻',
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance.',
  },
  {
    id: '3',
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
  },
  {
    id: '4',
    icon: '🚀',
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies that align with your business goals and drive growth.',
  },
  {
    id: '5',
    icon: '📈',
    title: 'SEO Optimization',
    description: 'Boost your online visibility with proven SEO techniques and content strategies.',
  },
  {
    id: '6',
    icon: '🛡️',
    title: 'Security Solutions',
    description: 'Robust security measures to protect your digital assets and user data.',
  },
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital age.
            From design to development, we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group hover:border-blue-200"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}