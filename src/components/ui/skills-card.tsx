import * as React from "react"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  name: string
  className?: string
  variant?: "primary" | "secondary" | "accent" | "accent2" | "accent3"
  style?: React.CSSProperties // Add style prop
}

export const SkillCard: React.FC<SkillCardProps> = ({ 
  name, 
  className,
  variant = "primary",
  style // Destructure style prop
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "border-purple-800/30 hover:border-purple-600/50 text-purple-300 hover:text-purple-200 bg-purple-950/10 hover:bg-purple-950/20"
      case "secondary":
        return "border-red-800/30 hover:border-red-600/50 text-red-300 hover:text-red-200 bg-red-950/10 hover:bg-red-950/20"
      case "accent":
        return "border-cyan-800/30 hover:border-cyan-600/50 text-cyan-300 hover:text-cyan-200 bg-cyan-950/10 hover:bg-cyan-950/20"
      // Add cases for accent2 and accent3 to provide specific styling if desired,
      // otherwise they will fall into the default case.
      case "accent2":
        // Example: Using accent2 colors defined in index.css (adjust as needed)
        // For dark mode: --accent2: 260 25% 12%; --accent2-foreground: 260 20% 88%;
        // These are CSS variables, so direct Tailwind classes might be more appropriate if using Tailwind for these.
        // For simplicity, let's make them similar to others or define new ones.
        return "border-indigo-800/30 hover:border-indigo-600/50 text-indigo-300 hover:text-indigo-200 bg-indigo-950/10 hover:bg-indigo-950/20" // Example
      case "accent3":
        // Example: Using accent3 colors defined in index.css
        // For dark mode: --accent3: 30 35% 11%; --accent3-foreground: 30 30% 86%;
        return "border-amber-800/30 hover:border-amber-600/50 text-amber-300 hover:text-amber-200 bg-amber-950/10 hover:bg-amber-950/20" // Example
      default:
        return "border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white bg-transparent"
    }
  }

  return (
    <div
      style={style} // Apply the style prop here
      className={cn(
        "group relative inline-block px-3 py-1.5 border rounded-md transition-all duration-300 hover:-translate-y-0.5",
        "font-typewriter text-xs tracking-wider uppercase backdrop-blur-sm",
        getVariantClasses(),
        className
      )}
    >
      <span className="relative z-10">{name}</span>
      
      {/* Subtle glow effect on hover */}
      <div className={cn(
        "absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm",
        variant === "primary" && "bg-purple-500/5",
        variant === "secondary" && "bg-red-500/5",
        variant === "accent" && "bg-cyan-500/5",
        // Add glow for accent2 and accent3 if desired
        variant === "accent2" && "bg-indigo-500/5", // Example
        variant === "accent3" && "bg-amber-500/5"  // Example
      )} />
    </div>
  )
}