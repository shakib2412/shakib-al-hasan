"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Award, Star, FileText, GraduationCap } from "lucide-react";

// ── Data ──

const universityData = [
  {
    id: "npu",
    title: "Northwestern Polytechnical University",
    degree: "Master's in Software Engineering",
    period: "Sep 2025 – Mar 2028",
    location: "Xi'an, China",
    logo: "/images/nwpu-logo.png",
    highlights: [
      "Xi'an City 'Belt and Road' Scholarship — First Prize",
      "Currently enrolled, exploring research opportunities",
    ],
  },
  {
    id: "scu",
    title: "Sichuan University",
    degree: "Bachelor of Engineering in Software Engineering",
    period: "Sep 2021 – June 2025",
    location: "Chengdu, China",
    logo: "/images/scu-logo.png",
    highlights: [
      "CGPA: 3.71 / 4.00 (88%)",
      "Thesis: Transformer-Based Detection of Suicidal Ideation — top score across all evaluations",
      "Chinese Government 'Belt and Road' Scholarship — full tuition & living support",
    ],
  },
];

const earlierEducation = [
  {
    id: "hsc",
    title: "Government Science College",
    type: "Higher Secondary (HSC)",
    period: "2017 – 2019",
    location: "Dhaka, Bangladesh",
    logo: "/images/gsc-logo.png",
    gpa: "5.00 / 5.00",
    note: "Science — A+ in Physics, Chemistry, Higher Math, ICT",
  },
  {
    id: "ssc",
    title: "Police Lines Adarsha High School",
    type: "Secondary (SSC)",
    period: "2015 – 2017",
    location: "Tangail, Bangladesh",
    logo: "/images/plahst-logo.png",
    gpa: "5.00 / 5.00",
    note: "Science — A+ across all subjects",
  },
];

// ── Component ──

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10"
    >
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-3">Education</h2>
        </motion.div>

        {/* ── University cards (prominent) ── */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-8 sm:left-10 top-0 bottom-0 w-px bg-border hidden sm:block"
          />

          <div className="space-y-6">
            {universityData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden
                  className="absolute left-[26px] sm:left-[34px] top-8 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 hidden sm:block"
                />

                <div className="sm:ml-16 bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  {/* Header row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 flex-shrink-0 rounded-full bg-white dark:bg-gray-800 border border-border overflow-hidden shadow-sm">
                      <Image
                        src={edu.logo}
                        alt={`${edu.title} logo`}
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {edu.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mt-0.5">
                        {edu.degree}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pl-1">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        {h.startsWith("CGPA") ? (
                          <Star className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        ) : h.includes("Thesis") ? (
                          <FileText className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <Award className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                        )}
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Earlier education (compact) ── */}
        <motion.div
          className="mt-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 sm:ml-16">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Earlier Education</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:ml-16">
            {earlierEducation.map((edu) => (
              <div
                key={edu.id}
                className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <div className="relative w-10 h-10 flex-shrink-0 rounded-full bg-white dark:bg-gray-800 border border-border overflow-hidden">
                  <Image
                    src={edu.logo}
                    alt={`${edu.title} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-foreground leading-tight">
                    {edu.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {edu.type} · {edu.period}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    <span className="font-semibold text-foreground">{edu.gpa}</span>
                    {" — "}
                    {edu.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
