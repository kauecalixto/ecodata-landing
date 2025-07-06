#!/bin/bash

# Exemplos de commits seguindo Conventional Commits
# Execute estes comandos em sequência para criar o histórico de commits

# 1. Commit inicial
git add .
git commit -m "feat: initial project setup with Next.js and TypeScript"

# 2. Adicionar componentes base
git add components/
git commit -m "feat: add base components (Header, Hero, Footer)"

# 3. Implementar consumo da API
git add app/page.tsx
git commit -m "feat: implement API consumption for tasks, users and stats"

# 4. Adicionar estilos e animações
git add app/globals.css tailwind.config.ts
git commit -m "style: add custom animations and responsive design"

# 5. Implementar tratamento de erros
git add components/error-message.tsx components/loading-spinner.tsx
git commit -m "feat: add error handling and loading states"

# 6. Adicionar documentação
git add README.md
git commit -m "docs: add comprehensive README with setup instructions"

# 7. Otimizações finais
git add .
git commit -m "perf: optimize components and improve user experience"
