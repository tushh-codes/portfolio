"use client";

import {
  ExternalLink,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Code,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const featuredProjects = [
    {
      name: "HRMS Management",
      description: "Enterprise HR Platform for 5k+ users",
    },
    { name: "Bharatatma Puraskar", description: "Award Application System" },
    {
      name: "Tempsens Production",
      description: "SAP-Integrated Manufacturing System",
    },
    { name: "Photography Salon", description: "Portfolio Management Platform" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className='mt-16 relative z-10 text-gray-800 dark:text-white transition-colors duration-300'>
      {/* Background Blur in Dark Mode */}
      <div className='absolute inset-0 dark:bg-gradient-to-br dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-black dark:blur-3xl dark:opacity-30 -z-10' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Personal Info */}
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400'>
              Tushar Rathore
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed'>
              Full Stack Developer with 2+ years of experience building scalable
              web applications using React.js, Next.js, Node.js, Express.js, and
              SQL. Open to exciting opportunities and collaborations.
            </p>

            <div className='space-y-3 text-sm'>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                <Mail size={18} />
                <a
                  href='mailto:tushar2643@gmail.com'
                  className='hover:text-indigo-600 dark:hover:text-indigo-400 transition'
                >
                  tushar2643@gmail.com
                </a>
              </div>
              {/* <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Phone size={18} />
                <span>+91-9483669056</span>
              </div> */}
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                <MapPin size={18} />
                <span>Udaipur, Rajasthan, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className='flex gap-4 mt-6'>
              {[
                {
                  href: "https://github.com/tushh-codes",
                  icon: <Github size={20} />,
                },
                {
                  href: "https://www.linkedin.com/in/tushar1201/",
                  icon: <Linkedin size={20} />,
                },
                {
                  href: "https://leetcode.com/tushh_r/",
                  icon: <Code size={20} />,
                },
                {
                  href: "mailto:tushar2643@gmail.com",
                  icon: <Mail size={20} />,
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 rounded-lg transition-colors hover:text-indigo-600 dark:hover:text-indigo-400'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-indigo-600 dark:text-indigo-300 mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2 text-gray-700 dark:text-gray-400 text-sm'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className='hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition'
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className='text-lg font-semibold text-indigo-600 dark:text-indigo-300 mb-4'>
              Featured Projects
            </h3>
            <ul className='space-y-3 text-sm text-gray-700 dark:text-gray-400'>
              {featuredProjects.map((project, index) => (
                <li key={index}>
                  <div className='text-gray-900 dark:text-white font-medium'>
                    {project.name}
                  </div>
                  <div className='text-xs text-gray-600 dark:text-gray-400'>
                    {project.description}
                  </div>
                </li>
              ))}
            </ul>
            <a
              href='https://github.com/tushh-codes'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition text-sm'
            >
              <span>View all projects</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-300 dark:border-gray-800 mt-12 pt-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4 text-center'>
          <div className='flex items-center justify-center gap-2 flex-wrap'>
            <span>© {currentYear} Tushar Rathore. Made with</span>
            <Heart className='text-red-500 w-4 h-4' />
            <span>& Next.js</span>
          </div>
          <div className='md:flex flex-wrap justify-center gap-3 md:gap-6 hidden'>
            <span>Full Stack Developer</span>
            <span className='hidden sm:inline'>•</span>
            <span>React.js, Next.js & Node.js</span>
            <span className='hidden sm:inline'>•</span>
            <span>Open to Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
