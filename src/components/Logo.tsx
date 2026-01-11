// src/components/Logo.tsx
import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className='flex items-center gap-3 group cursor-pointer'>
      {/* Modern Professional Logo Icon */}
      <div className='relative'>
        {/* Outer glow effect */}
        <div className='absolute inset-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300'></div>

        {/* Main logo container */}
        <div className='relative w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 overflow-hidden'>
          {/* Background pattern */}
          <div className='absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent'></div>

          {/* Logo text with enhanced styling */}
          <span className='relative text-white font-bold text-xl tracking-tight drop-shadow-sm'>
            TR
          </span>

          {/* Subtle highlight */}
          <div className='absolute top-1 left-1 w-3 h-3 bg-white/20 rounded-full blur-sm'></div>
        </div>
      </div>

      {/* Professional Text Content */}
      <div className='flex flex-col justify-center'>
        <h1 className='text-lg font-bold text-gray-900 dark:text-white tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
          Full Stack Developer
        </h1>
        <div className='flex items-center gap-2'>
          <p className='text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest'>
            Portfolio
          </p>
          {/* Animated dot indicator */}
          <div className='w-1 h-1 bg-blue-500 rounded-full animate-pulse'></div>
        </div>
      </div>

      {/* Subtle interaction feedback */}
      <div className='hidden sm:block ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full'></div>
      </div>
    </div>
  );
};

export default Logo;
