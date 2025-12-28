'use client';

import { motion } from 'framer-motion';
import { hobbies } from '@/lib/data';

const Hobbies = () => {
  return (
    <section className='py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-8 md:mb-12 text-center'>
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Beyond the Code
          </motion.h2>
          <motion.div
            className='w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6'
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            When I&apos;m not building amazing web applications, here&apos;s what keeps me inspired and engaged
          </motion.p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className='relative z-10'>
                <div className='text-4xl sm:text-5xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300'>
                  {hobby.icon}
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3'>
                  {hobby.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                  {hobby.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div
                className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${hobby.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

