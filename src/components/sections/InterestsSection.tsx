"use client";

import { motion } from "framer-motion";
import { Heart, Smile } from "lucide-react";

const interestsCategories = [
  {
    id: "sports",
    title: "🏆 Sports & Adventure",
    items: ["🏏 Cricket", "🏸 Badminton", "⚽ Football", "🏔️ Hiking (7+ Mountains)", "🏊 Swimming"],
    color: "from-orange-500 to-red-600",
  },
  {
    id: "creative",
    title: "📸 Photography & Travel",
    items: ["📷 Photography", "✈️ Travel Enthusiast", "🌍 Exploring Destinations", "🌊 Oceans on Bucket List"],
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "hobbies",
    title: "🎮 Other Interests",
    items: ["🎮 PC & Mobile Gaming", "🏍️ Motorcycle Enthusiast", "🚗 Car Lover", "😄 Enjoying Life"],
    color: "from-blue-500 to-cyan-600",
  },
];

export default function InterestsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4 flex items-center justify-center gap-3">
            <Heart className="h-8 w-8 text-red-500" />
            Interests & Hobbies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m passionate about sports, adventure, and creating meaningful experiences beyond coding
          </p>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {interestsCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>

              {/* Items List */}
              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <span className="text-xl">•</span>
                    <span className="text-base font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Bottom Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-950 dark:to-pink-950 rounded-full border-2 border-yellow-300 dark:border-yellow-700">
            <Smile className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Life is about balance: Code by day, Adventure by night! 🌙
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
