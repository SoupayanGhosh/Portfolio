"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="py-20 section-bg relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-background/0 animate-gradient-x blur-2xl"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 section-divider"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, project inquiries, or just to connect!
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
          >
            <motion.div
              className="rounded-2xl backdrop-blur-md bg-white/60 dark:bg-background/60 shadow-card border border-white/30 dark:border-border/30 transition-all duration-300 group"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>soupayanwork@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91-7439481012</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Kolkata, India</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link href="https://github.com/SoupayanGhosh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/soupayan-ghosh-6234682a1/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
