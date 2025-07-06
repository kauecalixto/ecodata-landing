"use client"

import { Wind, Factory, MapPin, TreePine } from "lucide-react"
import Card, { CardContent } from "./card"
import type { EnvironmentalStats } from "@/app/page"

interface StatsSectionProps {
  stats: EnvironmentalStats
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const statItems = [
    {
      icon: TreePine,
      label: "Área Desmatada (km²)",
      value: stats.total_deforestation_area.toLocaleString(),
      color: "text-red-600",
      bgColor: "bg-red-100",
      trend: "↑ 8% este ano",
    },
    {
      icon: Wind,
      label: "IQA Médio",
      value: stats.average_aqi,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      trend: "↓ 5% este mês",
    },
    {
      icon: Factory,
      label: "CO2 Emitido (ton)",
      value: (stats.total_co2_emissions / 1000).toFixed(0) + "K",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      trend: "↑ 12% este ano",
    },
    {
      icon: MapPin,
      label: "Regiões Monitoradas",
      value: stats.affected_regions,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      trend: `${stats.improvement_rate}% melhoria`,
    },
  ]

  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dados Ambientais em Tempo Real</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acompanhe as principais métricas ambientais e veja como estamos monitorando a saúde do nosso planeta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <div key={item.label} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <Card>
                <CardContent>
                  <div className={`${item.bgColor} p-3 rounded-lg w-fit mb-4`}>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                  <div className="text-gray-600 font-medium mb-2">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.trend}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
