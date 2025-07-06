"use client"

import { Factory, TrendingUp, Globe, Zap } from "lucide-react"
import Card, { CardContent } from "./card"
import type { CarbonFootprintData } from "@/app/page"

interface CarbonFootprintSectionProps {
  data: CarbonFootprintData[]
}

export default function CarbonFootprintSection({ data }: CarbonFootprintSectionProps) {
  const getSectorIcon = (sector: string) => {
    switch (sector.toLowerCase()) {
      case "transporte":
        return Factory
      case "energia":
        return Zap
      case "industria":
        return Factory
      default:
        return Globe
    }
  }

  const getSectorColor = (sector: string) => {
    switch (sector.toLowerCase()) {
      case "transporte":
        return "text-blue-600 bg-blue-100"
      case "energia":
        return "text-yellow-600 bg-yellow-100"
      case "industria":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <section id="carbon-footprint" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pegada de Carbono</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Analise as emissões de CO2 por setor e identifique oportunidades de redução de impacto ambiental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => {
            const SectorIcon = getSectorIcon(item.sector)

            return (
              <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card>
                  <CardContent>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSectorColor(item.sector)}`}>
                          <SectorIcon className="h-3 w-3 inline mr-1" />
                          {item.sector}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">
                          {(item.co2_equivalent / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-gray-500">{item.unit}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.source}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Tipo de Emissão:</span>
                        <span className="font-medium">{item.emission_type}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">País:</span>
                        <span className="font-medium">{item.country}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Ano:</span>
                        <span className="font-medium">{item.year}</span>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-700">Potencial de Redução</span>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="text-lg font-bold text-green-600">{item.reduction_potential}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
