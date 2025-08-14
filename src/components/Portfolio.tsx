'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Web Platform',
    category: 'Web Development',
    image: '/images/portfolio/project-landscape-1.jpg',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: '/images/portfolio/project-portrait-1.jpg',
    isPortrait: true,
  },
  {
    id: '3',
    title: 'E-commerce Solution',
    category: 'Web Development',
    image: '/images/portfolio/project-landscape-2.jpg',
  },
  {
    id: '4',
    title: 'Brand Identity',
    category: 'Design',
    image: '/images/portfolio/project-portrait-2.jpg',
    isPortrait: true,
  },
  {
    id: '5',
    title: 'Corporate Website',
    category: 'Web Development',
    image: '/images/portfolio/project-landscape-3.jpg',
  },
  {
    id: '6',
    title: 'Food Delivery App',
    category: 'Mobile App',
    image: '/images/portfolio/project-portrait-3.jpg',
    isPortrait: true,
  },
  {
    id: '7',
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    image: '/images/portfolio/project-landscape-4.jpg',
  },
  {
    id: '8',
    title: 'Portfolio Website',
    category: 'Design',
    image: '/images/portfolio/project-portrait-4.jpg',
    isPortrait: true,
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our latest projects and see how we&apos;ve helped businesses
            achieve their digital goals with innovative solutions.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Web Development', 'Mobile App', 'Design', 'Digital Marketing'].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.isPortrait ? 'md:row-span-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] md:aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-200 font-medium">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}