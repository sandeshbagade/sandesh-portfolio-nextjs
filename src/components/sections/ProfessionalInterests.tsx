'use client';

import { motion } from 'framer-motion';
import { professionalInterests } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

const ProfessionalInterests = () => {
  const { t } = useLanguage();
  return (
    <section className='py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-8 md:mb-12 text-center'>
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.sections.professionalInterests.title}
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
            {t.sections.professionalInterests.description}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {professionalInterests.map((interest, index) => (
            <motion.div
              key={index}
              className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className='relative z-10'>
                <div className='text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300'>
                  {interest.icon}
                </div>
                <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3'>
                  {interest.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed'>
                  {interest.description}
                </p>
              </div>

              <div
                className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${interest.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInterests;

