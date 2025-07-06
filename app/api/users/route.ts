import { NextResponse } from "next/server"

export interface User {
  id: number
  name: string
  email: string
  tasksCompleted: number
  avatar: string
  role: string
  joinedAt: string
  isActive: boolean
  department: string
}

// Dados simulados dos usuários
const users: User[] = [
  {
    id: 1,
    name: "Ana Silva",
    email: "ana.silva@taskflow.com",
    tasksCompleted: 28,
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Senior Developer",
    joinedAt: "2023-06-15T00:00:00Z",
    isActive: true,
    department: "Desenvolvimento",
  },
  {
    id: 2,
    name: "João Santos",
    email: "joao.santos@taskflow.com",
    tasksCompleted: 23,
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Frontend Developer",
    joinedAt: "2023-08-20T00:00:00Z",
    isActive: true,
    department: "Desenvolvimento",
  },
  {
    id: 3,
    name: "Maria Costa",
    email: "maria.costa@taskflow.com",
    tasksCompleted: 21,
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Database Administrator",
    joinedAt: "2023-05-10T00:00:00Z",
    isActive: true,
    department: "Infraestrutura",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    email: "pedro.oliveira@taskflow.com",
    tasksCompleted: 19,
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Backend Developer",
    joinedAt: "2023-09-05T00:00:00Z",
    isActive: true,
    department: "Desenvolvimento",
  },
  {
    id: 5,
    name: "Carla Mendes",
    email: "carla.mendes@taskflow.com",
    tasksCompleted: 17,
    avatar: "/placeholder.svg?height=60&width=60",
    role: "DevOps Engineer",
    joinedAt: "2023-07-12T00:00:00Z",
    isActive: true,
    department: "Infraestrutura",
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    email: "lucas.ferreira@taskflow.com",
    tasksCompleted: 15,
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Technical Writer",
    joinedAt: "2023-10-01T00:00:00Z",
    isActive: true,
    department: "Documentação",
  },
  {
    id: 7,
    name: "Fernanda Lima",
    email: "fernanda.lima@taskflow.com",
    tasksCompleted: 12,
    avatar: "/placeholder.svg?height=60&width=60",
    role: "QA Engineer",
    joinedAt: "2023-11-15T00:00:00Z",
    isActive: true,
    department: "Qualidade",
  },
  {
    id: 8,
    name: "Roberto Alves",
    email: "roberto.alves@taskflow.com",
    tasksCompleted: 10,
    avatar: "/placeholder.svg?height=60&width=60",
    role: "UI/UX Designer",
    joinedAt: "2023-12-01T00:00:00Z",
    isActive: false,
    department: "Design",
  },
]

export async function GET(request: Request) {
  try {
    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Pegar parâmetros da URL
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get("limit")
    const active = searchParams.get("active")
    const department = searchParams.get("department")

    let filteredUsers = [...users]

    // Filtrar por status ativo
    if (active === "true") {
      filteredUsers = filteredUsers.filter((user) => user.isActive)
    } else if (active === "false") {
      filteredUsers = filteredUsers.filter((user) => !user.isActive)
    }

    // Filtrar por departamento
    if (department) {
      filteredUsers = filteredUsers.filter((user) => user.department.toLowerCase().includes(department.toLowerCase()))
    }

    // Ordenar por tarefas completadas (decrescente)
    filteredUsers.sort((a, b) => b.tasksCompleted - a.tasksCompleted)

    // Limitar resultados
    if (limit) {
      const limitNum = Number.parseInt(limit)
      if (!isNaN(limitNum) && limitNum > 0) {
        filteredUsers = filteredUsers.slice(0, limitNum)
      }
    }

    return NextResponse.json({
      success: true,
      data: filteredUsers,
      total: filteredUsers.length,
      message: "Usuários recuperados com sucesso",
    })
  } catch (error) {
    console.error("Erro ao buscar usuários:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro interno do servidor ao buscar usuários",
        data: [],
      },
      { status: 500 },
    )
  }
}
