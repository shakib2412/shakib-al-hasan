"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building,
  Brain,
  TestTube,
  Database,
  ExternalLink,
  Code,
  Users,
  Server,
  Cpu,
  Network,
  Zap,
  Cloud,
  GitBranch,
  Bot,
  BookOpen,
  CheckCircle,
  Cog,
  TrendingUp,
  Github,
  Microscope,
  Workflow,
  GraduationCap,
  Briefcase,
  Target,
  Shield,
} from "lucide-react";

const experienceData = [
  {
    id: "scu_research",
    company: "Computer Information Integration and Systems Laboratory",
    position: "University Research Support Worker",
    period: "Sep 2024 – Sep 2025",
    location: "Chengdu, China",
    institution: "Sichuan University",
    icon: Brain,
    researchArea:
      "Deep Learning, Sentiment Analysis, and Social Media Analytics",
    researchProblem:
      "Analyzing sentiment patterns across diverse social media datasets requires advanced deep learning models capable of understanding nuanced emotional expressions and contextual meanings in user-generated content.",
    researchSolution:
      "Contributed to advanced deep learning research focusing on sentiment analysis across diverse social media datasets, performing independent data analysis and model evaluation to support the development of innovative AI solutions.",
    achievements: [
      {
        icon: Target,
        text: "Research Focus: Advanced sentiment analysis using deep learning across diverse social media datasets",
      },
      {
        icon: Brain,
        text: "Model Development: Performed independent data analysis and model evaluation for sentiment classification",
      },
      {
        icon: TrendingUp,
        text: "Impact: Supported the development of innovative AI solutions that advanced ongoing research projects",
      },
      {
        icon: Code,
        text: "Technologies: Python, PyTorch, NLP, Deep Learning, Linux, Git, Data Analysis",
      },
    ],
  },
  {
    id: "suncape",
    company: "Chengdu Suncaper Data Co., Ltd.",
    position: "Data Engineer Intern",
    period: "Mar 2024 – Jul 2024",
    location: "Chengdu, China",
    icon: Database,
    researchArea:
      "Big Data Analytics, Machine Learning, and Business Intelligence",
    researchProblem:
      "Extracting actionable insights from large-scale datasets like Yelp requires efficient data processing, sentiment analysis, and personalized recommendation systems to support data-driven business decisions.",
    researchSolution:
      "Developed a comprehensive big data solution using PySpark and Python for data analysis, created interactive visualizations in Apache Zeppelin, and designed a dynamic web application integrating personalized recommendations and sentiment analysis.",
    achievements: [
      {
        icon: Database,
        text: "Data Analysis: Conducted comprehensive data analysis on Yelp dataset using PySpark and Python, extracting actionable insights on business trends, customer behavior, and sentiment patterns",
      },
      {
        icon: TrendingUp,
        text: "Visualization: Developed interactive visualizations in Apache Zeppelin to monitor business performance and support data-driven decision-making",
      },
      {
        icon: Workflow,
        text: "Web Application: Designed and implemented a dynamic web application integrating personalized recommendations, sentiment analysis, and business intelligence using big data and machine learning technologies",
      },
      {
        icon: Code,
        text: "Technologies: Python, PySpark, Apache Zeppelin, SQL, JIRA, Hadoop, Linux, Git, Big Data, Data Visualization",
      },
    ],
  },
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">
            Research & Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My experience focuses on deep learning research and big data
            analytics, from sentiment analysis to personalized recommendation
            systems
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={experience.id}
                className="relative"
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="experience-item">
                    <div className="experience-header">
                      <div className="experience-title">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                          <Icon className="h-7 w-7 text-blue-600" />
                          {experience.company}
                        </h2>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                          {experience.id === "suncape" ? (
                            <Briefcase className="h-5 w-5 text-green-500" />
                          ) : (
                            <Microscope className="h-5 w-5 text-green-500" />
                          )}
                          {experience.position}
                        </h3>

                        {/* Research/Industry Label */}
                        <div className="mb-3">
                          <span
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                              experience.id === "suncape"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                            }`}
                          >
                            {experience.id === "suncape" ? (
                              <>
                                <Briefcase className="h-3 w-3" />
                                Industry
                              </>
                            ) : (
                              <>
                                <Microscope className="h-3 w-3" />
                                Research
                              </>
                            )}
                          </span>
                        </div>

                        <div className="experience-details flex flex-wrap items-center gap-2 text-sm text-gray-900 dark:text-white mb-5">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-900 dark:text-white" />
                            {experience.period}
                          </span>
                          <span className="text-gray-400">|</span>
                          {experience.institution && (
                            <>
                              <span className="flex items-center gap-2">
                                <GraduationCap className="h-4 w-4 text-gray-900 dark:text-white" />
                                {experience.institution}
                              </span>
                              <span className="text-gray-400">|</span>
                            </>
                          )}
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-900 dark:text-white" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Research Focus Section */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        Focus Area: {experience.researchArea}
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              Challenge:{" "}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {experience.researchProblem}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              Contribution:{" "}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {experience.researchSolution}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-3">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => {
                          const AchievementIcon = achievement.icon;
                          return (
                            <li
                              key={achievementIndex}
                              className="relative pl-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                            >
                              <AchievementIcon className="absolute left-0 top-1 h-4 w-4 text-green-500" />
                              {achievement.text}
                            </li>
                          );
                        }
                      )}
                    </ul>

                    {/* Project Link Button if needed */}
                    {/* {experience.link && (
                      <div className="project-buttons mt-6">
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <Github className="h-4 w-4" />
                          View Project
                        </a>
                      </div>
                    )} */}
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
