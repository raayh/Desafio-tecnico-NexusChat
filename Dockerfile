# ============================================
# ESTÁGIO 1: BUILD
# ============================================
FROM node:20-alpine AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências primeiro (otimização de cache)
COPY package*.json ./

# Instala TODAS as dependências (incluindo devDependencies para o build)
RUN npm ci

# Copia o restante do código
COPY . .

# Faz o build da aplicação Vue
RUN npm run build

# ============================================
# ESTÁGIO 2: PRODUÇÃO
# ============================================
FROM nginx:alpine

# Copia arquivos buildados do estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe porta 8080
EXPOSE 8080

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
