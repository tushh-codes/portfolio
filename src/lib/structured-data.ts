// JSON-LD Structured Data for SEO
export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tushar Rathore",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer with 2 years of experience specializing in building scalable web applications using React.js, Next.js, Node.js, Express.js, and SQL.",
  url: "https://portfolio-tushh-r.vercel.app/",
  image: "https://portfolio-tushh-r.vercel.app/pic.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Udaipur",
    addressRegion: "Rajasthan",
    addressCountry: "India",
  },
  email: "tushar2643@gmail.com",
  sameAs: [
    "https://github.com/tushh-codes",
    "https://www.linkedin.com/in/tushar1201/",
    "https://leetcode.com/tushh_r/",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Bikaner Technical University",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "SQL",
    "MySQL",
    "MongoDB",
    "Full Stack Development",
    "Web Development",
    "REST API",
    "Tailwind CSS",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Webanix Solutions",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "India",
    },
  },
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tushar Rathore Portfolio",
  url: "https://portfolio-tushh-r.vercel.app/",
  description: "Portfolio of Tushar Rathore - Full Stack Developer",
  author: {
    "@type": "Person",
    name: "Tushar Rathore",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://portfolio-tushh-r.vercel.app/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const profilePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2023-01-01T00:00:00+05:30",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@type": "Person",
    name: "Tushar Rathore",
    alternateName: "Tushar",
    description:
      "Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, and SQL",
    image: "https://portfolio-tushh-r.vercel.app/pic.webp",
  },
};
