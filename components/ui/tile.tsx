// components/ui/tile.tsx
// Tile component: reusable animated tile/card with consistent hover effects for all sections

import * as React from "react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Tile: A reusable animated tile/card for consistent UI effects across the app.
 * - Applies the same hover, background, and transition effects as hobbies/interests tiles.
 * - Use for any card/tile/panel that needs a consistent look and feel.
 */
export const Tile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ className, children, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "flex items-center gap-3 bg-background/60 rounded-lg p-2 group cursor-pointer hover:shadow-lg transition-colors",
      className
    )}
    whileHover={{ backgroundColor: "#00bfff", x: 8 }}
    transition={{ type: "spring", stiffness: 350, damping: 18 }}
    {...props}
  >
    {children}
  </motion.div>
))
Tile.displayName = "Tile" 