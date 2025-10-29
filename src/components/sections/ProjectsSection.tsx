"use client";

import { motion } from "framer-motion";
import {
  Github,
  Database,
  TrendingUp,
  Brain,
  Code,
  Gamepad2,
  Box,
} from "lucide-react";
import ProjectSlider from "@/components/ui/ProjectSlider";

const projectsData = [
  {
    id: "suicidal-ideation-detection",
    title: "Transformer-Based Suicidal Ideation Detection",
    period: "Nov 2024 – May 2025",
    category: "NLP, Deep Learning, BERT, Mental Health",
    status: "Completed",
    description:
      "Developed a BERT-based NLP system for suicidal ideation detection on 232k Reddit posts, achieving 97.63% F1-score and outperforming 10 alternative models. This project demonstrates the power of transformer-based architectures in addressing critical mental health challenges through automated social media analysis.",
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Scikit-learn",
      "BERT",
      "NLP",
      "Kaggle",
    ],
    achievements: [
      "Achieved 97.63% F1-score on suicidal ideation detection using BERT-based transformer models on 232k Reddit posts",
      "Outperformed 10 alternative machine learning and deep learning models in comprehensive comparative analysis",
      "Implemented advanced NLP techniques including tokenization, attention mechanisms, and fine-tuning strategies for mental health text classification",
      "Contributed to mental health research by developing automated detection system for early intervention in suicidal behavior",
    ],
    links: {
      github: "https://github.com/shakibalhasan/suicidal-ideation-detection",
    },
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    type: "Bachelor Thesis",
  },
  {
    id: "big-data-recommendation",
    title: "Big Data Analysis and Recommendation System",
    period: "Feb 2024 – Jun 2024",
    category: "Big Data, PySpark, Web Development, ML",
    status: "Completed",
    description:
      "Built a comprehensive web application to analyze Yelp data and provide personalized recommendations. The system leverages big data technologies to process large-scale datasets and generate intelligent recommendations based on user preferences and business analytics.",
    technologies: [
      "PySpark",
      "Python",
      "Apache Zeppelin",
      "HTML/CSS",
      "Linux",
      "Big Data Analytics",
      "Machine Learning",
    ],
    achievements: [
      "Developed end-to-end big data pipeline using PySpark for processing and analyzing large-scale Yelp dataset",
      "Created interactive web application with personalized recommendation engine based on user preferences and behavior patterns",
      "Implemented data visualization dashboards in Apache Zeppelin for real-time business intelligence and analytics",
      "Applied machine learning algorithms for sentiment analysis and collaborative filtering to enhance recommendation accuracy",
    ],
    links: {
      github: "https://github.com/shakib2412/big-data-recommendation",
    },
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    type: "Academic Project",
  },
  {
    id: "student-management-system",
    title: "Student Information Management System",
    period: "Mar 2024 – Jun 2024",
    category: "Database Management, Python, Data Visualization",
    status: "Completed",
    description:
      "Developed a Python-SQLite system to streamline student data management at Sichuan University. The system provides efficient data storage, retrieval, and visualization capabilities for managing student records, grades, and academic information.",
    technologies: [
      "Python",
      "SQLite",
      "Pandas",
      "Matplotlib",
      "Database Design",
    ],
    achievements: [
      "Designed and implemented relational database schema for comprehensive student information management",
      "Built user-friendly Python interface for CRUD operations on student records, courses, and grades",
      "Integrated Pandas for efficient data manipulation and analysis of student performance metrics",
      "Created data visualization dashboards using Matplotlib for academic performance tracking and reporting",
    ],
    links: {
      github: "https://github.com/shakib2412/student-management-system",
    },
    icon: Code,
    color: "from-green-500 to-emerald-600",
    type: "Academic Project",
  },
  {
    id: "soldier-of-fortune",
    title: "Soldier of Fortune: 2D Tactical Shooter Game",
    period: "Sep 2024 – Dec 2024",
    category: "Game Development, AI, Python, Pygame",
    status: "Completed",
    description:
      "Created a tactical 2D shooter game with AI-driven enemies and strategic gameplay. The game features intelligent enemy behavior, multiple weapon systems, and engaging combat mechanics built entirely with Python and Pygame.",
    technologies: ["Python", "Pygame", "Game AI", "Computer Graphics"],
    achievements: [
      "Developed complete 2D game engine with physics simulation, collision detection, and sprite animation systems",
      "Implemented AI-driven enemy behavior using pathfinding algorithms and state machines for tactical gameplay",
      "Designed multiple weapon systems with unique characteristics, damage models, and visual effects",
      "Created engaging level designs with strategic cover points, spawn systems, and difficulty progression",
    ],
    links: {
      github: "https://github.com/shakib2412/soldier-of-fortune",
    },
    icon: Gamepad2,
    color: "from-orange-500 to-red-600",
    type: "Game Development",
  },
  {
    id: "3d-puppet-animation",
    title: "Advanced Interactive 3D Puppet Animation System",
    period: "Sep 2023 – Nov 2023",
    category: "Computer Graphics, OpenGL, 3D Animation, C++",
    status: "Completed",
    description:
      "Developed an interactive 3D puppet with hierarchical modeling and custom animations using OpenGL. The system demonstrates advanced computer graphics techniques including skeletal animation, transformations, and real-time rendering.",
    technologies: ["OpenGL", "C++", "GLUT", "Computer Graphics", "3D Modeling"],
    achievements: [
      "Implemented hierarchical 3D model structure with parent-child joint relationships for realistic puppet movement",
      "Developed custom animation system with keyframe interpolation and skeletal animation techniques",
      "Created interactive controls allowing real-time manipulation of puppet joints and animation playback",
      "Applied advanced OpenGL techniques including lighting, shading, and texture mapping for visual quality",
    ],
    links: {
      github: "https://github.com/shakib2412/3d-puppet-animation",
    },
    icon: Box,
    color: "from-cyan-500 to-blue-600",
    type: "Computer Graphics",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my academic and personal projects spanning NLP, big
            data, game development, and computer graphics
          </p>
        </motion.div>

        {/* Project Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectSlider projects={projectsData} />
        </motion.div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/shakibalhasan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 mx-auto w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
