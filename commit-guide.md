# 📝 Guia de Commits para o Projeto

Este projeto segue o padrão **Conventional Commits** para manter um histórico organizado e semântico.

## 🔄 Sequência de Commits Sugerida

Execute os comandos abaixo em ordem para criar um histórico de commits adequado:

### 1. Commit Inicial
\`\`\`bash
git add .
git commit -m "feat: initial project setup with Next.js, TypeScript and TailwindCSS"
\`\`\`

### 2. Estrutura Base de Componentes
\`\`\`bash
git add components/
git commit -m "feat: add custom UI components (Button, Card, Header, Footer)"
\`\`\`

### 3. Seções da Landing Page
\`\`\`bash
git add components/hero-section.tsx components/stats-section.tsx
git commit -m "feat: implement Hero and Stats sections with animations"
\`\`\`

### 4. Consumo da API
\`\`\`bash
git add app/page.tsx
git commit -m "feat: implement API consumption for tasks, users and statistics data"
\`\`\`

### 5. Seções de Dados
\`\`\`bash
git add components/tasks-section.tsx components/users-section.tsx
git commit -m "feat: add Tasks and Users sections with data visualization"
\`\`\`

### 6. Estados de Loading e Erro
\`\`\`bash
git add components/loading-spinner.tsx components/error-message.tsx
git commit -m "feat: add loading states and error handling components"
\`\`\`

### 7. Estilos e Animações
\`\`\`bash
git add app/globals.css tailwind.config.ts
git commit -m "style: implement custom animations and responsive design"
\`\`\`

### 8. Documentação
\`\`\`bash
git add README.md commit-guide.md
git commit -m "docs: add comprehensive documentation and commit guidelines"
\`\`\`

### 9. Otimizações Finais
\`\`\`bash
git add .
git commit -m "perf: optimize components performance and improve accessibility"
\`\`\`

### 10. Deploy e Configurações
\`\`\`bash
git add next.config.mjs package.json
git commit -m "chore: configure build settings and deployment optimizations"
\`\`\`

## 📋 Tipos de Commit Disponíveis

- **feat:** Nova funcionalidade
- **fix:** Correção de bug
- **docs:** Documentação
- **style:** Formatação, estilos CSS
- **refactor:** Refatoração de código
- **perf:** Melhoria de performance
- **test:** Adição de testes
- **chore:** Tarefas de build, configuração
- **ci:** Integração contínua
- **build:** Sistema de build

## 🎯 Exemplo de Uso

\`\`\`bash
# Adicionar nova funcionalidade
git commit -m "feat: add dark mode toggle functionality"

# Corrigir bug
git commit -m "fix: resolve mobile menu not closing on navigation"

# Melhorar performance
git commit -m "perf: optimize image loading with lazy loading"

# Atualizar documentação
git commit -m "docs: update API endpoints documentation"
\`\`\`

## ✅ Checklist Antes do Commit

- [ ] Código testado e funcionando
- [ ] Sem erros de TypeScript
- [ ] Formatação consistente
- [ ] Mensagem de commit clara e descritiva
- [ ] Arquivos desnecessários não incluídos
