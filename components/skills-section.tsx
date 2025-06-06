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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
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
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-full">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="px-3 py-1 text-sm">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
