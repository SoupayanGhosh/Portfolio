"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Server, Languages } from "lucide-react"

type Skill = {
  name: string
}

type SkillCategory = {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [ {name: "Java" },{name: "JavaScript" }, { name: "Python" }, { name: "C/C++" }],
  },
  {
    title: "Cloud & DevOps",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [{ name: "Docker" }, { name: "Google Cloud" }, { name: "Microsoft Azure" }],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [{ name: "MongoDB" }, { name: "SQL" }],
  },
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: [{ name: "HTML" }, { name: "CSS" }, { name: "Figma" }, { name: "Bootstrap" }],
  },
  {
    title: "Languages",
    icon: <Languages className="h-6 w-6 text-primary" />,
    skills: [{ name: "English" }, { name: "Bengali" }, { name: "Hindi" }, { name: "German (Beginner)" }],
  },
   {
    title: "Testing",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: [{ name: "POSTMAN" }],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-20 section-bg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here's an overview of my technical skills and tools that I use in my development workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
            >
              <motion.div
                className="h-full rounded-2xl backdrop-blur-md bg-white/60 dark:bg-background/60 shadow-card border border-white/30 dark:border-border/30 transition-all duration-300 group"
                whileHover={{ y: -6, backgroundColor: '#00bfff', transition: { delay: 0.03 } }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">{category.icon}</div>
                    <h3 className="text-xl font-bold group-hover:text-black transition-colors">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
