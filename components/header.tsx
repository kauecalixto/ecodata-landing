"use client"

import { useState } from "react"
import { Menu, X, Leaf } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EcoData
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              Estatísticas
            </button>
            <button
              onClick={() => scrollToSection("deforestation")}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              Desmatamento
            </button>
            <button
              onClick={() => scrollToSection("air-quality")}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              Qualidade do Ar
            </button>
            <button
              onClick={() => scrollToSection("carbon-footprint")}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              Pegada de Carbono
            </button>
            <button
              onClick={() => scrollToSection("api")}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              API
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("stats")}
                className="text-left text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Estatísticas
              </button>
              <button
                onClick={() => scrollToSection("deforestation")}
                className="text-left text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Desmatamento
              </button>
              <button
                onClick={() => scrollToSection("air-quality")}
                className="text-left text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Qualidade do Ar
              </button>
              <button
                onClick={() => scrollToSection("carbon-footprint")}
                className="text-left text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                Pegada de Carbono
              </button>
              <button
                onClick={() => scrollToSection("api")}
                className="text-left text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                API
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
