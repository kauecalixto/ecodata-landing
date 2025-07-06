# 🚨 CORREÇÃO DE EMERGÊNCIA

## O problema persiste? Execute EXATAMENTE estes passos:

### 1. PARE TUDO
- Feche o terminal/prompt
- Feche o VS Code
- Abra um novo terminal

### 2. NAVEGUE PARA O PROJETO
\`\`\`bash
cd C:\Users\Calixto\Desktop\landing-page-api
\`\`\`

### 3. EXECUTE OS COMANDOS UM POR VEZ
\`\`\`bash
# Remover node_modules
rmdir /s node_modules

# Remover .next
rmdir /s .next

# Remover package-lock.json
del package-lock.json

# Limpar cache npm
npm cache clean --force
\`\`\`

### 4. VERIFICAR SE SHADCN AINDA EXISTE
\`\`\`bash
# Verificar se ainda há referências
findstr /s "shadcn" *.* 
\`\`\`

### 5. REINSTALAR TUDO
\`\`\`bash
npm install
\`\`\`

### 6. TESTAR
\`\`\`bash
npm run dev
\`\`\`

## Se AINDA não funcionar:

### OPÇÃO DRÁSTICA - PROJETO NOVO
\`\`\`bash
# Sair da pasta atual
cd ..

# Criar projeto completamente novo
npx create-next-app@latest taskflow-clean --typescript --tailwind --eslint --app

# Entrar no novo projeto
cd taskflow-clean

# Copiar apenas os arquivos necessários do projeto antigo:
# - app/api/ (toda a pasta)
# - components/ (exceto ui/)
# - Conteúdo específico dos arquivos
\`\`\`

## VERIFICAÇÃO FINAL
Após qualquer correção, verifique:
- [ ] Servidor inicia sem erros
- [ ] http://localhost:3000 carrega
- [ ] http://localhost:3000/api/health responde
- [ ] Sem erros no console
