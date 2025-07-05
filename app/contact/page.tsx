// app/contact/page.tsx
// Purpose: Contact Me page with all social links and contact info, now with Facebook and dynamic hover effects

import { Mail, Github, Linkedin, Facebook, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <section className="py-20 min-h-[60vh] flex items-center justify-center">
      <div className="container max-w-xl mx-auto px-4">
        <Card>
          <CardContent className="p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-foreground/80 mb-8">
              I'd love to connect! Reach out via any of the platforms below, or send me an email directly.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a
                href="mailto:soupayanwork@gmail.com"
                className="flex items-center gap-3 text-lg hover:text-primary transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" /> soupayanwork@gmail.com
              </a>
              <a
                href="https://github.com/SoupayanGhosh"
                className="flex items-center gap-3 text-lg hover:text-primary transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" /> github.com/SoupayanGhosh
              </a>
              <a
                href="https://www.linkedin.com/in/soupayan-ghosh-6234682a1/"
                className="flex items-center gap-3 text-lg hover:text-primary transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" /> linkedin.com/in/soupayan-ghosh-6234682a1
              </a>
              <a
                href="https://www.facebook.com/soupayan.ghosh.2025"
                className="flex items-center gap-3 text-lg hover:text-primary transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" /> facebook.com/soupayan.ghosh.2025
              </a>
              <div className="flex items-center gap-3 text-lg text-foreground/80">
                <Phone className="h-5 w-5" /> +91-7439481012
              </div>
              <div className="flex items-center gap-3 text-lg text-foreground/80">
                <MapPin className="h-5 w-5" /> Kolkata, India
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 