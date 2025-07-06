"use client"

import { ArrowRight, TreePine, Wind, Factory } from "lucide-react"
import Button from "./button"
import Card, { CardContent } from "./card"

export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Monitore o{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                meio ambiente
              </span>{" "}
              em tempo real
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Uma plataforma completa para monitorar dados ambientais como desmatamento, qualidade do ar e pegada de
              carbono. Conecte-se com informações precisas e tome decisões conscientes para um futuro sustentável.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-200 mb-12">
            <Button size="lg" className="inline-flex items-center space-x-2">
              <span>Explorar dados</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="animate-fade-in-up animation-delay-300">
              <Card>
                <CardContent className="text-center">
                  <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <TreePine className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Desmatamento</h3>
                  <p className="text-gray-600">
                    Monitore áreas de desmatamento em tempo real com dados precisos e geolocalização
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <Card>
                <CardContent className="text-center">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Wind className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualidade do Ar</h3>
                  <p className="text-gray-600">
                    Acompanhe índices de qualidade do ar e poluentes atmosféricos por região
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-up animation-delay-500">
              <Card>
                <CardContent className="text-center">
                  <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Factory className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pegada de Carbono</h3>
                  <p className="text-gray-600">
                    Analise emissões de CO2 por setor e identifique oportunidades de redução
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
