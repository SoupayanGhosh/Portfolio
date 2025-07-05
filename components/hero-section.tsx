"use client"

import { useEffect, useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Phone, Github, Linkedin } from "lucide-react"
import Link from "next/link"

// Custom hook for typewriter effect
function useTypewriter(text: string, speed = 70) {
  const [displayed, setDisplayed] = useState("")
  useEffect(() => {
    let i = 0
    setDisplayed("")
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return displayed
}

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const typewriterText = "Hi, I'm Soupayan Ghosh"
  const typed = useTypewriter(typewriterText, 70)

  // Dynamic scroll effect for arrow
  const { scrollY } = useViewportScroll()
  const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0])
  const arrowScale = useTransform(scrollY, [0, 200], [1, 0.7])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {/* Typewriter effect here */}
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6"
          >
            B.Tech Student in <span className="font-semibold text-primary">Computer Science & Engineering</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto md:mx-0"
          >
            Passionate about DevOps, Cloud Computing, and Frontend Development. Currently studying at Narula Institute
            of Technology, Kolkata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://www.linkedin.com/in/soupayan-ghosh-6234682a1/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <div className="flex items-center gap-2 text-foreground/70">
              <Mail className="h-4 w-4 text-primary" />
              <span>soupayanwork@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91-7439481012</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-4 mt-6 justify-center md:justify-start"
          >
            <a
              href="https://github.com/SoupayanGhosh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/soupayan-ghosh-6234682a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-2 rounded-full hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        style={{ opacity: arrowOpacity, scale: arrowScale }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce rounded-full"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}
