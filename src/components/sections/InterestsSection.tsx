"use client";

import { motion } from "framer-motion";
import { Heart, Mountain, Camera, Gamepad2 } from "lucide-react";

const interestsCategories = [
  {
    id: "sports",
    title: "Sports & Adventure",
    icon: Mountain,
    items: ["Cricket", "Badminton", "Football", "Hiking (7+ Mountains)", "Swimming"],
    accent: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    id: "creative",
    title: "Photography & Travel",
    icon: Camera,
    items: ["Photography", "Travel Enthusiast", "Exploring Destinations", "Oceans on Bucket List"],
    accent: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: "hobbies",
    title: "Other Interests",
    icon: Gamepad2,
    items: ["PC & Mobile Gaming", "Motorcycle Enthusiast", "Car Lover", "Enjoying Life"],
    accent: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
];

export default function InterestsSection() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <section
      id="interests"
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="heading-lg text-foreground mb-3">
            Beyond the Code
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Passionate about sports, adventure, and creating meaningful experiences
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {interestsCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card Header */}
                <div className={`flex items-center gap-3 px-5 py-4 ${category.bg}`}>
                  <Icon className={`h-5 w-5 ${category.accent}`} />
                  <h3 className="text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="px-5 py-4 space-y-2.5">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <motion.div className="mt-10 text-center" {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary border border-border rounded-full">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Code by day, adventure by night
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
