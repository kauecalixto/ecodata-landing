"use client"

import { Github, Linkedin, Mail, Code, Leaf } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                EcoData
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A plataforma completa para gestão ambiental e sustentabilidade.
              Transforme a forma como você e sua equipe cuidam do meio ambiente com nossa API REST moderna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors duration-200">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("stats")} className="hover:text-white transition-colors duration-200">
                  Estatísticas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("tasks")} className="hover:text-white transition-colors duration-200">
                  Tarefas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("users")} className="hover:text-white transition-colors duration-200">
                  Usuários
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("api")}
                  className="hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <Code className="h-4 w-4" />
                  <span>API</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EcoData. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
