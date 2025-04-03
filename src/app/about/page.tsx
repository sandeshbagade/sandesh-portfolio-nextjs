import { Metadata } from 'next';
import { personalInfo, education } from '@/lib/data';
import Skills from '@/components/sections/Skills';

export const metadata: Metadata = {
  title: 'About - Sandesh Bagade',
  description:
    'Learn more about Sandesh Bagade, a Software Engineer specializing in front-end development with React and Next.js',
};

export default function AboutPage() {
  return (
    <div className='pt-24 pb-16'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            About Me
          </h1>
          <div className='w-16 h-1.5 bg-blue-600 mb-10'></div>

          <div className='prose dark:prose-invert prose-lg max-w-none'>
            <p className='mb-6 text-lg text-gray-700 dark:text-gray-300'>
              {personalInfo.about}
            </p>
            <p className='mb-6 text-lg text-gray-700 dark:text-gray-300'>
              I am passionate about building beautiful, responsive, and
              user-friendly web applications. With experience across various
              industries including fintech, healthcare, and marketing, I bring a
              diverse perspective to every project.
            </p>
            <p className='mb-10 text-lg text-gray-700 dark:text-gray-300'>
              My approach combines technical expertise with a strong focus on
              user experience. I enjoy tackling complex problems and finding
              elegant solutions that deliver value to both businesses and users.
            </p>

            {/* Education Section */}
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Education
            </h2>
            <div className='mb-10'>
              {education.map((edu, index) => (
                <div key={index} className='mb-6'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                    {edu.degree}
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300'>
                    {edu.institution} | {edu.period}
                  </p>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <Skills />
      </div>
    </div>
  );
}
