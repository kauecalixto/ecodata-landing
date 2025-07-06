import { NextResponse } from "next/server"

export interface Stats {
  totalTasks: number
  completedTasks: number
  activeUsers: number
  completionRate: number
  tasksThisMonth: number
  tasksLastMonth: number
  growthRate: number
  averageTasksPerUser: number
  topPriority: {
    high: number
    medium: number
    low: number
  }
  departmentStats: {
    department: string
    taskCount: number
    completionRate: number
  }[]
  recentActivity: {
    date: string
    tasksCompleted: number
    tasksCreated: number
  }[]
}

// Função para calcular estatísticas dinâmicas
function calculateStats(): Stats {
  const now = new Date()
  const thisMonth = now.getMonth()
  const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1

  // Dados base simulados
  const totalTasks = 156
  const completedTasks = 89
  const activeUsers = 42
  const tasksThisMonth = 34
  const tasksLastMonth = 28

  const completionRate = Math.round((completedTasks / totalTasks) * 100)
  const growthRate = Math.round(((tasksThisMonth - tasksLastMonth) / tasksLastMonth) * 100)
  const averageTasksPerUser = Math.round((totalTasks / activeUsers) * 10) / 10

  return {
    totalTasks,
    completedTasks,
    activeUsers,
    completionRate,
    tasksThisMonth,
    tasksLastMonth,
    growthRate,
    averageTasksPerUser,
    topPriority: {
      high: 45,
      medium: 67,
      low: 44,
    },
    departmentStats: [
      {
        department: "Desenvolvimento",
        taskCount: 78,
        completionRate: 65,
      },
      {
        department: "Infraestrutura",
        taskCount: 32,
        completionRate: 78,
      },
      {
        department: "Design",
        taskCount: 24,
        completionRate: 83,
      },
      {
        department: "Qualidade",
        taskCount: 22,
        completionRate: 91,
      },
    ],
    recentActivity: [
      {
        date: "2024-01-28",
        tasksCompleted: 12,
        tasksCreated: 8,
      },
      {
        date: "2024-01-27",
        tasksCompleted: 15,
        tasksCreated: 11,
      },
      {
        date: "2024-01-26",
        tasksCompleted: 9,
        tasksCreated: 14,
      },
      {
        date: "2024-01-25",
        tasksCompleted: 18,
        tasksCreated: 6,
      },
      {
        date: "2024-01-24",
        tasksCompleted: 11,
        tasksCreated: 9,
      },
      {
        date: "2024-01-23",
        tasksCompleted: 13,
        tasksCreated: 12,
      },
      {
        date: "2024-01-22",
        tasksCompleted: 16,
        tasksCreated: 7,
      },
    ],
  }
}

export async function GET(request: Request) {
  try {
    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 400))

    // Pegar parâmetros da URL
    const { searchParams } = new URL(request.url)
    const detailed = searchParams.get("detailed") === "true"

    const stats = calculateStats()

    // Se não for detalhado, retornar apenas estatísticas básicas
    if (!detailed) {
      const basicStats = {
        totalTasks: stats.totalTasks,
        completedTasks: stats.completedTasks,
        activeUsers: stats.activeUsers,
        completionRate: stats.completionRate,
      }

      return NextResponse.json({
        success: true,
        data: basicStats,
        message: "Estatísticas básicas recuperadas com sucesso",
      })
    }

    // Retornar estatísticas completas
    return NextResponse.json({
      success: true,
      data: stats,
      message: "Estatísticas detalhadas recuperadas com sucesso",
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Erro ao buscar estatísticas:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro interno do servidor ao buscar estatísticas",
        data: null,
      },
      { status: 500 },
    )
  }
}
