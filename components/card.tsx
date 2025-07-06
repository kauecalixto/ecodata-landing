"use client"

import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  const baseClasses = "bg-white rounded-xl shadow-sm border border-gray-100"
  const hoverClasses = hover ? "hover:shadow-md transition-shadow duration-200" : ""

  return <div className={`${baseClasses} ${hoverClasses} ${className}`}>{children}</div>
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
