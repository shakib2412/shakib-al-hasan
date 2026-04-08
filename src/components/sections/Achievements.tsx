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
  CheckCircle,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

// ── Data ──

const scholarships = [
  {
    title: "Xi'an City \"Belt and Road\" International Students Scholarship — First Prize",
    institution: "Northwestern Polytechnical University",
    period: "Sep 2025 – Mar 2028",
    detail: "Full tuition, accommodation, and 2,000 RMB/month stipend for 12 months.",
  },
  {
    title: "Chinese Government \"Belt and Road\" Scholarship",
    institution: "Sichuan University",
    period: "Sep 2021 – Jul 2025",
    detail: "Full undergraduate tuition and living support.",
  },
];

const activities = [
  { title: "Excellent Performer — Culture Bridge New Year Gala", org: "Northwestern Polytechnical University", period: "Dec 2025", icon: Trophy },
  { title: "Aspire Leaders Program", org: "Harvard / Aspire Institute", period: "Mar 2025", icon: GraduationCap },
  { title: "Captain, Sichuan University Cricket Team", org: "SCU Sports", period: "2023 – 2024", icon: Trophy },
  { title: "BCYSA Campus Ambassador", org: "Bangladesh-China Youth Student Association", period: "Jul 2023 – Aug 2024", icon: Users },
  { title: "English Club — Oral Department Officer", org: "Sichuan University", period: "Sep 2023 – Jun 2024", icon: Megaphone },
  { title: "National Environment Olympiad Participant", org: "University of Dhaka (UNDP supported)", period: "2017", icon: Leaf },
];

const languages = [
  { lang: "English", level: "C1 — Advanced" },
  { lang: "Chinese", level: "B2 — Intermediate" },
  { lang: "German", level: "A1 — Elementary" },
];

const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    org: "DeepLearning.AI & Stanford University",
    period: "Sep – Dec 2024",
    credentialId: "VDXGRPUZ9IR8",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VDXGRPUZ9IR8",
  },
];

// ── Component ──

export default function Achievements() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <section
      id="awards-activities"
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="heading-lg text-foreground mb-3">
            Awards & Activities
          </h2>
        </motion.div>

        {/* ── Scholarships ── */}
        <motion.div className="mb-12" {...fadeUp}>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-5">
            <Award className="h-5 w-5 text-primary" />
            Scholarships
          </h3>
          <div className="space-y-4">
            {scholarships.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-xl p-5 border-l-4 border-l-primary"
              >
                <h4 className="text-base font-semibold text-foreground mb-1">{s.title}</h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-2">
                  <span>{s.institution}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {s.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{s.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Activities ── */}
        <motion.div className="mb-12" {...fadeUp}>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-5">
            <Trophy className="h-5 w-5 text-primary" />
            Extra-Curricular Activities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activities.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                >
                  <Icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground leading-tight">{a.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {a.org} · {a.period}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Languages & Certifications side-by-side ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <motion.div {...fadeUp}>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-5">
              <Globe className="h-5 w-5 text-primary" />
              Languages
            </h3>
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              {languages.map((l) => (
                <div key={l.lang} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{l.lang}</span>
                  <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fadeUp}>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-5">
              <CheckCircle className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            {certifications.map((c) => (
              <div key={c.credentialId} className="bg-card border border-border rounded-xl p-5">
                <p className="text-sm font-semibold text-foreground mb-1">{c.title}</p>
                <p className="text-xs text-muted-foreground mb-3">
                  {c.org} · {c.period}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">{c.credentialId}</span>
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline underline-offset-2"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
