"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shakib2412",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shakibalhasan",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:100shakibalhasan@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {new Date().getFullYear()} SHAKIB AL HASAN. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-secondary hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
