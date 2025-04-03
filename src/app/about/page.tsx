import { Metadata } from 'next';
import { CgArrowLongRight } from 'react-icons/cg';
import { LiaUniversitySolid } from 'react-icons/lia';
import { personalInfo, education } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Sandesh Bagade',
  description:
    'Learn more about Sandesh Bagade, a senior software engineer with expertise in web development, mobile apps, and modern JavaScript frameworks.',
};

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-16 md:py-24'>
      {/* Page Title */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
          About Me
        </h1>
        <div className='w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8'></div>
        <p className='text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
          {personalInfo.about}
        </p>
      </div>

      {/* Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        {/* Education Section */}
        <div className='col-span-1'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center'>
            <LiaUniversitySolid className='mr-2 text-blue-600' />
            Education
          </h2>

          <div className='space-y-8'>
            {education.map((edu, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700'
              >
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
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
                <ul className='list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1'>
                  {edu.details.map((detail, i) => (
                    <li key={i} className='pl-2'>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills and Interests */}
        <div className='col-span-1 lg:col-span-2 space-y-12'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              My Story
            </h2>
            <div className='space-y-4 text-gray-600 dark:text-gray-300'>
              <p>
                As a passionate software engineer with over 5 years of
                professional experience, I&apos;ve cultivated a deep expertise
                in building modern web and mobile applications. My journey in
                software development began during my undergraduate studies in
                Computer Science at NIT Trichy, where I discovered my passion
                for creating elegant solutions to complex problems.
              </p>
              <p>
                Throughout my career, I&apos;ve had the opportunity to work with
                a diverse range of technologies and frameworks, from React and
                Node.js to Flutter and AWS. I take pride in writing clean,
                efficient code and staying at the forefront of industry trends
                and best practices. My experience spans from startups to
                established enterprises, giving me a versatile perspective on
                software development approaches.
              </p>
              <p>
                What drives me is the desire to create technology that makes a
                positive impact on people&apos;s lives. Whether it&apos;s
                improving user experiences, optimizing performance, or solving
                critical business challenges, I approach each project with
                dedication and a commitment to excellence.
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Outside of Work
            </h2>
            <div className='space-y-4 text-gray-600 dark:text-gray-300'>
              <p>
                When I&apos;m not coding, I enjoy hiking in the mountains,
                exploring new hiking trails, and photography. I&apos;m also an
                avid reader of science fiction and technical books, always
                looking to expand my horizons and learn new things.
              </p>
              <p>
                I&apos;m passionate about continuous learning and regularly
                participate in hackathons, contribute to open-source projects,
                and attend tech meetups to stay connected with the developer
                community.
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
