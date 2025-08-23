"use client";

import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail } from "lucide-react";


function Contact() {
  return (
    <section
      id='contact'
      className='relative py-20 px-4 max-w-6xl mx-auto'
    >
      {/* Background elements */}
      <div className='absolute -bottom-20 -left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-xl animate-blob animation-delay-4000' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl font-bold mb-4'>
          <span className='bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent'>
            Get in Touch
          </span>
        </h2>
        <div className='w-20 h-1 bg-indigo-600 mx-auto mb-6'></div>
                <p className='text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed'>
          I&apos;m always open to discussing new opportunities and interesting
          projects
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm max-w-2xl mx-auto'
      >
        <div className='text-center'>
          <p className='text-lg text-gray-700 dark:text-gray-300 mb-8'>
            I&apos;m always open to exciting opportunities — whether it&apos;s full-time
            roles, freelance projects, tech collaborations, or even a friendly
            conversation. Let&apos;s connect!
          </p>

          <motion.a
            href='https://www.linkedin.com/in/tushar1201/'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-900/30'
          >
            <Linkedin className='w-5 h-5' />
            Reach Me on LinkedIn
          </motion.a>

          <div className='mt-8 flex justify-center space-x-6'>
            <motion.a
              href='mailto:tushar2643@gmail.com'
              whileHover={{ y: -5 }}
              className='p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
              aria-label='Email'
            >
              <Mail className='w-6 h-6' />
            </motion.a>
            <motion.a
              href='https://github.com/tushh-codes'
              whileHover={{ y: -5 }}
              className='p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
              aria-label='GitHub'
            >
              <Github className='w-6 h-6' />
            </motion.a>
            <motion.a
              href='https://leetcode.com/tushh_r/'
              whileHover={{ y: -5 }}
              className='p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
              aria-label='LeetCode'
            >
              <Code className='w-6 h-6' />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


export default Contact;
