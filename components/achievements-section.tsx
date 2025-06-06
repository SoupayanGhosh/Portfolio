"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

type Achievement = {
  title: string
  organization: string
  year: string
  description?: string
}

const achievements: Achievement[] = [
  {
    title: "1st Place",
    organization: "Physics Model Mania, Narula Institute of Technology",
    year: "2023",
    description: "Won first place in the Physics Model Mania competition at Narula Institute of Technology.",
  },
  {
    title: "3rd Rank",
    organization: "Technical Quiz Competition",
    year: "2024",
    description: "Secured 3rd position in the Technical Quiz competition, demonstrating strong technical knowledge.",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2 mb-2">
                        <h3 className="text-xl font-bold">{achievement.title}</h3>
                        <span className="text-primary text-sm font-medium">{achievement.year}</span>
                      </div>
                      <p className="text-foreground/80 mb-2">{achievement.organization}</p>
                      {achievement.description && (
                        <p className="text-foreground/70 text-sm">{achievement.description}</p>
                      )}
                    </div>
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
