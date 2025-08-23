"use client";

import { allSkills, skillTabs } from "@/data/skills";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  return (
    <section
      id='skills'
      className='py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'
    >
      {/* Background elements */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-xl animate-blob' />
      <div className='absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 filter blur-xl animate-blob animation-delay-2000' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl font-bold mb-4'>
          <span className='bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent'>
            Skills
          </span>
        </h2>
        <div className='w-20 h-1 bg-indigo-600 mx-auto mb-6'></div>
        <p className='text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed'>
          Technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>
      {/* Tabs */}
      <div className='flex flex-wrap gap-3 mt-8 justify-center sm:justify-start'>
        {skillTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm rounded-full border font-medium transition-all duration-200 cursor-pointer
              ${
                activeTab === tab
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "text-gray-700 dark:text-gray-400 border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10'>
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-3 p-4 rounded-xl border bg-white/50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 hover:border-indigo-500 transition-all shadow-sm'
          >
            <Image
              src={skill.img}
              alt={skill.name}
              width={40}
              height={40}
              className='object-contain w-10 h-10'
            />
            <span className='text-sm text-center font-medium text-gray-800 dark:text-gray-300'>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
