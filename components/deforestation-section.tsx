"use client"

import { TreePine, MapPin, AlertTriangle, Calendar } from "lucide-react"
import Card, { CardContent } from "./card"
import type { DeforestationData } from "@/app/page"

interface DeforestationSectionProps {
  data: DeforestationData[]
}

export default function DeforestationSection({ data }: DeforestationSectionProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-600 bg-red-100"
      case "high":
        return "text-orange-600 bg-orange-100"
      case "medium":
        return "text-yellow-600 bg-yellow-100"
      case "low":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
      case "high":
        return AlertTriangle
      case "medium":
      case "low":
        return TreePine
      default:
        return TreePine
    }
  }

  return (
    <section id="deforestation" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Monitoramento de Desmatamento</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acompanhe as áreas mais afetadas pelo desmatamento e entenda as principais causas por região
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => {
            const SeverityIcon = getSeverityIcon(item.severity)

            return (
              <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card>
                  <CardContent>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(item.severity)}`}
                        >
                          <SeverityIcon className="h-3 w-3 inline mr-1" />
                          {item.severity.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">{item.area_lost.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">km² perdidos</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.region}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>
                          {item.coordinates.lat.toFixed(4)}, {item.coordinates.lng.toFixed(4)}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.year}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-gray-700 mb-1">Principal Causa:</div>
                      <div className="text-sm text-gray-600">{item.cause}</div>
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
