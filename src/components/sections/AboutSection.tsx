"use client";

import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Database,
  Zap,
  Cpu,
  Network,
  Eye,
  Sparkles,
  Cloud,
  Server,
  BarChart3,
  GitBranch,
  Container,
  Users,
  Settings,
  Layers,
  Workflow,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-blue-500 to-blue-600",
    bg: "from-blue-50 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    icon: Code,
    skills: [
      { name: "Python", icon: Code },
      { name: "C/C++ (OOP)", icon: Code },
      { name: "SQL", icon: Database },
      { name: "JavaScript", icon: Code },
      { name: "React-JS", icon: Cpu },
    ],
  },
  {
    title: "AI & Deep Learning",
    color: "from-purple-500 to-purple-600",
    bg: "from-purple-50 to-purple-100/50 dark:from-purple-950/40 dark:to-purple-900/20",
    border: "border-purple-200 dark:border-purple-800",
    icon: Brain,
    skills: [
      { name: "LLMs", icon: Sparkles },
      { name: "PyTorch", icon: Brain },
      { name: "TensorFlow", icon: Network },
      { name: "Keras", icon: Brain },
      { name: "Langchain", icon: Workflow },
      { name: "Scikit-Learn", icon: Brain },
      { name: "OpenCV", icon: Eye },
    ],
  },
  {
    title: "Big Data & Cloud",
    color: "from-cyan-500 to-cyan-600",
    bg: "from-cyan-50 to-cyan-100/50 dark:from-cyan-950/40 dark:to-cyan-900/20",
    border: "border-cyan-200 dark:border-cyan-800",
    icon: Cloud,
    skills: [
      { name: "PySpark", icon: Zap },
      { name: "Hadoop", icon: Database },
      { name: "Apache Airflow", icon: Workflow },
      { name: "Microsoft Azure", icon: Cloud },
      { name: "Microsoft Fabric", icon: Layers },
      { name: "HPC", icon: Server },
    ],
  },
  {
    title: "Databases",
    color: "from-emerald-500 to-emerald-600",
    bg: "from-emerald-50 to-emerald-100/50 dark:from-emerald-950/40 dark:to-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    icon: Database,
    skills: [
      { name: "SQL Server", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Neo4j", icon: Network },
      { name: "GraphDB", icon: Network },
    ],
  },
  {
    title: "Data Analytics & Visualization",
    color: "from-orange-500 to-orange-600",
    bg: "from-orange-50 to-orange-100/50 dark:from-orange-950/40 dark:to-orange-900/20",
    border: "border-orange-200 dark:border-orange-800",
    icon: BarChart3,
    skills: [
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Database },
      { name: "Matplotlib", icon: BarChart3 },
      { name: "Seaborn", icon: BarChart3 },
      { name: "Power BI", icon: BarChart3 },
      { name: "Tableau", icon: BarChart3 },
      { name: "Streamlit", icon: Zap },
      { name: "D3.js", icon: BarChart3 },
    ],
  },
  {
    title: "Tools & Collaboration",
    color: "from-pink-500 to-pink-600",
    bg: "from-pink-50 to-pink-100/50 dark:from-pink-950/40 dark:to-pink-900/20",
    border: "border-pink-200 dark:border-pink-800",
    icon: Settings,
    skills: [
      { name: "Docker", icon: Container },
      { name: "Agile", icon: Users },
      { name: "Scrum", icon: Users },
      { name: "Git", icon: GitBranch },
      { name: "Jira", icon: Settings },
    ],
  },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-gray-900 dark:via-gray-800/80 dark:to-gray-900" />
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with across AI research, data engineering, and software development
          </p>
        </motion.div>

        {/* Skill Category Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className={`shimmer-card h-full rounded-2xl border ${category.border} bg-gradient-to-br ${category.bg} overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  {/* Category header */}
                  <div className={`bg-gradient-to-r ${category.color} px-5 py-4 flex items-center gap-3`}>
                    <div className="p-1.5 bg-white/20 rounded-lg">
                      <CategoryIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                          <motion.span
                            key={skill.name}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-sm transition-all duration-200 cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Icon className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
                            {skill.name}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
