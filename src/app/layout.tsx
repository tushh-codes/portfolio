
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tushar Rathore",
  description: "Portfolio of Tushar Rathore",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-jetbrains 
    ">
       
        <ThemeProvider
        attribute='class'
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
