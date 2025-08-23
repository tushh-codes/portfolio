"use client";

import { Download, Code } from "lucide-react";
import { easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";

// About Section with modern styling
function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        easeInOut: "easeInOut"
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        easeInOut: "easeInOut"
      },
    },
  };

  return (
    <section
      id='about'
      className='relative py-20 px-4 max-w-6xl mx-auto'
    >
      {/* Background elements */}
      {mounted && (
        <>
          <div className='absolute top-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-xl animate-blob transform -translate-x-1/3' />
          <div className='absolute -bottom-10 right-0 w-72 h-72 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-xl animate-blob animation-delay-2000 transform translate-x-1/3' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-15 filter blur-xl animate-blob animation-delay-4000' />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl font-bold mb-4'>
          <span className='bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent'>
            About Me
          </span>
        </h2>
        <div className='w-20 h-1 bg-indigo-600 mx-auto mb-6'></div>
        <p className='text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
          Get to know more about my background, skills, and what drives me as a
          developer
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start'
      >
        {/* Left - About Text */}
        <motion.div
          variants={itemVariants}
          className='space-y-6 md:text-lg text-md leading-relaxed'
        >
          <p className='dark:text-gray-300 text-gray-800'>
            I'm a passionate Front-End Developer with 2+ years of experience
            creating modern, responsive web applications. My expertise lies in
            React.js, Next.js, and TypeScript, with a strong focus on user
            experience and performance optimization.
          </p>

          <p className='italic text-sm dark:text-indigo-400 text-indigo-950'>
            "Building responsive, high-performance web experiences that users
            love."
          </p>

          {/* Resume Button */}
          <motion.a
            href='/Tushar-Rathore-Resume.pdf'
            download
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-indigo-500/20 dark:shadow-indigo-900/30 transition-all duration-300'
          >
            <Download size={16} /> Download Resume
          </motion.a>
        </motion.div>

        {/* Right - Highlight Cards */}
        <motion.div
          variants={itemVariants}
          className='grid grid-cols-1 sm:grid-cols-2 gap-6'
        >
          {[
            {
              icon: (
                <Code className='w-6 h-6 text-indigo-900 dark:text-indigo-400' />
              ),
              title: "Frontend Development",
              description:
                "Specializing in React, Next.js and modern JavaScript",
            },
            {
              icon: (
                <svg
                  className='w-6 h-6 text-indigo-900 dark:text-indigo-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  ></path>
                </svg>
              ),
              title: "Performance Optimization",
              description: "Enhancing application speed and user experience",
            },
            {
              icon: (
                <svg
                  className='w-6 h-6 text-indigo-900 dark:text-indigo-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  ></path>
                </svg>
              ),
              title: "Problem Solving",
              description: "Strong analytical and debugging skills",
            },
            {
              icon: (
                <svg
                  className='w-6 h-6 text-indigo-900 dark:text-indigo-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  ></path>
                </svg>
              ),
              title: "Collaboration",
              description: "Experience working in agile teams and with clients",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className='flex flex-col gap-2 p-6 border dark:border-slate-700 border-slate-200 rounded-xl shadow-sm bg-white dark:bg-slate-900/50 backdrop-blur-sm'
            >
              {item.icon}
              <h4 className='text-base font-semibold text-gray-900 dark:text-white'>
                {item.title}
              </h4>
              <p className='text-sm text-gray-700 dark:text-gray-400'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
