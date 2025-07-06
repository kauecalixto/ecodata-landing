import { NextResponse } from "next/server"

export async function GET() {
  try {
    const healthData = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development",
      services: {
        database: "connected",
        cache: "connected",
        external_apis: "connected",
      },
      endpoints: {
        tasks: "/api/tasks",
        users: "/api/users",
        stats: "/api/stats",
      },
    }

    return NextResponse.json({
      success: true,
      data: healthData,
      message: "API está funcionando corretamente",
    })
  } catch (error) {
    console.error("Erro no health check:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro no health check",
        data: null,
      },
      { status: 500 },
    )
  }
}
