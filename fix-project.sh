#!/bin/bash

echo "🔧 CORREÇÃO COMPLETA DO PROJETO TASKFLOW"
echo "========================================"

# 1. Parar qualquer processo do Next.js
echo "1. Parando processos do Next.js..."
pkill -f "next" 2>/dev/null || true
sleep 2

# 2. Remover TUDO relacionado ao ShadCN e dependências problemáticas
echo "2. Removendo dependências problemáticas..."
npm uninstall shadcn @shadcn/ui tailwindcss-animate 2>/dev/null || true

# 3. Limpar TODOS os caches e arquivos temporários
echo "3. Limpando caches e arquivos temporários..."
rm -rf node_modules
rm -rf .next
rm -rf .turbo
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# 4. Limpar cache do npm
echo "4. Limpando cache do npm..."
npm cache clean --force

# 5. Remover arquivos de configuração do ShadCN
echo "5. Removendo arquivos do ShadCN..."
rm -f components.json
rm -rf components/ui
rm -rf lib/utils.ts

# 6. Reinstalar dependências limpas
echo "6. Reinstalando dependências..."
npm install

# 7. Verificar se a instalação foi bem-sucedida
echo "7. Verificando instalação..."
if [ $? -eq 0 ]; then
    echo "✅ Dependências instaladas com sucesso!"
else
    echo "❌ Erro na instalação das dependências"
    exit 1
fi

# 8. Tentar fazer build
echo "8. Testando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build realizado com sucesso!"
    echo "🚀 Iniciando servidor de desenvolvimento..."
    npm run dev
else
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi
