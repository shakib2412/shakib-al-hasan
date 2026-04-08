"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import { useEffect, useRef, useState } from "react";

// ── Floating particles (fixed positions to avoid hydration mismatch) ──
const particles = [
  { id: 0, x: 8,  y: 18, size: 3, dur: 9,  delay: 0   },
  { id: 1, x: 92, y: 12, size: 2, dur: 11, delay: 1.5 },
  { id: 2, x: 75, y: 68, size: 4, dur: 8,  delay: 3   },
  { id: 3, x: 18, y: 75, size: 2, dur: 13, delay: 0.5 },
  { id: 4, x: 55, y: 88, size: 3, dur: 10, delay: 2   },
  { id: 5, x: 40, y: 10, size: 2, dur: 12, delay: 4   },
  { id: 6, x: 88, y: 45, size: 3, dur: 9,  delay: 1   },
  { id: 7, x: 25, y: 40, size: 2, dur: 14, delay: 3.5 },
  { id: 8, x: 65, y: 30, size: 3, dur: 11, delay: 2.5 },
  { id: 9, x: 48, y: 55, size: 2, dur: 10, delay: 0.8 },
];

// ── Animated stat counter ──
interface StatDef {
  target: number;
  decimals: number;
  suffix: string;
  label: string;
}

const statDefs: StatDef[] = [
  { target: 1,    decimals: 0, suffix: "",  label: "IEEE Paper"   },
  { target: 5,    decimals: 0, suffix: "+", label: "Projects"     },
  { target: 3.71, decimals: 2, suffix: "",  label: "CGPA"         },
  { target: 2,    decimals: 0, suffix: "",  label: "Scholarships" },
];

function StatCounter({ target, decimals, suffix, label }: StatDef) {
  const [display, setDisplay] = useState("0");
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = Math.min(now - start, duration);
            const progress = elapsed / duration;
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            setDisplay(value.toFixed(decimals));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, animated]);

  return (
    <div
      ref={ref}
      className="text-center p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tabular-nums">
        {display}{suffix}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
        {label}
      </div>
    </div>
  );
}

// ── Main component ──

export default function HeroSection() {
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
      window.open("/resume/resume_shakib.pdf", "_blank");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Static gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Animated floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-400/10 dark:bg-pink-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 35, 0], y: [0, -35, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-500/30 dark:bg-blue-400/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -18, 0, 12, 0],
              x: [0, 8, -6, 4, 0],
              opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
              scale: [1, 1.4, 1, 1.2, 1],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto mt-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            className="text-center lg:text-left pt-16 lg:pt-20 lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-full text-green-700 dark:text-green-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  SHAKIB AL HASAN
                </span>{" "}
                👋
              </h1>
            </motion.div>

            {/* Typed specialization */}
            <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
              <div className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-2 flex-wrap">
                <span>Specializing in</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 min-w-[220px] text-left">
                  <ReactTyped
                    strings={[
                      "Natural Language Processing",
                      "Deep Learning",
                      "Transformer Models",
                      "AI Research",
                      "Big Data Analytics",
                    ]}
                    typeSpeed={55}
                    backSpeed={35}
                    loop
                  />
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                MS student at Northwestern Polytechnical University, Xi&apos;an. Graduated from Sichuan University with a BE in Software Engineering (CGPA 3.71). Published IEEE researcher focused on intelligent systems and social media AI.
              </p>
            </motion.div>

            {/* Stats row — animated counters */}
            <motion.div variants={itemVariants} className="grid grid-cols-4 gap-3 mb-8 max-w-xl mx-auto lg:mx-0">
              {statDefs.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2.5 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </motion.button>

              <motion.button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2.5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
                Let&apos;s Connect
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-3">
              {[
                { href: "https://github.com/shakib2412", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/shakibalhasan", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:100shakibalhasan@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-100 dark:border-gray-700"
                  whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative lg:col-span-4"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Rotating dashed ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-lg border-2 border-dashed border-blue-300/40 dark:border-blue-500/20" />
            </motion.div>

            {/* Glow behind image */}
            <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur-3xl" />

            {/* Profile image */}
            <div className="relative z-10">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/30 hover:border-blue-300 dark:hover:border-blue-600">
                <Image
                  src="/images/profile_picture.jpeg"
                  alt="Shakib Al Hasan - AI & Data Science"
                  fill
                  priority
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover object-top transition-transform duration-500 hover:scale-110"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-blue-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
