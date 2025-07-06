"use client"

import { Clock, AlertCircle, CheckCircle2, Circle } from "lucide-react"
import Card, { CardContent } from "./card"
import type { Task } from "@/app/page"

interface TasksSectionProps {
  tasks: Task[]
}

export default function TasksSection({ tasks }: TasksSectionProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-100"
      case "medium":
        return "text-yellow-600 bg-yellow-100"
      case "low":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return AlertCircle
      case "medium":
        return Clock
      case "low":
        return Circle
      default:
        return Circle
    }
  }

  return (
    <section id="tasks" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tarefas Recentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja as últimas tarefas criadas na plataforma e acompanhe o progresso dos projetos em andamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, index) => {
            const PriorityIcon = getPriorityIcon(task.priority)

            return (
              <div key={task.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card>
                  <CardContent>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {task.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-400" />
                        )}
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}
                        >
                          <PriorityIcon className="h-3 w-3 inline mr-1" />
                          {task.priority}
                        </span>
                      </div>
                    </div>

                    <h3
                      className={`text-lg font-semibold mb-2 ${task.completed ? "text-gray-500 line-through" : "text-gray-900"}`}
                    >
                      {task.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm">{task.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Criado em {new Date(task.createdAt).toLocaleDateString("pt-BR")}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${task.completed ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                      >
                        {task.completed ? "Concluída" : "Pendente"}
                      </span>
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
