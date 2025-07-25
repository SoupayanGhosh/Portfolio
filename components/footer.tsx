import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-background/0 animate-gradient-x blur-2xl opacity-25"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary">S</span>oupayan
            </Link>
            <p className="text-foreground/70 mt-2 max-w-md">
              Computer Science & Engineering student passionate about DevOps, Cloud Computing, and Frontend Development.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/SoupayanGhosh"
              className="bg-background/60 backdrop-blur-md p-3 rounded-full hover:text-primary transition-colors shadow-lg border border-white/30 dark:border-border/30 hover:scale-110 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/soupayan-ghosh-6234682a1/"
              className="bg-background/60 backdrop-blur-md p-3 rounded-full hover:text-primary transition-colors shadow-lg border border-white/30 dark:border-border/30 hover:scale-110 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:soupayanwork@gmail.com"
              className="bg-background/60 backdrop-blur-md p-3 rounded-full hover:text-primary transition-colors shadow-lg border border-white/30 dark:border-border/30 hover:scale-110 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-transform duration-200"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/70">
          <p>© {new Date().getFullYear()} Soupayan Ghosh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
