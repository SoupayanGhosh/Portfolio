"use client"
import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Analytics } from "@vercel/analytics/next"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Preloader state
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="section-bg text-foreground font-sans text-base">
        {/* Main layout uses section-bg for background and consistent font size */}
        {isLoading && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500">
            <svg className="animate-spin h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Loading">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={typeof window !== 'undefined' ? window.location.pathname : ''}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
        <Analytics />
        {/* Optionally, add a section-divider at the bottom for visual polish */}
        <div className="section-divider" />
      </body>
    </html>
  )
}
