"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"
import { Tile } from "@/components/ui/tile"

type Education = {
  degree: string
  institution: string
  board?: string
  year: string
  icon: React.ReactNode
}

const educationData: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Narula Institute of Technology, Kolkata",
    year: "2022 - Present",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    degree: "Senior Secondary",
    institution: "CBSE Board",
    year: "2022",
    icon: <School className="h-6 w-6" />,
  },
  {
    degree: "Secondary",
    institution: "ICSE Board",
    year: "2020",
    icon: <School className="h-6 w-6" />,
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="education" className="py-20 relative overflow-hidden">
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
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line always centered */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-24 md:w-1/2 z-10 ${
                  index % 2 === 0
                    ? 'md:pr-0 md:mr-auto md:text-right'
                    : 'md:pl-0 md:ml-auto md:text-left'
                }`}
              >
                {/* Timeline icon perfectly centered on the blue vertical line */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white z-20"
                  aria-label={`Timeline milestone: ${item.degree}`}
                  role="img"
                  style={{ minWidth: 40 }}
                >
                  {item.icon}
                </div>

                {/* Use Tile for unified card effect, flush with the timeline line */}
                <Tile
                  className={`w-full rounded-2xl backdrop-blur-md bg-white/60 dark:bg-background/60 shadow-xl border border-white/30 dark:border-border/30 transition-all duration-300 group pt-8 ${
                    index % 2 === 0 ? 'md:mr-0 md:ml-auto' : 'md:ml-0 md:mr-auto'
                  }`}
                  style={{ alignItems: "stretch" }}
                >
                  <CardContent className="p-6 w-full pt-4">
                    <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.degree}</h3>
                    <p className="text-foreground/80 mb-1">{item.institution}</p>
                    {item.board && <p className="text-foreground/70 text-sm mb-2">{item.board}</p>}
                  </CardContent>
                </Tile>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
