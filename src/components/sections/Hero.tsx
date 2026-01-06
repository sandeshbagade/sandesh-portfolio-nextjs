"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useLanguage } from "@/lib/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className='py-16 md:py-20 lg:py-32 relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10' />

      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10'>
          {/* Text Content */}
          <motion.div
            className='w-full md:w-1/2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight'>
              {t.hero.greeting}{" "}
              <span className='text-blue-600'>{t.hero.name}</span> 👋
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed max-w-lg'>
              {t.hero.intro}
            </p>
            <div className='flex flex-wrap gap-2 mb-4 md:mb-6'>
              <span className='px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium'>
                {t.hero.badges.developer}
              </span>
              <span className='px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium'>
                {t.hero.badges.investor}
              </span>
              <span className='px-3 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium'>
                {t.hero.badges.mindfulness}
              </span>
              <span className='px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium'>
                {t.hero.badges.fitness}
              </span>
              <span className='px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium'>
                {t.hero.badges.geopolitics}
              </span>
            </div>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-lg'>
              {t.hero.location}
            </p>

            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'>
              <Link
                href='https://www.instagram.com/sandesh_bagade'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 text-center'
              >
                {t.hero.buttons.instagram}
              </Link>
              <Link
                href='/contact'
                className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-center'
              >
                {t.hero.buttons.contact}
                <HiArrowNarrowRight />
              </Link>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className='w-full md:w-2/5 order-first md:order-last'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl'>
              {/* Profile image with fallback to initials */}
              <Image
                src='/images/user_profile.png'
                alt='Sandesh Bagade'
                fill
                sizes='(max-width: 768px) 256px, 320px'
                className='object-cover'
                priority
                unoptimized={true}
                onError={(e) => {
                  // If image fails to load, show initials instead
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement("div");
                    fallback.className = "text-blue-600 text-6xl font-bold";
                    fallback.innerText = "SB";
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
