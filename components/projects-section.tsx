"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js and Stripe integration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Firebase", "CSS Modules"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing my work and skills.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "OpenWeather API", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  const uniqueTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  return (
    <section
      id="projects"
      className="py-20 section-bg relative overflow-hidden"
    >
      <div className="text-center mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-orange-500 animate-pulse">
          🚧 Work on this section is ongoing! 🚧
        </h3>
      </div>
      {/* Animated gradient background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a
            unique challenge and showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            className="mb-2"
          >
            All
          </Button>
          {uniqueTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className="mb-2"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
              }}
            >
              <motion.div
                className="overflow-hidden h-full flex flex-col rounded-2xl backdrop-blur-md bg-card/60 shadow-card border border-border/30 transition-all duration-300 group"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <motion.h3
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-foreground/80 mb-4 flex-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
