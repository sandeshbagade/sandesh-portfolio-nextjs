'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  return (
    <section className='py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.sections.skills.title}
          </motion.h2>
          <motion.div
            className='w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6'
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t.sections.skills.description}
          </motion.p>
        </div>

        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                {skillCategory.category}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skillCategory.items.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className='px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium'>
      {name}
    </span>
  );
};

export default Skills;
