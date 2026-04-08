"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "/resume/resume_shakib.pdf";
      link.download = "resume_shakib.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback: open in new tab
      window.open("/resume/resume_shakib.pdf", "_blank");
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              SHAKIB<span className="text-primary">.</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              { id: "education", label: "Education" },
              { id: "experience", label: "Experience" },
              { id: "publications", label: "Research" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item, i, arr) => (
              <div key={item.id} className="flex items-center gap-6">
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-foreground hover:text-primary transition-colors duration-300 font-semibold"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
                {i < arr.length - 1 && (
                  <span className="text-border text-xs">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Download CV Button */}
            <motion.button
              onClick={handleDownloadCV}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-4 w-4" />
              CV
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // Toggle between themes
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-1">
              {[
                { id: "education", label: "Education" },
                { id: "experience", label: "Experience" },
                { id: "publications", label: "Research" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200 font-medium"
                  whileHover={{ x: 6 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Mobile Download CV Button */}
              <motion.button
                onClick={handleDownloadCV}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
