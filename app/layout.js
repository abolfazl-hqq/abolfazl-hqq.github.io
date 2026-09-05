import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovingTechBackground from "@/components/MovingTechBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abolfazl Haghighi | Portfolio",
  description: "A Personal Portfolio of Abolfazl Haghighi, showcasing projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-black">
        <MovingTechBackground />
        <Header />
        <div id="top" className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
