"use client";

import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../app/ThemeToggle";
import Logo from "./Logo";

const Navbar = () => {
  const navItems = [
    { name: "About", to: "#about", href: "/" },
    { name: "Experience", to: "#experience", href: "/" },
    { name: "Skills", to: "#skills", href: "/" },
    { name: "Projects", to: "#projects", href: "/" },
    { name: "Contact", to: "#contact", href: "/" },
  ];

  const buttons = [
    {
      link: "mailto:tushar2643@gmail.com",
      icon: <Mail size={20} />,
      label: "Email",
    },
    {
      link: "https://github.com/tushh-codes",
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/tushar-rathore-9927761b3",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Use requestAnimationFrame for smoother scroll detection
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  // Scroll to section (even from other pages)
  const scrollToSection = (href: string) => {
    if (pathname !== "/") {
      router.push("/");
      // Store the section to scroll to after navigation
      sessionStorage.setItem("scrollTo", href);
    } else {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false);
  };

  // Check for scroll target after navigation
  useEffect(() => {
    if (pathname === "/") {
      const scrollTo = sessionStorage.getItem("scrollTo");
      if (scrollTo) {
        setTimeout(() => {
          document.querySelector(scrollTo)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          sessionStorage.removeItem("scrollTo");
        }, 100);
      }
    }
  }, [pathname]);

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        easeInOut: "easeInOut"
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        easeInOut: "easeInOut"
      },
    },
  };

  const navItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  if (!isMounted) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-black dark:text-white shadow-sm"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      <div className='relative z-10 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        {/* Logo */}
        <div className='logo'>
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex gap-6 font-medium'>
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item.to)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className='relative px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer group'
            >
              {item.name}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full'></span>
            </motion.button>
          ))}
        </nav>

        {/* Right Side */}
        <div className='hidden md:flex gap-4 items-center'>
          <div className='flex gap-3'>
            {buttons.map((btn, index) => (
              <motion.a
                key={index}
                href={btn.link}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
                aria-label={btn.label}
              >
                {btn.icon}
              </motion.a>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex gap-4 items-center'>
          <ThemeToggle />
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
            className='p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-black dark:text-white'
            aria-label='Toggle menu'
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial='closed'
            animate='open'
            exit='closed'
            className='md:hidden bg-white dark:bg-slate-900 shadow-lg border-t border-gray-200 dark:border-gray-800 overflow-hidden'
          >
            <nav className='flex flex-col px-6 py-4'>
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  variants={navItemVariants}
                  initial='closed'
                  animate='open'
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.to)}
                  className='py-3 text-left text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0'
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            <motion.div
              variants={navItemVariants}
              initial='closed'
              animate='open'
              transition={{ delay: 0.5 }}
              className='flex gap-4 px-6 pb-4 justify-center'
            >
              {buttons.map((btn, index) => (
                <motion.a
                  key={index}
                  href={btn.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
                  aria-label={btn.label}
                >
                  {btn.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
