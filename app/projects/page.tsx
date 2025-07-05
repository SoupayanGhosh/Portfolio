// app/projects/page.tsx
// Purpose: Dedicated Projects page rendering the ProjectsSection

import { ProjectsSection } from "@/components/projects-section"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto mb-12">
          Explore my portfolio of projects, each showcasing unique skills, technologies, and creative solutions.
        </p>
      </div>
      <ProjectsSection />
    </main>
  )
} 