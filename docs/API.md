# 📡 TaskFlow API Documentation

Esta é a documentação completa da API REST do TaskFlow, que fornece dados sobre tarefas, usuários e estatísticas da plataforma.

## 🔗 Base URL

\`\`\`
http://localhost:3000/api
\`\`\`

## 📋 Endpoints Disponíveis

### 1. 📝 Tasks - `/api/tasks`

Retorna lista de tarefas com informações detalhadas.

#### GET `/api/tasks`

**Parâmetros de Query:**
- `limit` (opcional): Número máximo de tarefas a retornar
- `status` (opcional): `completed` | `pending` - Filtrar por status
- `priority` (opcional): `low` | `medium` | `high` - Filtrar por prioridade

**Exemplo de Requisição:**
\`\`\`bash
GET /api/tasks?limit=5&status=pending&priority=high
\`\`\`

**Resposta de Sucesso (200):**
\`\`\`json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Implementar autenticação JWT",
      "description": "Adicionar sistema de login e registro com tokens JWT",
      "completed": false,
      "priority": "high",
      "createdAt": "2024-01-15T10:30:00Z",
      "userId": 1,
      "category": "Backend"
    }
  ],
  "total": 10,
  "message": "Tarefas recuperadas com sucesso"
}
\`\`\`

### 2. 👥 Users - `/api/users`

Retorna lista de usuários com informações de produtividade.

#### GET `/api/users`

**Parâmetros de Query:**
- `limit` (opcional): Número máximo de usuários a retornar
- `active` (opcional): `true` | `false` - Filtrar por usuários ativos
- `department` (opcional): Filtrar por departamento

**Exemplo de Requisição:**
\`\`\`bash
GET /api/users?limit=6&active=true
\`\`\`

**Resposta de Sucesso (200):**
\`\`\`json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Ana Silva",
      "email": "ana.silva@taskflow.com",
      "tasksCompleted": 28,
      "avatar": "/placeholder.svg?height=60&width=60",
      "role": "Senior Developer",
      "joinedAt": "2023-06-15T00:00:00Z",
      "isActive": true,
      "department": "Desenvolvimento"
    }
  ],
  "total": 8,
  "message": "Usuários recuperados com sucesso"
}
\`\`\`

### 3. 📊 Stats - `/api/stats`

Retorna estatísticas gerais da plataforma.

#### GET `/api/stats`

**Parâmetros de Query:**
- `detailed` (opcional): `true` - Retorna estatísticas detalhadas

**Exemplo de Requisição:**
\`\`\`bash
GET /api/stats?detailed=true
\`\`\`

**Resposta de Sucesso (200):**
\`\`\`json
{
  "success": true,
  "data": {
    "totalTasks": 156,
    "completedTasks": 89,
    "activeUsers": 42,
    "completionRate": 57,
    "tasksThisMonth": 34,
    "tasksLastMonth": 28,
    "growthRate": 21,
    "averageTasksPerUser": 3.7,
    "topPriority": {
      "high": 45,
      "medium": 67,
      "low": 44
    },
    "departmentStats": [
      {
        "department": "Desenvolvimento",
        "taskCount": 78,
        "completionRate": 65
      }
    ],
    "recentActivity": [
      {
        "date": "2024-01-28",
        "tasksCompleted": 12,
        "tasksCreated": 8
      }
    ]
  },
  "message": "Estatísticas detalhadas recuperadas com sucesso",
  "lastUpdated": "2024-01-28T15:30:00Z"
}
\`\`\`

### 4. 🏥 Health Check - `/api/health`

Verifica o status da API.

#### GET `/api/health`

**Resposta de Sucesso (200):**
\`\`\`json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2024-01-28T15:30:00Z",
    "version": "1.0.0",
    "uptime": 3600,
    "environment": "development",
    "services": {
      "database": "connected",
      "cache": "connected",
      "external_apis": "connected"
    },
    "endpoints": {
      "tasks": "/api/tasks",
      "users": "/api/users",
      "stats": "/api/stats"
    }
  },
  "message": "API está funcionando corretamente"
}
\`\`\`

## 🔧 Códigos de Status HTTP

- `200` - Sucesso
- `400` - Requisição inválida
- `404` - Recurso não encontrado
- `500` - Erro interno do servidor

## 📝 Formato de Resposta Padrão

Todas as respostas seguem o formato:

\`\`\`json
{
  "success": boolean,
  "data": any,
  "message": string,
  "error"?: string
}
\`\`\`

## 🚀 Exemplos de Uso

### JavaScript/Fetch
\`\`\`javascript
// Buscar tarefas
const response = await fetch('/api/tasks?limit=5')
const data = await response.json()

if (data.success) {
  console.log('Tarefas:', data.data)
} else {
  console.error('Erro:', data.error)
}
\`\`\`

### cURL
\`\`\`bash
# Buscar usuários ativos
curl -X GET "http://localhost:3000/api/users?active=true&limit=10"

# Buscar estatísticas detalhadas
curl -X GET "http://localhost:3000/api/stats?detailed=true"
\`\`\`

## 🔍 Filtros e Parâmetros

### Tasks
- **Filtro por status:** `?status=completed` ou `?status=pending`
- **Filtro por prioridade:** `?priority=high|medium|low`
- **Limite de resultados:** `?limit=10`

### Users
- **Filtro por status ativo:** `?active=true|false`
- **Filtro por departamento:** `?department=Desenvolvimento`
- **Limite de resultados:** `?limit=10`

### Stats
- **Estatísticas detalhadas:** `?detailed=true`

## 🛠️ Desenvolvimento

Para adicionar novos endpoints ou modificar os existentes, edite os arquivos em:
- `app/api/tasks/route.ts`
- `app/api/users/route.ts`
- `app/api/stats/route.ts`

## 📊 Dados Simulados

A API utiliza dados simulados para demonstração. Em um ambiente de produção, estes dados viriam de um banco de dados real.
