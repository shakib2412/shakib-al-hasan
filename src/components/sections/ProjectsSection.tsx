"use client";

import { motion } from "framer-motion";
import {
  Github,
  Database,
  Brain,
  Code,
  Gamepad2,
  Box,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import React from "react";

interface ProjectData {
  id: string;
  title: string;
  period: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
  achievements: string[];
  links: { github?: string; demo?: string };
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  type: string;
  highlight?: string;
}

const projectsData: ProjectData[] = [
  {
    id: "suicidal-ideation-detection",
    title: "Transformer-Based Suicidal Ideation Detection",
    period: "Nov 2024 – May 2025",
    category: "NLP, Deep Learning, BERT, Mental Health",
    status: "Completed",
    description:
      "BERT-based NLP system for detecting suicidal ideation on social media, trained on 232k Reddit posts and outperforming 10 alternative models.",
    technologies: ["Python", "PyTorch", "Hugging Face", "Scikit-learn", "Kaggle"],
    achievements: [
      "97.63% F1-score on suicidal ideation detection",
      "Outperformed 10 ML/DL models in comparative analysis",
      "Advanced NLP: tokenization, attention mechanisms, fine-tuning",
      "Automated detection system for early mental health intervention",
    ],
    links: {
      github: "https://github.com/shakib2412/suicidal-ideation-detection-transformers",
    },
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    type: "Bachelor Thesis",
    highlight: "97.63% F1-score",
  },
  {
    id: "big-data-recommendation",
    title: "Big Data Analysis & Recommendation System",
    period: "Feb 2024 – Jun 2024",
    category: "Big Data, PySpark, ML",
    status: "Completed",
    description:
      "End-to-end big data pipeline analyzing Yelp data with personalized recommendations and interactive dashboards.",
    technologies: ["PySpark", "Python", "Apache Zeppelin", "HTML/CSS", "Linux"],
    achievements: [
      "End-to-end big data pipeline using PySpark",
      "Personalized recommendation engine",
      "Interactive dashboards in Apache Zeppelin",
      "ML-based sentiment analysis and collaborative filtering",
    ],
    links: {
      github: "https://github.com/shakib2412/Yelp-Data-Visualization",
    },
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    type: "Academic Project",
  },
  {
    id: "student-management-system",
    title: "Student Information Management System",
    period: "Mar 2024 – Jun 2024",
    category: "Database, Python, Visualization",
    status: "Completed",
    description:
      "Python-SQLite system for student data management with Pandas analysis and Matplotlib dashboards.",
    technologies: ["Python", "SQLite", "Pandas", "Matplotlib"],
    achievements: [
      "Relational database schema for student records",
      "Python CRUD interface for records, courses, grades",
      "Performance tracking dashboards with Matplotlib",
    ],
    links: {
      github: "https://github.com/shakib2412/student-info-system",
    },
    icon: Code,
    color: "from-emerald-500 to-teal-600",
    type: "Academic Project",
  },
  {
    id: "soldier-of-fortune",
    title: "Soldier of Fortune: 2D Tactical Shooter",
    period: "Sep 2024 – Dec 2024",
    category: "Game Dev, AI, Pygame",
    status: "Completed",
    description:
      "Tactical 2D shooter with AI-driven enemies, pathfinding, and multiple weapon systems.",
    technologies: ["Python", "Pygame", "Game AI"],
    achievements: [
      "2D engine with physics, collision detection, sprites",
      "AI enemies using pathfinding and state machines",
      "Multiple weapon systems with unique characteristics",
    ],
    links: {
      github: "https://github.com/shakib2412/Soldier-of-Fortune-Game",
    },
    icon: Gamepad2,
    color: "from-orange-500 to-red-600",
    type: "Game Development",
  },
  {
    id: "3d-puppet-animation",
    title: "Interactive 3D Puppet Animation System",
    period: "Sep 2023 – Nov 2023",
    category: "Computer Graphics, OpenGL, C++",
    status: "Completed",
    description:
      "Interactive 3D puppet with hierarchical joint modeling, keyframe animation, and real-time controls.",
    technologies: ["OpenGL", "C++", "GLUT", "3D Modeling"],
    achievements: [
      "Hierarchical 3D model with parent-child joints",
      "Keyframe interpolation and skeletal animation",
      "Real-time manipulation of joints and playback",
    ],
    links: {
      github: "https://github.com/shakib2412/Interactive-Hierarchical-Modeling---OpenGL-Puppet",
    },
    icon: Box,
    color: "from-cyan-500 to-blue-600",
    type: "Computer Graphics",
  },
];

// --- Subcomponents (defined outside to avoid re-creation) ---

function FeaturedProject({ project }: { project: ProjectData }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="shimmer-card rounded-2xl border border-border overflow-hidden bg-card hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
        <div className="flex flex-col lg:flex-row">
          {/* Gradient visual block */}
          <div
            className={`relative lg:w-2/5 min-h-[200px] lg:min-h-[320px] bg-gradient-to-br ${project.color} flex items-center justify-center p-8`}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              }}
            />
            <Icon className="h-20 w-20 lg:h-28 lg:w-28 text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110" />
            {/* Type badge */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold tracking-wide uppercase">
              {project.type}
            </span>
          </div>

          {/* Content */}
          <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm lg:text-base mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Key metric */}
            {project.highlight && (
              <div className="mb-4 inline-flex items-center gap-2 self-start px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">
                  {project.highlight}
                </span>
                <span className="text-emerald-600/70 dark:text-emerald-400/70 text-xs">
                  — outperformed 10 models
                </span>
              </div>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors group/link"
              >
                <Github className="h-4 w-4" />
                View on GitHub
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="shimmer-card h-full rounded-2xl border border-border overflow-hidden bg-card hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 flex flex-col">
        {/* Gradient header */}
        <div
          className={`relative h-36 bg-gradient-to-br ${project.color} flex items-center justify-center`}
        >
          <Icon className="h-12 w-12 text-white/90 drop-shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
          <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-[11px] font-semibold tracking-wide uppercase">
            {project.type}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          <h3 className="text-base font-bold text-foreground mb-1.5 leading-snug line-clamp-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded-md">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Link */}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors group/link mt-auto"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
              <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --- Main Section ---

export default function ProjectsSection() {
  const featured = projectsData[0];
  const rest = projectsData.slice(1);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-3">Featured Projects</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            From NLP research to game development — selected work across AI,
            big data, and computer graphics
          </p>
        </motion.div>

        {/* Featured project */}
        <div className="mb-8">
          <FeaturedProject project={featured} />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/shakib2412?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <Github className="h-4 w-4" />
            More projects on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
