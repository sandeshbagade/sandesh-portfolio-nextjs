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
              My Story
            </h2>
            <div className='space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
              <p>
                Hey there! I&apos;m Sandesh, a passionate Full Stack Web Developer who loves building amazing digital experiences. 
                My journey in software development began during my undergraduate studies at NIT Trichy, where I discovered my 
                passion for creating elegant solutions to complex problems.
              </p>
              <p>
                Currently, I work as a <span className='font-semibold text-gray-900 dark:text-white'>Freelance Full Stack Web Developer</span>, 
                collaborating with clients from <span className='font-semibold text-gray-900 dark:text-white'>US, Canada, and Singapore</span>. 
                I specialize in JavaScript, ReactJS, NextJS, Python, and NodeJS, building everything from responsive web applications 
                to complex full-stack solutions. With over 4 years of professional experience, I&apos;ve had the opportunity to work 
                with diverse technologies and deliver projects that make a real impact.
              </p>
              <p>
                What drives me is the desire to create technology that not only solves problems but also delights users. 
                I approach each project with dedication, creativity, and a commitment to excellence. Whether it&apos;s 
                improving user experiences, optimizing performance, or building something entirely new, I bring passion 
                and expertise to every line of code.
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6'>
              Beyond the Code
            </h2>
            <div className='space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
              <p>
                I&apos;m an active <span className='font-semibold text-gray-900 dark:text-white'>stock market investor</span> 📈 
                who takes swing trades and invests in companies based on fundamental analysis. I love diving deep into company 
                financials, analyzing market trends, and understanding what makes businesses tick. The intersection of data, 
                strategy, and market psychology fascinates me!
              </p>
              <p>
                I have a <span className='font-semibold text-gray-900 dark:text-white'>keen interest in geopolitics</span> 🌍 
                and love discussing how global events shape our world. From international relations to economic policies, 
                I&apos;m always eager to understand the bigger picture and how geopolitical shifts impact markets, technology, 
                and society. If you want to talk about how global things are shaping, I&apos;m all ears!
              </p>
              <p>
                When I&apos;m not analyzing markets or following world events, you&apos;ll find me on the pickleball court! 🏓 
                I&apos;m passionate about the game and love the combination of strategy, agility, and fun it brings. It&apos;s 
                a great way to stay active and meet amazing people.
              </p>
              <p>
                Music is another big part of my life. I play the flute 🎵, and it&apos;s my creative outlet that helps me 
                relax and express myself in ways that code cannot. There&apos;s something magical about creating melodies 
                and losing yourself in the rhythm.
              </p>
              <p>
                I&apos;m also passionate about photography 📸 and love capturing moments through my lens. Check out my{' '}
                <a
                  href='https://www.instagram.com/sandesh_bagade'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline font-medium'
                >
                  Instagram
                </a>{' '}
                to see the world through my perspective - from travel adventures to everyday moments that inspire me.
              </p>
            </div>
          </div>

          <div className='pt-4'>
            <Link
              href='/projects'
              className='inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group cursor-pointer'
              aria-label='View my projects'
            >
              View my projects
              <CgArrowLongRight className='ml-2 group-hover:translate-x-2 transition-transform' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
