"use client"

import { Trophy, Mail, CheckCircle } from "lucide-react"
import Card, { CardContent } from "./card"
import type { User } from "@/app/page"

interface UsersSectionProps {
  users: User[]
}

export default function UsersSection({ users }: UsersSectionProps) {
  return (
    <section id="users" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Usuários Mais Produtivos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os usuários que mais se destacam na plataforma e se inspire com seus resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div key={user.id} className="animate-fade-in-up relative" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="relative overflow-hidden">
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-yellow-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                    <Trophy className="h-3 w-3 inline mr-1" />
                    TOP 1
                  </div>
                )}

                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <img
                        src={user.avatar || "/placeholder.svg?height=60&width=60"}
                        alt={user.name}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-gray-200"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Mail className="h-4 w-4 mr-1" />
                        {user.email}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Tarefas Concluídas</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {user.tasksCompleted}
                      </span>
                    </div>
                    <div className="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((user.tasksCompleted / 30) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.round((user.tasksCompleted / 30) * 100)}% do objetivo mensal
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
