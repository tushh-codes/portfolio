import { experience } from "@/data/experience";
import { motion } from "framer-motion";

// Updated Experience Section
function Experience() {
  return (
    <section
      id='experience'
      className='relative py-20 px-4 max-w-6xl mx-auto'
    >
      {/* Background elements */}
      <div className='absolute -top-20 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-xl animate-blob animation-delay-4000' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl font-bold mb-4'>
          <span className='bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent'>
            Experience
          </span>
        </h2>
        <div className='w-20 h-1 bg-indigo-600 mx-auto mb-6'></div>
        <p className='text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
          My professional journey and the roles I&apos;ve undertaken
        </p>
      </motion.div>

      <div className='space-y-12 mt-12'>
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-white dark:bg-slate-900/40 flex flex-col gap-6 border border-gray-200 dark:border-slate-700/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all'
          >
            {/* Job Title + Meta Info */}
            <div>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white'>
                {exp.role}
              </h3>
              <div className='flex flex-wrap gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400'>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-indigo-500 dark:text-indigo-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                    ></path>
                  </svg>
                  <span className='font-semibold'>{exp.company}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-indigo-500 dark:text-indigo-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    ></path>
                  </svg>
                  <span>
                    {exp.from} – {exp.to}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-4 h-4 text-indigo-500 dark:text-indigo-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description + Tech Stack */}
            <div className='flex flex-col md:flex-row justify-between gap-6'>
              {/* Responsibilities */}
              <ul className='list-disc marker:text-indigo-500 dark:marker:text-indigo-400 pl-5 text-gray-700 dark:text-gray-300 flex-1 space-y-2 text-sm sm:text-base'>
                {exp.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className='flex-1'>
                <h4 className='text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-300 mb-3'>
                  Technologies Used
                </h4>
                <div className='flex flex-wrap gap-3'>
                  {exp.techUsed.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow hover:shadow-indigo-500/20 transition-all'
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
    </section>
  );
}

export default Experience;
