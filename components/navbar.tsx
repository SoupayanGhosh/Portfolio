"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">S</span>oupayan
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#education" className="text-foreground/80 hover:text-primary transition-colors">
            Education
          </Link>
          <Link href="#skills" className="text-foreground/80 hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#certifications" className="text-foreground/80 hover:text-primary transition-colors">
            Certifications
          </Link>
          <Link href="#achievements" className="text-foreground/80 hover:text-primary transition-colors">
            Achievements
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              href="#skills"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#certifications"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Certifications
            </Link>
            <Link
              href="#achievements"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Achievements
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
