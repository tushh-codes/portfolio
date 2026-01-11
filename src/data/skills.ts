// src/data/skills.ts
import skillImages from "./images";

export const skillTabs = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Databases",
  "Tools",
];

export const allSkills = [
  // Languages
  { name: "TypeScript", img: skillImages.TypeScript, category: "Languages" },
  { name: "JavaScript", img: skillImages.JavaScript, category: "Languages" },
  { name: "HTML", img: skillImages.HTML, category: "Languages" },
  { name: "CSS", img: skillImages.CSS, category: "Languages" },

  // Frontend Frameworks/Tools
  { name: "React", img: skillImages.React, category: "Frontend" },
  { name: "Next.js", img: skillImages.Nextjs, category: "Frontend" },
  { name: "Tailwind CSS", img: skillImages["Tailwind"], category: "Frontend" },
  { name: "Redux", img: skillImages.React, category: "Frontend" },
  { name: "React Query", img: skillImages.React, category: "Frontend" },
  { name: "Ant Design", img: skillImages.React, category: "Frontend" },
  { name: "Bootstrap", img: skillImages.Bootstrap, category: "Frontend" },

  // Backend
  { name: "Node.js", img: skillImages.JavaScript, category: "Backend" },
  { name: "Express.js", img: skillImages.JavaScript, category: "Backend" },

  // Full Stack

  // Databases
  { name: "MongoDB", img: skillImages.MongoDB, category: "Databases" },
  { name: "MySQL", img: skillImages.MySQL, category: "Databases" },

  // Tools
  { name: "Git", img: skillImages.Git, category: "Tools" },
  { name: "GitHub", img: skillImages.GitHub, category: "Tools" },
  { name: "Postman", img: skillImages.Postman, category: "Tools" },
  { name: "VSCode", img: skillImages.VSCode, category: "Tools" },
  { name: "Vercel", img: skillImages.Vercel, category: "Tools" },
];
