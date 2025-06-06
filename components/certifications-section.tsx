"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

type Certification = {
  title: string
  issuer: string
  link: string
  category: string
}

const certifications: Certification[] = [
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    link: "#",
    category: "Cloud",
  },
  {
    title: "Responsive Website Development and Design Capstone",
    issuer: "Coursera",
    link: "#",
    category: "Web Development",
  },
  {
    title: "Object-Oriented Data Structures in C++",
    issuer: "Coursera",
    link: "#",
    category: "Programming",
  },
  {
    title: "Introduction to Google Workspace Administration",
    issuer: "Google",
    link: "#",
    category: "Cloud",
  },
  {
    title: "Reliable Google Cloud Infrastructure: Design and Process",
    issuer: "Google Cloud",
    link: "#",
    category: "Cloud",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    link: "#",
    category: "Security",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    link: "#",
    category: "Security",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google",
    link: "#",
    category: "Security",
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google",
    link: "#",
    category: "DevOps",
  },
  {
    title: "Google Cloud Platform",
    issuer: "Google",
    link: "#",
    category: "Cloud",
  },
  {
    title: "Getting Started with Artificial Intelligence (IBM)",
    issuer: "IBM",
    link: "#",
    category: "AI",
  },
  {
    title: "Soft Computing Techniques ",
    issuer: "IIT KGP",
    link: "#",
    category: "Soft Computing",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Get unique categories
  const categories = Array.from(new Set(certifications.map((cert) => cert.category)))

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I've earned various certifications to enhance my skills and knowledge in different areas of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-2">
                    <Badge variant="secondary">{cert.category}</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-1">Issued by {cert.issuer}</p>
                  <Button variant="outline" size="sm" asChild className="mt-auto w-full">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="gap-2">
            <a href="https://www.credly.com/users/soupayan-ghosh.627c0790" target="_blank" rel="noopener noreferrer">
              <Award className="h-4 w-4" />
              View My Credly Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
