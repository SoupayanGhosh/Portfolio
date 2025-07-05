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
    link: "https://www.coursera.org/account/accomplishments/verify/HZZ8RFU738YY",
    category: "Cloud",
  },
  {
    title: "Responsive Website Development and Design Capstone",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/7BYQ4685BAR3",
    category: "Web Development",
  },
  {
    title: "Object-Oriented Data Structures in C++",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/RZR2KNTFFJXX",
    category: "Programming",
  },
  {
    title: "Introduction to Google Workspace Administration",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/2XZ2STYKH6TE",
    category: "Cloud",
  },
  {
    title: "Reliable Google Cloud Infrastructure: Design and Process",
    issuer: "Google Cloud",
    link: "https://www.coursera.org/account/accomplishments/verify/BAN4GTBC5R5P",
    category: "Cloud",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/LRJL36GSRE6K",
    category: "Security",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/LLV2ZY6AQR6N",
    category: "Security",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/ZD546Z2CAAZ2",
    category: "Networking",
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/LLV2ZY6AQR6N",
    category: "DevOps",
  },
  {
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud",
    link: "https://www.credly.com/badges/b20eb556-6dc5-4292-886b-7729d00cd289",
    category: "Cloud",
  },
  {
    title: "Getting Started with Artificial Intelligence (IBM)",
    issuer: "IBM",
    link: "https://www.credly.com/earner/earned/badge/1bc18bd9-9fd3-4c57-bf75-da131e9d9495",
    category: "AI",
  },
  {
    title: "Soft Computing Techniques ",
    issuer: "IIT KGP",
    link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25MA54S94950081004644953",
    category: "Soft Computing",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/E450MQQU7WTK",
    category: "Data Science",
  },
  {
    title: "Google AI Essentials",
    issuer: "Coursera",
    link: "https://www.credly.com/earner/earned/badge/a6a1d88d-7e8d-46ec-94bb-fd707e02c0e8",
    category: "AI",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Get unique categories
  const categories = Array.from(new Set(certifications.map((cert) => cert.category)))

  return (
    <section id="certifications" className="py-20 section-bg relative overflow-hidden">
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
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
            >
              <motion.div
                className="h-full flex flex-col rounded-2xl backdrop-blur-md bg-white/60 dark:bg-background/60 shadow-card border border-white/30 dark:border-border/30 transition-all duration-300 group"
                whileHover={{ y: -6, backgroundColor: '#00bfff', transition: { delay: 0.03 } }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-2">
                    <Badge variant="secondary">{cert.category}</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-black transition-colors">{cert.title}</h3>
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
              </motion.div>
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
