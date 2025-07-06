"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import DeforestationSection from "@/components/deforestation-section"
import AirQualitySection from "@/components/air-quality-section"
import CarbonFootprintSection from "@/components/carbon-footprint-section"
import ApiSection from "@/components/api-section"
import Footer from "@/components/footer"
import LoadingSpinner from "@/components/loading-spinner"
import ErrorMessage from "@/components/error-message"

// Tipos para os dados da API Ambiental
export interface DeforestationData {
  id: number
  region: string
  area_lost: number
  year: number
  cause: string
  coordinates: {
    lat: number
    lng: number
  }
  severity: "low" | "medium" | "high" | "critical"
}

export interface AirQualityData {
  id: number
  city: string
  country: string
  aqi: number
  pm25: number
  pm10: number
  co: number
  no2: number
  o3: number
  so2: number
  timestamp: string
  status: "good" | "moderate" | "unhealthy" | "hazardous"
}

export interface CarbonFootprintData {
  id: number
  source: string
  emission_type: string
  co2_equivalent: number
  unit: string
  sector: string
  country: string
  year: number
  reduction_potential: number
}

export interface EnvironmentalStats {
  total_deforestation_area: number
  average_aqi: number
  total_co2_emissions: number
  affected_regions: number
  monitoring_stations: number
  improvement_rate: number
}

export default function HomePage() {
  const [deforestationData, setDeforestationData] = useState<DeforestationData[]>([])
  const [airQualityData, setAirQualityData] = useState<AirQualityData[]>([])
  const [carbonFootprintData, setCarbonFootprintData] = useState<CarbonFootprintData[]>([])
  const [stats, setStats] = useState<EnvironmentalStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // URL base da API do M4 - SUBSTITUA pela URL real quando a API estiver rodando
  const API_BASE_URL = "https://github.com/kauecalixto/mini_projeto_m4" // ou "http://localhost:3000" se local

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Consumir as 3+ rotas da API de Dados Ambientais
        const [deforestationResponse, airQualityResponse, carbonResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/deforestation?limit=6`),
          fetch(`${API_BASE_URL}/api/air-quality?limit=6`),
          fetch(`${API_BASE_URL}/api/carbon-footprint?limit=6`),
        ])

        // Verificar se todas as respostas foram bem-sucedidas
        if (!deforestationResponse.ok || !airQualityResponse.ok || !carbonResponse.ok) {
          throw new Error("Erro ao buscar dados da API Ambiental")
        }

        // Converter respostas para JSON
        const deforestationJson = await deforestationResponse.json()
        const airQualityJson = await airQualityResponse.json()
        const carbonJson = await carbonResponse.json()

        // Definir os dados no estado
        setDeforestationData(deforestationJson.data || deforestationJson)
        setAirQualityData(airQualityJson.data || airQualityJson)
        setCarbonFootprintData(carbonJson.data || carbonJson)

        // Calcular estatísticas baseadas nos dados recebidos
        const calculatedStats: EnvironmentalStats = {
          total_deforestation_area:
            deforestationJson.data?.reduce((sum: number, item: DeforestationData) => sum + item.area_lost, 0) || 15420,
          average_aqi:
            Math.round(
              airQualityJson.data?.reduce((sum: number, item: AirQualityData) => sum + item.aqi, 0) /
                (airQualityJson.data?.length || 1),
            ) || 78,
          total_co2_emissions:
            carbonJson.data?.reduce((sum: number, item: CarbonFootprintData) => sum + item.co2_equivalent, 0) ||
            2340000,
          affected_regions: 127,
          monitoring_stations: 89,
          improvement_rate: 12,
        }
        setStats(calculatedStats)
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error)

        // Dados simulados para demonstração (remover quando API estiver funcionando)
        const mockDeforestation: DeforestationData[] = [
          {
            id: 1,
            region: "Amazônia - Pará",
            area_lost: 2340,
            year: 2024,
            cause: "Pecuária",
            coordinates: { lat: -3.4653, lng: -62.2159 },
            severity: "critical",
          },
          {
            id: 2,
            region: "Cerrado - Mato Grosso",
            area_lost: 1890,
            year: 2024,
            cause: "Agricultura",
            coordinates: { lat: -12.6819, lng: -56.9211 },
            severity: "high",
          },
          {
            id: 3,
            region: "Mata Atlântica - SP",
            area_lost: 567,
            year: 2024,
            cause: "Urbanização",
            coordinates: { lat: -23.5505, lng: -46.6333 },
            severity: "medium",
          },
        ]

        const mockAirQuality: AirQualityData[] = [
          {
            id: 1,
            city: "São Paulo",
            country: "Brasil",
            aqi: 89,
            pm25: 23.4,
            pm10: 45.2,
            co: 1.2,
            no2: 34.5,
            o3: 67.8,
            so2: 12.3,
            timestamp: "2024-01-28T15:30:00Z",
            status: "moderate",
          },
          {
            id: 2,
            city: "Rio de Janeiro",
            country: "Brasil",
            aqi: 76,
            pm25: 19.8,
            pm10: 38.7,
            co: 0.9,
            no2: 28.3,
            o3: 54.2,
            so2: 8.7,
            timestamp: "2024-01-28T15:30:00Z",
            status: "moderate",
          },
        ]

        const mockCarbon: CarbonFootprintData[] = [
          {
            id: 1,
            source: "Transporte Rodoviário",
            emission_type: "CO2",
            co2_equivalent: 450000,
            unit: "toneladas",
            sector: "Transporte",
            country: "Brasil",
            year: 2024,
            reduction_potential: 25,
          },
          {
            id: 2,
            source: "Energia Elétrica",
            emission_type: "CO2",
            co2_equivalent: 380000,
            unit: "toneladas",
            sector: "Energia",
            country: "Brasil",
            year: 2024,
            reduction_potential: 35,
          },
        ]

        setDeforestationData(mockDeforestation)
        setAirQualityData(mockAirQuality)
        setCarbonFootprintData(mockCarbon)
        setStats({
          total_deforestation_area: 15420,
          average_aqi: 78,
          total_co2_emissions: 2340000,
          affected_regions: 127,
          monitoring_stations: 89,
          improvement_rate: 12,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleRetry = () => {
    window.location.reload()
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={handleRetry} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        {stats && <StatsSection stats={stats} />}
        <DeforestationSection data={deforestationData} />
        <AirQualitySection data={airQualityData} />
        <CarbonFootprintSection data={carbonFootprintData} />
        <ApiSection />
      </main>
      <Footer />
    </div>
  )
}
