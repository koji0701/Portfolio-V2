import * as React from "react"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  name: string
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export const SkillCard: React.FC<SkillCardProps> = ({ 
  name, 
  className,
  variant = "primary"
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "border-purple-800/30 hover:border-purple-600/50 text-purple-300 hover:text-purple-200 bg-purple-950/10 hover:bg-purple-950/20"
      case "secondary":
        return "border-red-800/30 hover:border-red-600/50 text-red-300 hover:text-red-200 bg-red-950/10 hover:bg-red-950/20"
      case "accent":
        return "border-cyan-800/30 hover:border-cyan-600/50 text-cyan-300 hover:text-cyan-200 bg-cyan-950/10 hover:bg-cyan-950/20"
      default:
        return "border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white bg-transparent"
    }
  }

  return (
    <div
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
        variant === "accent" && "bg-cyan-500/5"
      )} />
    </div>
  )
} 