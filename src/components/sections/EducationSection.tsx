"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Award, Star, FileText } from "lucide-react";

const educationData = [
    {
    id: "scu",
    title: "Sichuan University",
    period: "Sep 2021 – June 2025",
    location: "Chengdu, China",
    type: "Bachelor's Degree",
    logo: "/images/scu-logo.png",
    achievements: [
      { icon: Star, text: "CGPA: 3.71/4.00 (88%)" },
      {
        icon: FileText,
        text: "Thesis: Transformer-Based Approaches for Automated Detection of Suicidal Ideation on Social Media",
      },
      {
        icon: Award,
        text: "Achievement: Top overall thesis score across supervisor, blind review, and defense evaluations",
      },
      {
        icon: Award,
        text: "Chinese Government 'Belt and Road' Scholarship - Full undergraduate tuition and living support",
      },
    ],
  },
  {
    id: "hsc",
    title: "Government Science College",
    period: "2017 – 2019",
    location: "Dhaka, Bangladesh",
    type: "Higher Secondary Certificate (HSC)",
    logo: "/images/gsc-logo.png",
    achievements: [
      { icon: Star, text: "GPA: 5.00/5.00" },
      {
        icon: Award,
        text: "Group: Science",
      },
      {
        icon: FileText,
        text: "Roll No: 13 18 91 | Registration: 1410680397/2017-18",
      },
      {
        icon: Award,
        text: "Outstanding grades in Physics (A+), Chemistry (A+), Higher Mathematics (A+), and ICT (A+)",
      },
    ],
  },
  {
    id: "ssc",
    title: "Police Lines Adarsha High School",
    period: "2015 – 2017",
    location: "Tangail, Bangladesh",
    type: "Secondary School Certificate (SSC)",
    logo: "/images/plahst-logo.png",
    achievements: [
      { icon: Star, text: "GPA: 5.00/5.00" },
      {
        icon: Award,
        text: "Group: Science",
      },
      {
        icon: FileText,
        text: "Roll No: 14 95 56 | Registration: 1410680397/2015",
      },
      {
        icon: Award,
        text: "Excellent performance in Science subjects with A+ grades",
      },
    ],
  },
  

];

export default function EducationSection() {
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
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Education</h2>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              className="relative"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card-modern p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col gap-6">
                  {/* Header Section */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={education.logo}
                        alt={`${education.title} logo`}
                        fill
                        className="object-contain rounded-full bg-white p-2 shadow-sm"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-semibold text-foreground leading-tight mb-2 flex items-center gap-3">
                        <Award className="h-7 w-7 text-primary" />
                        {education.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{education.period}</span>
                        </div>
                        {education.location && (
                          <>
                            <span className="text-muted-foreground">|</span>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{education.location}</span>
                            </div>
                          </>
                        )}
                      </div>
                      {/* Degree/Certification title */}
                      {education.type && (
                        <em className="text-muted-foreground text-sm block mt-2">
                          {education.type}
                        </em>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4">
                    {/* Achievements */}
                    <div className="pl-2">
                      <div className="space-y-4 mt-2">
                        {education.achievements &&
                          education.achievements.map(
                            (achievement, achIndex) => (
                              <motion.div
                                key={achievement.text}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * achIndex }}
                                viewport={{ once: true }}
                              >
                                <achievement.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-base">
                                  {achievement.text}
                                </span>
                              </motion.div>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}