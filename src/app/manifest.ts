import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tushar Rathore - Full Stack Developer Portfolio",
    short_name: "Tushar Rathore",
    description:
      "Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, and SQL. Building scalable web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
