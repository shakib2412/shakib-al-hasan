"use client";

import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  Users,
  Globe,
  Megaphone,
  Leaf,
  Calendar,
  MapPin,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const awardsData = [
  {
    id: "xian-scholarship",
    title: "Xi'an City \"Belt and Road\" International Students Scholarship – First Prize",
    period: "Sep 2025 – Mar 2028",
    institution: "Northwestern Polytechnical University",
    description:
      "Full tuition, accommodation, and 2000 RMB/month stipend for 12 months.",
    icon: Award,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "chinese-govt-scholarship",
    title: "Chinese Government \"Belt and Road\" Scholarship",
    period: "Sep 2021 – Jul 2025",
    institution: "Sichuan University",
    description: "Full undergraduate tuition and living support.",
    icon: Award,
    color: "from-red-500 to-rose-600",
  },
];

const activitiesData = [
  {
    id: "aspire-leaders",
    title: "Aspire Leaders Program",
    organization: "Harvard/Aspire Institute",
    period: "Mar 2025",
    description:
      "Completed a leadership program on self-confidence, critical thinking, and global social impact.",
    icon: Globe,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "cricket-captain",
    title: "Captain, Sichuan University Cricket Team",
    organization: "Sichuan University Sports",
    period: "2023 – 2024",
    description:
      "Led the university cricket team, fostering teamwork, discipline, and competitive success.",
    icon: Trophy,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "bcysa-ambassador",
    title: "Bangladesh-China Youth Student Association (BCYSA) Campus Ambassador",
    organization: "BCYSA",
    period: "Jul 2023 – Aug 2024",
    description:
      "Promoted Bangladesh-China cultural exchange and organized campus initiatives as a student leader.",
    icon: Users,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "english-club",
    title: "SCU English Club – Oral Department Officer",
    organization: "Sichuan University English Club",
    period: "Sep 2023 – Jun 2024",
    description:
      "Coordinated English speaking activities, enhancing student communication and engagement.",
    icon: Megaphone,
    color: "from-orange-500 to-red-600",
  },
  {
    id: "environment-olympiad",
    title: "National Environment Olympiad Participant",
    organization: "University of Dhaka (UNDP supported)",
    period: "2017",
    description:
      "Participated in art and poster competitions promoting environmental awareness.",
    icon: Leaf,
    color: "from-green-400 to-lime-600",
  },
];

const languagesData = [
  {
    id: "english",
    language: "English",
    proficiency: "C1",
    level: "Advanced Proficiency",
    percentage: 95,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "chinese",
    language: "Chinese",
    proficiency: "B2",
    level: "Intermediate Proficiency",
    percentage: 75,
    color: "from-red-500 to-red-600",
  },
  {
    id: "german",
    language: "German",
    proficiency: "A1",
    level: "Elementary Proficiency",
    percentage: 40,
    color: "from-amber-500 to-amber-600",
  },
];

const certificationsData = [
  {
    id: "supervised-ml",
    title: "Supervised Machine Learning: Regression and Classification",
    organization: "DeepLearning.AI & Stanford University",
    period: "Sep 2024 – Dec 2024",
    description:
      "Built Python-based machine learning models focusing on linear and logistic regression for prediction and classification.",
    credentialId: "VDXGRPUZ9IR8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/VDXGRPUZ9IR8",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-600",
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="awards-activities" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">
            Awards, Activities & Achievements
          </h2>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Awards & Scholarships Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3
              className="text-2xl font-semibold text-foreground mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Award className="inline-block h-6 w-6 text-primary mr-3" />
              Awards & Scholarships
            </motion.h3>

            {awardsData.map((award, index) => (
              <motion.div
                key={award.id}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-modern p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 p-4 rounded-lg bg-gradient-to-br ${award.color}`}
                    >
                      <award.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        {award.title}
                      </h4>
                      <div className="flex flex-wrap gap-6 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{award.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{award.institution}</span>
                        </div>
                      </div>
                      <p className="text-base text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Extra-Curricular Activities Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3
              className="text-2xl font-semibold text-foreground mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Trophy className="inline-block h-6 w-6 text-primary mr-3" />
              Extra-Curricular Activities
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {activitiesData.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="card-modern p-6 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${activity.color}`}
                      >
                        <activity.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-foreground">
                          {activity.title}
                        </h4>
                        <p className="text-xs text-primary font-medium">
                          {activity.organization}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{activity.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3
              className="text-2xl font-semibold text-foreground mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Globe className="inline-block h-6 w-6 text-primary mr-3" />
              Languages
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {languagesData.map((lang, index) => (
                <motion.div
                  key={lang.id}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="card-modern p-6 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${lang.color}`}
                      >
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {lang.language}
                        </h4>
                        <p className="text-xs text-primary font-medium">
                          {lang.proficiency}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      {lang.level}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground font-medium">
                          Proficiency
                        </span>
                        <span className="text-xs font-semibold text-foreground">
                          {lang.percentage}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Licenses & Certifications Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3
              className="text-2xl font-semibold text-foreground mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="inline-block h-6 w-6 text-primary mr-3" />
              Licenses & Certifications
            </motion.h3>

            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-modern p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                      className={`flex-shrink-0 p-4 rounded-lg bg-gradient-to-br ${cert.color} h-fit`}
                    >
                      <cert.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {cert.title}
                      </h4>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span>{cert.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{cert.period}</span>
                        </div>
                      </div>
                      <p className="text-base text-muted-foreground mb-6">
                        {cert.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-border">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            Credential ID
                          </p>
                          <p className="font-mono text-sm font-medium text-foreground">
                            {cert.credentialId}
                          </p>
                        </div>
                        <motion.a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity w-fit"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Credential
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}