"use client"

import { useState } from "react"
import { Code, Database, Server, Leaf, Copy, CheckCircle, ExternalLink } from "lucide-react"
import Card, { CardContent } from "./card"
import Button from "./button"

interface ApiEndpoint {
  method: string
  path: string
  description: string
  example: string
  response: string
  icon: any
  color: string
  bgColor: string
}

export default function ApiSection() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)

  const apiEndpoints: ApiEndpoint[] = [
    {
      method: "GET",
      path: "/api/deforestation",
      description: "Dados de desmatamento por região com coordenadas geográficas e níveis de severidade",
      example: "/api/deforestation?limit=10&severity=high&year=2024",
      response: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "region": "Amazônia - Pará",
      "area_lost": 2340,
      "year": 2024,
      "cause": "Pecuária",
      "coordinates": {
        "lat": -3.4653,
        "lng": -62.2159
      },
      "severity": "critical"
    }
  ]
}`,
      icon: Database,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      method: "GET",
      path: "/api/air-quality",
      description: "Índices de qualidade do ar e concentração de poluentes atmosféricos por cidade",
      example: "/api/air-quality?city=São Paulo&limit=5",
      response: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "city": "São Paulo",
      "country": "Brasil",
      "aqi": 89,
      "pm25": 23.4,
      "pm10": 45.2,
      "co": 1.2,
      "no2": 34.5,
      "status": "moderate",
      "timestamp": "2024-01-28T15:30:00Z"
    }
  ]
}`,
      icon: Server,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      method: "GET",
      path: "/api/carbon-footprint",
      description: "Dados de emissões de CO2 por setor com potencial de redução e análise por país",
      example: "/api/carbon-footprint?sector=transporte&country=Brasil",
      response: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "source": "Transporte Rodoviário",
      "emission_type": "CO2",
      "co2_equivalent": 450000,
      "unit": "toneladas",
      "sector": "Transporte",
      "country": "Brasil",
      "year": 2024,
      "reduction_potential": 25
    }
  ]
}`,
      icon: Code,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const copyToClipboard = async (text: string, endpoint: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedEndpoint(endpoint)
      setTimeout(() => setCopiedEndpoint(null), 2000)
    } catch (err) {
      console.error("Erro ao copiar:", err)
    }
  }

  const openGitHub = () => {
    window.open("https://github.com/kauecalixto/mini_projeto_m4", "_blank")
  }

  return (
    <section id="api" className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Server className="h-4 w-4" />
            <span>API de Dados Ambientais</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Nossa{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">API REST</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acesse dados ambientais estruturados sobre desmatamento, qualidade do ar e pegada de carbono. API
            desenvolvida seguindo padrão MVC com dados atualizados e documentação completa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {apiEndpoints.map((endpoint, index) => (
            <div key={endpoint.path} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`${endpoint.bgColor} p-2 rounded-lg`}>
                        <endpoint.icon className={`h-6 w-6 ${endpoint.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded">
                            {endpoint.path}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{endpoint.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-gray-700">Exemplo de Uso:</h4>
                        <button
                          onClick={() => copyToClipboard(endpoint.example, endpoint.path)}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                          title="Copiar exemplo"
                        >
                          {copiedEndpoint === endpoint.path ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <code className="block text-xs bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto">
                        GET {endpoint.example}
                      </code>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Resposta:</h4>
                      <pre className="text-xs bg-gray-900 text-gray-300 p-3 rounded-lg overflow-x-auto max-h-40">
                        {endpoint.response}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg w-fit mx-auto mb-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">API de Dados Ambientais</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Esta API foi desenvolvida como parte do Mini Projeto M4, fornecendo dados estruturados sobre questões
              ambientais seguindo o padrão MVC (Model-View-Controller).
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={openGitHub} className="inline-flex items-center space-x-2">
                <Code className="h-4 w-4" />
                <span>Ver no GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
