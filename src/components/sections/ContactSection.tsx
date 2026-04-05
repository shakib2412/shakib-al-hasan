"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Copy } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "100shakibalhasan@gmail.com",
    href: "mailto:100shakibalhasan@gmail.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+86 18615745061",
    href: "tel:+8618615745061",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Xi'an, China",
    href: "https://maps.google.com?q=Xi'an,China",
    color: "from-purple-500 to-purple-600",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shakib2412",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shakibalhasan",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/shakib2412/",
    icon: Facebook,
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shaki_b24/",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/HASANALSHAKIB24",
    icon: Twitter,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "100shakibalhasan@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Get in touch</h2>
          <span className="text-muted-foreground">
            Do you have a project in your mind, contact me here
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 flex"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="card-modern p-6 sm:p-8 w-full flex flex-col"
            >
              <h3 className="heading-md text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Find Me
              </h3>

              <div className="flex-1 flex flex-col">
                <div className="space-y-4 sm:space-y-6 flex-1">
                  {contactInfo.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        target={
                          contact.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${contact.color} p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                            {contact.label}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">
                            {contact.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    Connect with me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-lg bg-secondary hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="h-6 w-6" />
                          <span className="sr-only">{social.name}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">
                      Available for opportunities
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open to research opportunities and software engineering
                    roles
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-1 flex"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="card-modern p-6 sm:p-8 w-full flex flex-col"
            >
              <h3 className="heading-md text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                <Send className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                Send me a message
              </h3>

              <div className="flex-1 flex flex-col justify-center space-y-4">
                {/* Email Display */}
                <div className="bg-secondary/50 border border-border rounded-lg p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                    Email me directly at:
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-foreground break-all mb-4">
                    {email}
                  </p>
                  <div className="flex gap-2 flex-col sm:flex-row">
                    <motion.button
                      onClick={handleCopyEmail}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 border border-border rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Copy className="h-4 w-4" />
                      {copied ? "Copied!" : "Copy Email"}
                    </motion.button>
                    <motion.a
                      href={`mailto:${email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="h-4 w-4" />
                      Send Email
                    </motion.a>
                  </div>
                </div>

                {/* Alternative Contact Methods */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Or reach out via:</p>
                  <div className="flex gap-2 flex-wrap">
                    <motion.a
                      href="tel:+8618615745061"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 border border-border rounded-lg text-sm font-medium transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="h-4 w-4" />
                      Call
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/shakibalhasan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 border border-border rounded-lg text-sm font-medium transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </motion.a>
                  </div>
                </div>

                {/* Quick Note */}
                <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-400">
                    💡 <span className="font-medium">Tip:</span> Copy my email or use the direct email link above for the fastest response.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
