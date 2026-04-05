"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  ExternalLink,
  Users,
  Code,
  Brain,
  Award,
  Eye,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

const publicationsData = [
  {
    id: "ickg-2025",
    title:
      "IRDNet: Invariant and Residual Dynamic Decomposition Neural Network for Time Series Forecasting",
    authors: "Chenyang Li, Xuanzhi Feng, Chao Li, Xuefeng Ding, Yuming Jiang, Shakib Al Hasan",
    conference: "IEEE International Conference on Knowledge Graph (ICKG 2025)",
    location: "Published",
    year: "2025",
    pages: "pp. 203-207",
    status: "Published",
    doi: "10.1109/ICKG66886.2025.00033",
    link: "https://doi.org/10.1109/ICKG66886.2025.00033",
    description:
      "Contributed to a study on IRDNet, a deep learning model for time series forecasting. Assisted with dataset preparation, experimental evaluation, and analysis of forecasting performance across benchmark datasets.",
    abstract:
      "Due to the widespread presence of time series data across various domains, accurate time series forecasting holds significant importance. However, existing complex forecasting models are still affected by issues such as computational efficiency and information bottlenecks. This paper proposes IRDNet, a novel deep learning backbone model that introduces a method for decomposing time series based on frequency domain characteristics. IRDNet utilizes frequency-domain decomposition to separate time series into stationary and residual components, which are then modeled via distinct network paths. Through comprehensive evaluation across six datasets, IRDNet demonstrates superior performance in both accuracy and speed, outperforming state-of-the-art deep learning and statistical methods.",
    technologies: [
      "Time Series Forecasting",
      "Frequency Decomposition",
      "Deep Learning",
      "Neural Networks",
      "Signal Processing",
    ],
    icon: TrendingUp,
  },
  {
    id: "ijitdm-2025",
    title:
      "Balancing Credit Scoring Data: A Minority Random Imputation Approach",
    authors: "Chenyang Li, Shakib Al Hasan, Xuanzhi Feng, Xuefeng Ding",
    conference:
      "International Journal of Information Technology & Decision Making",
    location: "Submitted",
    year: "2025",
    pages: "Full Paper",
    status: "Under Review",
    doi: "Pending",
    description:
      "Co-authored research on handling class imbalance in credit scoring datasets using machine learning techniques. Contributed to data preprocessing, experimental evaluation, and analysis of model performance.",
    abstract:
      "Credit scoring models are essential tools in financial risk assessment, yet they often suffer from severe class imbalance where defaulting cases are significantly underrepresented. This imbalance can lead to biased predictions that favor the majority class, resulting in poor identification of high-risk borrowers. This paper proposes a Minority Random Imputation (MRI) approach that strategically generates synthetic samples for the minority class while preserving the underlying data distribution. Unlike traditional oversampling methods such as SMOTE, our approach incorporates randomization techniques that enhance diversity in generated samples and reduce overfitting risks. Through extensive experiments on real-world credit scoring datasets, we demonstrate that MRI significantly improves classification performance, particularly in minority class recall, while maintaining overall model accuracy. Our results indicate that the proposed method offers a practical and effective solution for handling imbalanced data in credit scoring applications.",
    technologies: [
      "Credit Scoring",
      "Class Imbalance",
      "Data Imputation",
      "Machine Learning",
      "Financial Risk Assessment",
    ],
    icon: BookOpen,
  },
];

export default function PublicationsSection() {
  const [expandedPublication, setExpandedPublication] = useState<string | null>(
    null
  );

  const togglePublication = (id: string) => {
    setExpandedPublication(expandedPublication === id ? null : id);
  };

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
    <section id="publications" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Publications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Research contributions in machine learning, time series forecasting,
            and data science
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {publicationsData.map((publication, index) => {
            const Icon = publication.icon;
            const isExpanded = expandedPublication === publication.id;

            return (
              <motion.div
                key={publication.id}
                className="relative"
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="publication-content">
                    {/* Publication Header */}
                    <div className="mb-6">
                      {/* Status Badge */}
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          <FileText className="h-3 w-3" />
                          {publication.status}
                        </span>
                      </div>

                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 flex items-start gap-3">
                        <Icon className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" />
                        <span>{publication.title}</span>
                      </h2>

                      {/* Authors */}
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {publication.authors}
                        </span>
                      </div>

                      {/* Conference Details */}
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span>{publication.conference}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{publication.year}</span>
                          <span className="text-gray-400">|</span>
                          <span>{publication.location}</span>
                          <span className="text-gray-400">|</span>
                          <span>{publication.pages}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {publication.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {publication.link && (
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Paper
                        </a>
                      )}
                      <button
                        onClick={() => togglePublication(publication.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                      >
                        <Eye className="h-4 w-4" />
                        {isExpanded ? "Hide Details" : "Show Details"}
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* DOI Badge */}
                    {publication.doi && (
                      <div className="mb-6 text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          DOI:{" "}
                        </span>
                        <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-900 dark:text-gray-100 font-mono">
                          {publication.doi}
                        </code>
                      </div>
                    )}

                    {/* Expandable Details */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 dark:border-gray-700 pt-6"
                      >
                        {/* Abstract */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-blue-600" />
                            Abstract
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            {publication.abstract}
                          </p>
                        </div>

                        {/* Research Areas */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <Code className="h-5 w-5 text-blue-600" />
                            Research Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {publication.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
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
