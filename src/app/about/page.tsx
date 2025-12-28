import { Metadata } from 'next';
import { CgArrowLongRight } from 'react-icons/cg';
import { LiaUniversitySolid } from 'react-icons/lia';
import { HiCalendar, HiGlobeAlt } from 'react-icons/hi';
import { personalInfo, education } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Sandesh Bagade',
  description:
    'Get to know Sandesh Bagade - a Freelance Full Stack Web Developer, Pickleball enthusiast, Flute player, and Photography lover. Working with clients from US, Canada, and Singapore.',
};

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-12 md:py-16 lg:py-24'>
      {/* Page Title */}
      <div className='text-center mb-10 md:mb-16'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6'>
          About Me
        </h1>
        <div className='w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6 md:mb-8'></div>
        <p className='text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
          {personalInfo.about}
        </p>
      </div>

      {/* Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12'>
        {/* Personal Info & Education Section */}
        <div className='col-span-1 space-y-6 md:space-y-8'>
          {/* Personal Details Card */}
          <div>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6'>
              Personal Details
            </h2>
            <div className='bg-white dark:bg-gray-800 p-5 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 space-y-4'>
              <div className='flex items-start'>
                <HiCalendar className='mr-3 mt-1 text-blue-600 flex-shrink-0' />
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Date of Birth</p>
                  <p className='text-gray-900 dark:text-white font-medium'>{personalInfo.dateOfBirth}</p>
                </div>
              </div>
              
              <div className='flex items-start'>
                <HiGlobeAlt className='mr-3 mt-1 text-blue-600 flex-shrink-0' />
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>Languages</p>
                  <p className='text-gray-900 dark:text-white font-medium'>
                    {personalInfo.languages.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center'>
              <LiaUniversitySolid className='mr-2 text-blue-600' />
              Education
            </h2>

            <div className='space-y-6 md:space-y-8'>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className='bg-white dark:bg-gray-800 p-5 md:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700'
                >
                  <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2'>
                    {edu.degree}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-2'>
                    <a
                      href={edu.institutionUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer'
                      aria-label={`Visit ${edu.institution} website`}
                    >
                      {edu.institution}
                    </a>{' '}
                    • {edu.period}
                  </p>
                  <p className='text-gray-600 dark:text-gray-300 pl-2'>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills and Interests */}
        <div className='col-span-1 lg:col-span-2 space-y-8 md:space-y-12'>
          <div>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6'>
              Professional Background
            </h2>
            <div className='space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
              <p>
                I&apos;m a Full Stack Web Developer with a background in Computer Science from NIT Trichy. 
                My journey in software development has been focused on creating effective web solutions using modern technologies.
              </p>
              <p>
                Currently working as a <span className='font-semibold text-gray-900 dark:text-white'>Freelance Web Developer</span>, 
                I collaborate with clients from <span className='font-semibold text-gray-900 dark:text-white'>US, Canada, and Singapore</span>, 
                building web applications using JavaScript, React, Next.js, Python, and Node.js. Each project brings unique challenges 
                and opportunities for growth.
              </p>
              <p>
                Beyond software development, I maintain active interests in stock market investing, geopolitics, and sports. 
                These diverse interests help me bring varied perspectives to my work and life.
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6'>
              Beyond Work
            </h2>
            <div className='space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
              <p>
                <span className='font-semibold text-gray-900 dark:text-white'>Stock Market Investing 📈</span> - Active investor focusing on swing trades 
                and fundamental analysis. I analyze company financials, market trends, and economic indicators to make informed investment decisions. 
                This complements my technical background and keeps me connected to business and economics.
              </p>
              <p>
                <span className='font-semibold text-gray-900 dark:text-white'>Geopolitics 🌍</span> - Strong interest in geopolitics and international 
                relations. Understanding how global events shape economies, markets, and technology is intellectually stimulating and helps me see 
                the bigger picture in both investing and technology.
              </p>
              <p>
                <span className='font-semibold text-gray-900 dark:text-white'>Mindfulness & Spirituality 🧘</span> - I practice mindful living and 
                spirituality (not religious). Mindfulness helps me stay present, focused, and balanced in all aspects of life. It&apos;s essential 
                for maintaining clarity in both work and personal life.
              </p>
              <p>
                <span className='font-semibold text-gray-900 dark:text-white'>Health & Fitness 💪</span> - Regular gym-goer who is passionate about 
                health and nutrition. I cook my own meals, focusing on proper macros and micros rather than just taste. Health is a priority, 
                and I believe in fueling the body correctly for optimal performance.
              </p>
              <p>
                <span className='font-semibold text-gray-900 dark:text-white'>Pickleball 🏓</span> - Regular pickleball player enjoying the strategic 
                and athletic aspects of the sport. If you&apos;re in Pune and interested in playing, feel free to reach out.
              </p>
              <p>
                <span className='font-semibold text-gray-900 dark:text-white'>Travel & Photography ✈️📸</span> - I enjoy traveling and capturing 
                experiences through photography. Follow my{' '}
                <a
                  href='https://www.instagram.com/sandesh_bagade'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline font-medium'
                >
                  Instagram
                </a>{' '}
                to see my visual stories.
              </p>
              <p>
                <span className='font-semibold text-gray-900 dark:text-white'>Flute 🎵</span> - I play the flute as a creative outlet. 
                It provides balance and aids in relaxation and mindfulness practice.
              </p>
            </div>
          </div>

          <div className='pt-4'>
            <Link
              href='/experience'
              className='inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group cursor-pointer'
              aria-label='View my work experience'
            >
              View Work Experience
              <CgArrowLongRight className='ml-2 group-hover:translate-x-2 transition-transform' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
