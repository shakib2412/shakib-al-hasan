"use client";

import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Brain,
  Network,
  Database,
  Zap,
  Eye,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume/SHAKIB_RESUME.pdf";
    link.download = "SHAKIB_RESUME.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const profileVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 30,
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    floatReverse: {
      y: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: 3,
      },
    },
  };

  const researchInterests = [
    {
      icon: Sparkles,
      text: "NLP & Transformers",
      color: "from-purple-500 to-pink-500",
    },
    { icon: Brain, text: "Deep Learning", color: "from-blue-500 to-cyan-500" },
    {
      icon: Database,
      text: "Big Data Analytics",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left pt-16 lg:pt-20 lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Bio Content */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    SHAKIB AL HASAN
                  </span>{" "}
                  👋
                </h1>

                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    I specialize in{" "}
                    <span className="font-semibold text-blue-600">
                      Natural Language Processing
                    </span>
                    ,{" "}
                    <span className="font-semibold text-purple-600">
                      Deep Learning
                    </span>
                    , and{" "}
                    <span className="font-semibold text-pink-600">
                      Transformer-Based Models
                    </span>
                    , with hands-on experience building intelligent systems for
                    social media analytics and big data applications.
                  </p>

                  <p>
                   
                    I completed my Bachelor of Engineering in Software
                    Engineering from Sichuan University, Chengdu, where I
                    achieved a CGPA of 3.71/4.00 (88%) and earned the top
                    overall thesis score for my work on Transformer-Based
                    Suicidal Ideation Detection.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Research Interests and Hobbies */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    Research Interests
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Natural Language Processing, Deep Learning,
                    Transformer-Based Models, Knowledge Graphs, Intelligent
                    Systems
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-500" />
                    Notable Achievement
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed a BERT-based NLP system achieving 97.63% F1-score
                    for suicidal ideation detection, with publications under
                    review in SIGKDD 2026 and IJITDM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download CV
                <span className="text-sm opacity-80">(PDF)</span>
              </motion.button>

              <motion.button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
                Let's Connect
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-8">
              <div className="flex justify-center lg:justify-start gap-4">
                <motion.a
                  href="https://github.com/shakib2412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shakibalhasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -3, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:100shakibalhasan@gmail.com"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Static Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative lg:col-span-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Static Background Elements */}
            <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur-3xl" />

            {/* Profile Image Container */}
            <div className="relative z-10">
              {/* Profile Image - Square */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-300 dark:hover:border-blue-600">
                <img
                  src="/images/profile_picture.jpeg"
                  alt="Shakib Al Hasan - AI Researcher & Data Scientist"
                  className="w-full h-full object-cover object-bottom transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
