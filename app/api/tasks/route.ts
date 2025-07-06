import { NextResponse } from "next/server"

export interface Task {
  id: number
  title: string
  description: string
  completed: boolean
  priority: "low" | "medium" | "high"
  createdAt: string
  userId: number
  category: string
}

// Dados simulados das tarefas
const tasks: Task[] = [
  {
    id: 1,
    title: "Implementar autenticação JWT",
    description: "Adicionar sistema de login e registro com tokens JWT para maior segurança da aplicação",
    completed: false,
    priority: "high",
    createdAt: "2024-01-15T10:30:00Z",
    userId: 1,
    category: "Backend",
  },
  {
    id: 2,
    title: "Criar dashboard administrativo",
    description: "Desenvolver interface de administração com métricas, gráficos e controles de usuário",
    completed: true,
    priority: "medium",
    createdAt: "2024-01-10T14:20:00Z",
    userId: 2,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Otimizar performance do banco",
    description: "Melhorar queries SQL, adicionar índices e implementar cache para melhor performance",
    completed: false,
    priority: "low",
    createdAt: "2024-01-20T09:15:00Z",
    userId: 3,
    category: "Database",
  },
  {
    id: 4,
    title: "Implementar notificações push",
    description: "Sistema de notificações em tempo real para usuários usando WebSockets",
    completed: true,
    priority: "medium",
    createdAt: "2024-01-12T16:45:00Z",
    userId: 1,
    category: "Backend",
  },
  {
    id: 5,
    title: "Criar API de relatórios",
    description: "Endpoint para geração de relatórios personalizados em PDF e Excel",
    completed: false,
    priority: "high",
    createdAt: "2024-01-18T11:30:00Z",
    userId: 4,
    category: "Backend",
  },
  {
    id: 6,
    title: "Configurar CI/CD Pipeline",
    description: "Automatizar processo de integração e deploy contínuo com GitHub Actions",
    completed: true,
    priority: "low",
    createdAt: "2024-01-08T13:20:00Z",
    userId: 5,
    category: "DevOps",
  },
  {
    id: 7,
    title: "Implementar testes unitários",
    description: "Adicionar cobertura de testes para componentes críticos da aplicação",
    completed: false,
    priority: "medium",
    createdAt: "2024-01-22T08:45:00Z",
    userId: 2,
    category: "Testing",
  },
  {
    id: 8,
    title: "Criar documentação da API",
    description: "Documentar todos os endpoints usando Swagger/OpenAPI",
    completed: true,
    priority: "low",
    createdAt: "2024-01-05T15:10:00Z",
    userId: 6,
    category: "Documentation",
  },
  {
    id: 9,
    title: "Implementar sistema de logs",
    description: "Adicionar logging estruturado para monitoramento e debugging",
    completed: false,
    priority: "high",
    createdAt: "2024-01-25T12:00:00Z",
    userId: 3,
    category: "Backend",
  },
  {
    id: 10,
    title: "Otimizar bundle do frontend",
    description: "Reduzir tamanho do bundle JavaScript para melhor performance",
    completed: false,
    priority: "medium",
    createdAt: "2024-01-28T10:15:00Z",
    userId: 4,
    category: "Frontend",
  },
]

export async function GET(request: Request) {
  try {
    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Pegar parâmetros da URL
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get("limit")
    const status = searchParams.get("status")
    const priority = searchParams.get("priority")

    let filteredTasks = [...tasks]

    // Filtrar por status
    if (status === "completed") {
      filteredTasks = filteredTasks.filter((task) => task.completed)
    } else if (status === "pending") {
      filteredTasks = filteredTasks.filter((task) => !task.completed)
    }

    // Filtrar por prioridade
    if (priority && ["low", "medium", "high"].includes(priority)) {
      filteredTasks = filteredTasks.filter((task) => task.priority === priority)
    }

    // Limitar resultados
    if (limit) {
      const limitNum = Number.parseInt(limit)
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredTasks = filteredTasks.slice(0, limitNum)
      }
    }

    // Ordenar por data de criação (mais recentes primeiro)
    filteredTasks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json({
      success: true,
      data: filteredTasks,
      total: filteredTasks.length,
      message: "Tarefas recuperadas com sucesso",
    })
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro interno do servidor ao buscar tarefas",
        data: [],
      },
      { status: 500 },
    )
  }
}
