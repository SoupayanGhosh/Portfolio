"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Car, Gamepad, Palette, ClubIcon as Football, Plane, BikeIcon as Bicycle } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg transform -rotate-2"></div>
              <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
  src="/IMG_5276.JPG"
  alt="Soupayan Ghosh"
  width={600}
  height={600}
  className="object-cover"
/>

              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-foreground/80 mb-6">
              I'm a 3rd-year B.Tech student specializing in Computer Science & Engineering at Narula Institute of
              Technology, Kolkata. I'm passionate about DevOps, Cloud Computing, and Frontend Development.
            </p>
            <p className="text-foreground/80 mb-6">
              My technical journey has led me to explore various technologies and frameworks, with a particular focus on
              cloud platforms like AWS and Google Cloud. I enjoy solving complex problems and continuously learning new
              skills.
            </p>

            <h3 className="text-xl font-bold mb-4">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Football className="h-5 w-5 text-primary" />
                </div>
                <span>Football Enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <span>Driving</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <span>Traveling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bicycle className="h-5 w-5 text-primary" />
                </div>
                <span>Cycling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Gamepad className="h-5 w-5 text-primary" />
                </div>
                <span>Gaming</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <span>Figma Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
