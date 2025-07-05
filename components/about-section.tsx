"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Car, Gamepad, Palette, Plane, BikeIcon as Bicycle } from "lucide-react"
import { Icon } from "lucide-react"
import { soccerBall } from "@lucide/lab"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      id="about"
      className="py-20 section-bg"
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 section-divider"
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
            <motion.div
              className="relative aspect-square max-w-md mx-auto group"
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.svg
                className="absolute inset-0 z-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'blur(6px)' }}
              >
                <motion.path
                  initial={false}
                  animate={{
                    d: [
                      "M200,60 Q320,100 340,200 Q320,300 200,340 Q80,300 60,200 Q80,100 200,60Z",
                      "M200,70 Q330,120 340,200 Q320,280 200,330 Q80,280 60,200 Q70,120 200,70Z",
                      "M200,60 Q320,100 340,200 Q320,300 200,340 Q80,300 60,200 Q80,100 200,60Z"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  fill="#00bfff33"
                />
              </motion.svg>
              <motion.svg
                className="absolute inset-0 z-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'blur(12px)' }}
              >
                <motion.path
                  initial={false}
                  animate={{
                    d: [
                      "M200,100 Q300,140 320,200 Q300,260 200,300 Q100,260 80,200 Q100,140 200,100Z",
                      "M200,110 Q310,160 320,200 Q300,240 200,290 Q100,240 80,200 Q110,160 200,110Z",
                      "M200,100 Q300,140 320,200 Q300,260 200,300 Q100,260 80,200 Q100,140 200,100Z"
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  fill="#6366f144"
                />
              </motion.svg>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-lg transform rotate-6 z-10"></div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg transform -rotate-2 z-10"></div>
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-lg z-20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/IMG_5276.JPG"
                  alt="Soupayan Ghosh"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-foreground/80 mb-6">
              I'm a Final-year B.Tech student specializing in Computer Science & Engineering at Narula Institute of
              Technology, Kolkata. I'm passionate about DevOps, Cloud Computing, and Frontend Development.
            </p>
            <p className="text-foreground/80 mb-6">
              My technical journey has led me to explore various technologies and frameworks, with a particular focus on
              cloud platforms like AWS and Google Cloud. I enjoy solving complex problems and continuously learning new
              skills.
            </p>

            <h3 className="text-xl font-bold mb-4">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Icon iconNode={soccerBall} className="h-5 w-5 text-primary" />, label: "Football Enthusiast" },
                { icon: <Car className="h-5 w-5 text-primary" />, label: "Driving" },
                { icon: <Plane className="h-5 w-5 text-primary" />, label: "Traveling" },
                { icon: <Bicycle className="h-5 w-5 text-primary" />, label: "Cycling" },
                { icon: <Gamepad className="h-5 w-5 text-primary" />, label: "Gaming" },
                { icon: <Palette className="h-5 w-5 text-primary" />, label: "Figma Design" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 bg-background/60 rounded-lg p-2 group cursor-pointer hover:shadow-lg"
                  whileHover={{ backgroundColor: "#00bfff", x: 8, transition: { delay: 0.03 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ color: "#000" }}
                    transition={{ duration: 0.3 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
