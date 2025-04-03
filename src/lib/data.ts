// Resume data structured for use in the portfolio website

export const personalInfo = {
  name: 'Sandesh Bagade',
  email: 'sandeshbagade25@gmail.com',
  phone: '+917743929675',
  location: 'Mumbai, India',
  links: {
    linkedin: 'https://www.linkedin.com/in/sandesh-bagade/',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    website: 'https://sandeshbagade.com',
  },
  about:
    "I'm a Software Engineer with expertise in front-end development, focusing on building responsive web applications with modern JavaScript frameworks. I have experience working with data visualization, API design, and implementing chatbot features.",
};

export const experience = [
  {
    title: 'SOFTWARE ENGINEER',
    company: 'Dutchess Management',
    location: 'USA (Remote)',
    period: 'Sept 2023 - Apr 2024',
    description: [
      'Leading the development of front-end features for financial web applications, focusing on data visualization.',
      'Collaborate on API design with the backend team.',
      'Implementing ChatGPT-like chatbot using NextJS and Flowise.',
    ],
    technologies: [
      'NextJS',
      'ReactJS',
      'NextUI',
      'Auth0',
      'Go',
      'PostgreSQL',
      'Flowise',
    ],
  },
  {
    title: 'SOFTWARE ENGINEER',
    company: 'OPA Marketing',
    location: 'Mumbai, India',
    period: 'Mar 2021 - Mar 2023',
    description: [
      'Led front-end design & development of Web and Mobile apps.',
      'Collaborated on API design with the backend team.',
      'Built mobile app with 4.5-star rating and 500k+ downloads.',
      'Developed front-end for internal app for reviewing submissions.',
      'Created marketing app for branding and lead generation.',
      'Built client app for performance tracking.',
    ],
    technologies: [
      'ReactJS',
      'Ant Design',
      'Flutter',
      'FirebaseAuth',
      'Firebase Analytics',
      'FastAPI',
      'NestJS',
      'PostgreSQL',
    ],
  },
  {
    title: 'SOFTWARE DEVELOPER',
    company: 'Origin Health',
    location: 'Singapore (Remote)',
    period: 'May 2020 - Jan 2021',
    description: [
      'Built front-end for AI Healthcare Web App.',
      'Worked closely with the backend team to design and develop APIs.',
    ],
    technologies: ['ReactJS', 'Material UI', 'Flask', 'PostgreSQL'],
  },
];

export const education = [
  {
    degree: 'BACHELOR OF ENGINEERING',
    institution: 'NIT Trichy',
    period: 'June 2016 - May 2020',
    details: 'Major in ICE and Minor in Computer Science Engineering',
  },
];

export const projects: any = [
  {
    title: 'Open Source Contribution',
    description:
      'Merged a Pull Request to improve TypeScript definitions for React Sketch npm package.',
    links: {
      github: 'https://github.com',
      live: null,
    },
    technologies: ['TypeScript', 'React'],
  },
  {
    title: 'EEG Wave Analyser Web App',
    description:
      'Built a web app to manage EEG Wave data using ReactJS for frontend, Django for Backend.',
    links: {
      github: 'https://github.com',
      demo: 'https://youtube.com',
    },
    technologies: ['ReactJS', 'Django', 'Python', 'JavaScript'],
  },
];

export const skills = [
  {
    category: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Flutter',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'FastAPI',
      'Django',
      'Flask',
      'Go',
      'PostgreSQL',
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      'Git',
      'Docker',
      'Firebase',
      'AWS',
      'RESTful APIs',
      'Auth0',
      'Material UI',
      'Ant Design',
    ],
  },
];
