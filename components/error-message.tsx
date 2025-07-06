"use client"

import { RefreshCw, AlertTriangle, Wifi } from "lucide-react"
import Button from "./button"

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Ops! Algo deu errado</h3>

        <p className="text-gray-600 mb-6">{message}</p>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg text-left">
            <div className="flex items-start space-x-3">
              <Wifi className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Para desenvolvedores:</h4>
                <p className="text-sm text-blue-700">
                  Configure a URL da sua API do M4 no arquivo{" "}
                  <code className="bg-blue-100 px-1 rounded">app/page.tsx</code>
                </p>
              </div>
            </div>
          </div>

          {onRetry && (
            <Button onClick={onRetry} className="w-full inline-flex items-center justify-center space-x-2">
              <RefreshCw className="h-4 w-4" />
              <span>Tentar novamente</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
