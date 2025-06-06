"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"

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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
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
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2 z-10`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-6 md:top-0 transform md:translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  {item.icon}
                </div>

                <Card className={`${index % 2 === 0 ? "md:mr-6" : "md:ml-6"}`}>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                    <p className="text-foreground/80 mb-1">{item.institution}</p>
                    {item.board && <p className="text-foreground/70 text-sm mb-2">{item.board}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
