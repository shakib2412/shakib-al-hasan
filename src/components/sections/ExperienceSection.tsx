"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Brain,
  Database,
  Microscope,
  Briefcase,
} from "lucide-react";

const experienceData = [
  {
    id: "scu_research",
    type: "research" as const,
    company: "Computer Information Integration and Systems Laboratory",
    position: "University Research Support Worker",
    institution: "Sichuan University",
    period: "Sep 2024 – Sep 2025",
    location: "Chengdu, China",
    icon: Brain,
    focus: "Deep Learning, Sentiment Analysis, Social Media Analytics",
    bullets: [
      "Advanced sentiment analysis using deep learning across diverse social media datasets",
      "Independent data analysis and model evaluation for sentiment classification",
      "Supported innovative AI solutions that advanced ongoing research projects",
    ],
    tech: ["Python", "PyTorch", "NLP", "Deep Learning", "Linux", "Git"],
  },
  {
    id: "suncape",
    type: "industry" as const,
    company: "Chengdu Suncaper Data Co., Ltd.",
    position: "Data Engineer Intern",
    period: "Mar 2024 – Jul 2024",
    location: "Chengdu, China",
    icon: Database,
    focus: "Big Data Analytics, Machine Learning, Business Intelligence",
    bullets: [
      "Comprehensive data analysis on Yelp dataset using PySpark — business trends, customer behavior, sentiment",
      "Interactive visualizations in Apache Zeppelin for business performance monitoring",
      "Dynamic web application integrating personalized recommendations and sentiment analysis",
    ],
    tech: ["Python", "PySpark", "Apache Zeppelin", "SQL", "Hadoop", "Git"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-3">Experience</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Research and industry experience in deep learning, NLP, and big data
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experienceData.map((exp, index) => {
            const Icon = exp.icon;
            const isResearch = exp.type === "research";

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-2.5 rounded-lg ${isResearch ? "bg-purple-100 dark:bg-purple-900/30" : "bg-blue-100 dark:bg-blue-900/30"}`}>
                      <Icon className={`h-5 w-5 ${isResearch ? "text-purple-600 dark:text-purple-400" : "text-blue-600 dark:text-blue-400"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wide ${
                          isResearch
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                        }`}>
                          {isResearch ? <Microscope className="h-3 w-3" /> : <Briefcase className="h-3 w-3" />}
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground mt-0.5">
                        {exp.company}
                        {exp.institution && <span> · {exp.institution}</span>}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Focus area */}
                  <p className="text-sm text-muted-foreground mb-3 pl-1">
                    <span className="font-medium text-foreground">Focus:</span> {exp.focus}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
