"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Code, ChevronDown } from "lucide-react";
import Image from "next/image";

// Typing Animation Component
const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const texts = [
      "Full Stack Developer",
      "React.js Developer",
      "Next.js Developer",
      "Node.js Developer",
      "Software Engineer",
    ];

    const currentText = texts[textIndex];

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000); // Wait 2 seconds before deleting
      return () => clearTimeout(waitTimer);
    }

    if (!isDeleting && charIndex < currentText.length) {
      // Typing
      const typingTimer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(typingTimer);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Finished typing, wait before deleting
      setIsWaiting(true);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      const deletingTimer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
      return () => clearTimeout(deletingTimer);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }
  }, [charIndex, isDeleting, isWaiting, textIndex]);

  return (
    <span className='relative'>
      {displayText}
      <motion.span
        className='inline-block w-0.5 h-6 bg-indigo-600 dark:bg-indigo-400 ml-1'
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};

function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => setMounted(true), []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        easeInOut: "easeInOut",
      },
    },
  };

  // Blob animation
  const blobAnimation = {
    scale: [1, 1.1, 1],
    rotate: [0, 5, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      easeInOut: "easeInOut",
    },
  };

  return (
    <section className='min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center relative'>
      {/* Background elements */}
      {mounted && (
        <>
          {/* Animated gradient blobs */}
          <motion.div
            animate={blobAnimation}
            className='absolute top-10 left-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-40 filter blur-xl transform -translate-x-1/2'
          />
          <motion.div
            animate={{
              ...blobAnimation,
              transition: { ...blobAnimation.transition, delay: 0.2 },
            }}
            className='absolute top-0 right-0 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-40 filter blur-xl transform translate-x-1/2'
          />
          <motion.div
            animate={{
              ...blobAnimation,
              transition: { ...blobAnimation.transition, delay: 0.4 },
            }}
            className='absolute bottom-0 left-1/4 w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-40 filter blur-xl'
          />

          {/* Grid pattern */}
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 dark:opacity-10' />
        </>
      )}

      {/* Foreground Content - Two Column Layout */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='z-20 max-w-7xl mx-auto mt-20 w-full'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]'>
          {/* Left Column - Content */}
          <div className='text-left lg:pr-8 order-2 lg:order-1'>
            {/* Badge */}
            {/* <motion.div
              variants={itemVariants}
              className='inline-flex items-center rounded-full px-4 py-2 text-sm backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border border-slate-300 dark:border-slate-700 mb-8 shadow-sm'
            >
              <span className='w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse'></span>
              Available for new opportunities
            </motion.div> */}

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight'
            >
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500'>
                Tushar Rathore
              </span>
            </motion.h1>

            {/* Role with Typing Animation */}
            <motion.div
              variants={itemVariants}
              className='text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-8'
            >
              <span>I&apos;m a </span>
              <span className='font-medium text-indigo-600 dark:text-indigo-400'>
                <TypingAnimation />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className='text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed'
            >
              Full Stack Developer with 2+ years of experience building scalable
              web applications using React.js, Next.js, Node.js, and SQL.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row gap-4 mb-12'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='#projects'
                  className='group relative flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium shadow-lg shadow-indigo-500/20 dark:shadow-indigo-900/30 transition-all duration-300 overflow-hidden'
                >
                  <span className='relative z-10'>View My Work</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='#contact'
                  className='group flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-800/50 px-8 py-4 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm'
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Contact Me</span>
                  <motion.div
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className='flex space-x-6'
            >
              <motion.a
                href='https://github.com/tushh-codes'
                whileHover={{ y: -5, scale: 1.1 }}
                className='p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                aria-label='GitHub'
              >
                <Github className='w-6 h-6' />
              </motion.a>
              <motion.a
                href='https://www.linkedin.com/in/tushar1201/'
                whileHover={{ y: -5, scale: 1.1 }}
                className='p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-6 h-6' />
              </motion.a>
              <motion.a
                href='mailto:tushar2643@gmail.com'
                whileHover={{ y: -5, scale: 1.1 }}
                className='p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                aria-label='Email'
              >
                <Mail className='w-6 h-6' />
              </motion.a>
              <motion.a
                href='https://leetcode.com/tushh_r/'
                whileHover={{ y: -5, scale: 1.1 }}
                className='p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                aria-label='LeetCode'
              >
                <Code className='w-6 h-6' />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            variants={itemVariants}
            className='flex justify-center lg:justify-end order-1 lg:order-2'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='relative group'
            >
              {/* Image container with blend effects */}
              <div className='relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]'>
                {/* Background gradient that matches theme */}
                <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 dark:from-indigo-400/30 dark:to-purple-500/30 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500' />

                {/* Image with theme-matching filters */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className='relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-slate-700/50 shadow-2xl'
                >
                  <Image
                    src='/pic.webp'
                    alt='Tushar Rathore - Full Stack Developer'
                    fill
                    className='object-cover object-center filter brightness-110 contrast-105 dark:brightness-95 dark:contrast-110 transition-all duration-300 group-hover:scale-110'
                    sizes='(max-width: 768px) 320px, (max-width: 1024px) 384px, 400px'
                    priority
                  />

                  {/* Overlay with theme-matching blend */}
                  <div className='absolute inset-0 bg-gradient-to-t from-indigo-600/10 via-transparent to-purple-600/10 dark:from-indigo-400/20 dark:to-purple-500/20 mix-blend-overlay' />
                </motion.div>

                {/* Floating elements around image */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className='absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 dark:bg-indigo-400 rounded-full opacity-80'
                />
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full opacity-60'
                />
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className='absolute top-1/4 -left-8 w-4 h-4 bg-yellow-400 dark:bg-yellow-300 rounded-full opacity-70'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='absolute bottom-20 lg:block hidden left-1/2 transform -translate-x-1/2 z-10'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='flex flex-col items-center text-slate-500 dark:text-slate-400'
        >
          <span className='text-sm mb-2'>Scroll down</span>
          <ChevronDown className='w-5 h-5' />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
