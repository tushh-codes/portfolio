// src/components/Logo.tsx
import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      {/* Professional Logo Icon */}
      <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-105">
      <span className="text-white font-bold text-lg">TR</span>
      </div>
      
      {/* Professional Text */}
      <div className="hidden sm:block"></div>
      <div className="flex flex-col">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
      Frontend Developer
      </h1>
      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
      Portfolio
      </p>
      </div>
      </div>
  );
};

export default Logo;
