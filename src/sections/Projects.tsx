import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";


function Projects() {
  

  return (
    <section
      id='projects'
      className='py-20 relative'
    >
      {/* Background elements */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-xl animate-blob' />
      <div className='absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-xl animate-blob animation-delay-2000' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent'>
              Projects
            </span>
          </h2>
          <div className='w-20 h-1 bg-indigo-600 mx-auto mb-6'></div>
          <p className='text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            A selection of projects I've worked on, showcasing my skills and
            experience
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-10 mt-12'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-slate-700'
            >
              {/* Header */}
              <div
                className={`h-40 bg-gradient-to-r ${project.bgColor} relative`}
              >
                <div className='absolute inset-0 bg-black/20' />
                <div className='absolute top-5 left-5 text-white'>
                  <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                    ></path>
                  </svg>
                </div>
                <div className='absolute top-5 right-5 flex space-x-3'>
                  {project.gitLink && (
                    <motion.a
                      href={project.gitLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      className='p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors'
                    >
                      <FiGithub className='w-5 h-5 text-white' />
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      className='p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors'
                    >
                      <svg
                        className='w-5 h-5 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        ></path>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition'>
                  {project.name}
                </h3>

                <p className='text-gray-700 dark:text-gray-300 mb-4'>
                  {project.description}
                </p>

                {/* Key Features */}
                <div className='mb-4'>
                  <h4 className='text-sm uppercase font-semibold text-indigo-600 dark:text-indigo-400 mb-2'>
                    Key Features
                  </h4>
                  <ul className='space-y-1 text-sm text-gray-700 dark:text-gray-300'>
                    {project.keyFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-2'
                      >
                        <span className='w-2 h-2 bg-indigo-500 rounded-full' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className='text-sm uppercase font-semibold text-indigo-600 dark:text-indigo-400 mb-2'>
                    Tech Stack
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.techStacks.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className='text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mt-12'
        >
          <motion.a
            href='https://github.com/tushh-codes'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-900/30'
          >
            <FiGithub className='w-5 h-5' />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


export default Projects;
