import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TaskFlow - Gerencie suas tarefas com eficiência",
  description:
    "Uma plataforma completa para organizar, acompanhar e otimizar sua produtividade. Conecte-se com sua equipe e alcance seus objetivos de forma inteligente.",
  keywords: ["produtividade", "tarefas", "gerenciamento", "equipe", "organização"],
  authors: [{ name: "TaskFlow Team" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'Kaue.ocalixto'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
