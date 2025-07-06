"use client"

import { Clock } from "lucide-react"
import Card, { CardContent } from "./card"
import type { AirQualityData } from "@/app/page"

interface AirQualitySectionProps {
  data: AirQualityData[]
}

export default function AirQualitySection({ data }: AirQualitySectionProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-600 bg-green-100"
      case "moderate":
        return "text-yellow-600 bg-yellow-100"
      case "unhealthy":
        return "text-orange-600 bg-orange-100"
      case "hazardous":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "text-green-600"
    if (aqi <= 100) return "text-yellow-600"
    if (aqi <= 150) return "text-orange-600"
    return "text-red-600"
  }

  return (
    <section id="air-quality" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qualidade do Ar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitore a qualidade do ar em tempo real e acompanhe os níveis de poluentes atmosféricos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <Card>
                <CardContent>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${getAQIColor(item.aqi)}`}>{item.aqi}</div>
                      <div className="text-xs text-gray-500">IQA</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.city}, {item.country}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="text-xs text-gray-600">PM2.5</div>
                      <div className="font-semibold text-blue-600">{item.pm25} μg/m³</div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <div className="text-xs text-gray-600">PM10</div>
                      <div className="font-semibold text-purple-600">{item.pm10} μg/m³</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <div className="text-xs text-gray-600">CO</div>
                      <div className="font-semibold text-green-600">{item.co} mg/m³</div>
                    </div>
                    <div className="bg-orange-50 p-2 rounded">
                      <div className="text-xs text-gray-600">NO2</div>
                      <div className="font-semibold text-orange-600">{item.no2} μg/m³</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{new Date(item.timestamp).toLocaleString("pt-BR")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
