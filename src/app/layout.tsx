import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-tushh-r.vercel.app"),
  title: {
    default: "Tushar Rathore | Full Stack Developer - React, Next.js, Node.js",
    template: "%s | Tushar Rathore",
  },
  description:
    "Tushar Rathore - Full Stack Developer with 2+ years of experience specializing in React.js, Next.js, Node.js, Express.js, and SQL. Building scalable web applications. Based in Udaipur, India.",
  keywords: [
    "Tushar Rathore",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Software Engineer",
    "Web Developer Udaipur",
    "Full Stack Developer India",
    "React Next.js Developer",
    "Express.js Developer",
    "SQL Developer",
    "Webanix Solutions",
  ],
  authors: [
    { name: "Tushar Rathore", url: "https://portfolio-tushh-r.vercel.app" },
  ],
  creator: "Tushar Rathore",
  publisher: "Tushar Rathore",
  alternates: {
    canonical: "https://portfolio-tushh-r.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-tushh-r.vercel.app",
    title: "Tushar Rathore | Full Stack Developer",
    description:
      "Full Stack Developer with 2+ years of experience in React.js, Next.js, Node.js, Express.js, and SQL. Building scalable enterprise applications.",
    siteName: "Tushar Rathore Portfolio",
    images: [
      {
        url: "https://portfolio-tushh-r.vercel.app/pic.webp",
        width: 1200,
        height: 630,
        alt: "Tushar Rathore - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Rathore | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, and SQL. Building scalable web applications.",
    images: ["https://portfolio-tushh-r.vercel.app/pic.webp"],
    creator: "@tushh_codes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "cQoIaYLrC0vsgSSAxCDfAeC8k8AxgOEtmBRo9VkrB60",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className='font-jetbrains 
    '
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
