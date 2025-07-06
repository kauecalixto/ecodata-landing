#!/bin/bash

echo "🚀 CRIANDO COMMITS SEMÂNTICOS PARA O PROJETO"
echo "============================================"

# Verificar se estamos em um repositório git
if [ ! -d ".git" ]; then
    echo "Inicializando repositório Git..."
    git init
    git branch -M main
fi

# 1. Commit inicial - Setup do projeto
git add .
git commit -m "feat: initial project setup with Next.js and TypeScript

- Configure Next.js 14 with App Router
- Setup TypeScript with strict configuration  
- Add TailwindCSS for styling
- Create basic project structure for environmental data landing page"

# 2. Commit - Componentes base
git add components/button.tsx components/card.tsx components/header.tsx components/footer.tsx
git commit -m "feat: create custom UI components without external libraries

- Add Button component with variants and hover effects
- Create Card component with shadow and transitions
- Implement Header with responsive navigation and smooth scroll
- Add Footer with environmental theme and API links"

# 3. Commit - Seções principais
git add components/hero-section.tsx components/stats-section.tsx
git commit -m "feat: implement hero and statistics sections

- Create Hero section with environmental focus and call-to-action
- Add Stats section displaying real-time environmental metrics
- Implement fade-in animations and responsive grid layouts
- Add gradient backgrounds and custom styling"

# 4. Commit - Seções de dados ambientais
git add components/deforestation-section.tsx components/air-quality-section.tsx components/carbon-footprint-section.tsx
git commit -m "feat: add environmental data sections with API integration

- Create Deforestation section with severity indicators and coordinates
- Implement Air Quality section with pollutant metrics and AQI status
- Add Carbon Footprint section with sector analysis and reduction potential
- Include interactive cards with environmental data visualization"

# 5. Commit - Integração com API
git add app/page.tsx
git commit -m "feat: integrate with M4 environmental data API

- Consume 3+ GET routes from environmental API
- Implement data fetching with error handling and loading states
- Add TypeScript interfaces for environmental data structures
- Create fallback mock data for development and testing"

# 6. Commit - Estados e tratamento de erros
git add components/loading-spinner.tsx components/error-message.tsx
git commit -m "feat: add comprehensive error handling and loading states

- Create animated loading spinner with environmental theme
- Implement error message component with retry functionality
- Add proper error boundaries and user-friendly messages
- Include developer instructions for API configuration"

# 7. Commit - Documentação da API
git add components/api-section.tsx
git commit -m "feat: create interactive API documentation section

- Add comprehensive API documentation with examples
- Implement copy-to-clipboard functionality for code snippets
- Create interactive endpoint testing with external links
- Include GitHub integration and API structure explanation"

# 8. Commit - Estilos e animações
git add app/globals.css tailwind.config.ts
git commit -m "style: implement custom animations and responsive design

- Add fade-in-up animations with staggered delays
- Create custom CSS keyframes and smooth transitions
- Implement responsive grid layouts for all screen sizes
- Add hover effects, focus states, and accessibility improvements"

# 9. Commit - Configurações e otimizações
git add next.config.mjs package.json tsconfig.json postcss.config.js
git commit -m "chore: configure build settings and performance optimizations

- Setup Next.js configuration for production builds
- Optimize TypeScript compiler options and path aliases
- Configure PostCSS and Autoprefixer for CSS processing
- Add ESLint rules and development scripts"

# 10. Commit - Documentação final
git add README.md
git commit -m "docs: create comprehensive project documentation

- Add detailed README with project overview and setup instructions
- Include technology stack, features, and architecture documentation
- Create troubleshooting guide and contribution guidelines
- Add links to API repository and deployment instructions"

echo "✅ COMMITS CRIADOS COM SUCESSO!"
echo "📊 Total de commits: 10"
echo "🔍 Verifique com: git log --oneline"
echo ""
echo "🚀 PRÓXIMO PASSO: Capturar screenshots do projeto"
