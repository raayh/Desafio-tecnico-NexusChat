# 🐳 NexusChat - Docker Version

> Versão com **Faye WebSocket** para demonstrações com sincronização real entre navegadores/dispositivos diferentes.

## 🎯 Diferença das Versões

| Característica | Versão Netlify | Versão Docker (esta) |
|----------------|----------------|----------------------|
| **Mensageria** | BroadcastChannel (entre abas) | Faye WebSocket (real) |
| **Sincronização** | Mesmo navegador apenas | Entre dispositivos diferentes |
| **Deploy** | Netlify (estático) | Docker Compose |
| **Servidor** | Não precisa | Faye Server incluído |

---

## 🚀 Quick Start

### Pré-requisitos
- Docker instalado ([docker.com](https://www.docker.com/get-started))
- Docker Compose instalado

### Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/raayh/Desafio-tecnico-NexusChat.git
cd NexusChat-docker

# Inicie os containers
docker-compose up --build

# Acesse no navegador
# Frontend: http://localhost:8080
# Faye Server: http://localhost:8001/faye
```

**Pronto!** 🎉 Agora você tem:
- Frontend Vue rodando na porta 8080
- Faye WebSocket Server na porta 8001

---

## 🧪 Como Testar

### Teste Básico (1 navegador)
1. Abra http://localhost:8080
2. Faça login (carlos/123)
3. Envie uma mensagem

### Teste Real-Time (2 dispositivos!)
1. **Computador**: http://localhost:8080 → Login carlos/123
2. **Celular na mesma rede**: http://SEU_IP:8080 → Login ana/123
3. Envie mensagens em qualquer um
4. ✨ Veja sincronização instantânea via WebSocket!

**Descobrir seu IP**:
```bash
# Linux/Mac
ip addr show | grep inet

# Windows
ipconfig
```

---

## 📁 Estrutura Docker

```
NexusChat-docker/
├── Dockerfile              # Build do frontend Vue
├── docker-compose.yml      # Orquestração dos serviços
├── nginx.conf             # Configuração Nginx para SPA
├── .dockerignore          # Arquivos excluídos do build
├── faye-server.js         # Servidor WebSocket
└── src/                   # Código fonte Vue
```

---

## 🔧 Comandos Úteis

```bash
# Iniciar containers
docker-compose up

# Iniciar em background
docker-compose up -d

# Ver logs
docker-compose logs -f

# Ver logs de um serviço específico
docker-compose logs -f frontend
docker-compose logs -f faye-server

# Parar containers
docker-compose down

# Rebuild completo (se mudar código)
docker-compose up --build

# Ver containers rodando
docker ps

# Entrar em um container
docker exec -it nexuschat-frontend sh
docker exec -it nexuschat-faye sh
```

---

## 🌍 Variáveis de Ambiente

Você pode customizar as portas editando `docker-compose.yml`:

```yaml
services:
  frontend:
    ports:
      - "8080:8080"  # Mude 8080 para outra porta se necessário
      
  faye-server:
    ports:
      - "8001:8001"  # Porta do Faye
```

---

## 🐛 Troubleshooting

### Porta já está em uso
```bash
# Descubra o que está usando a porta
lsof -i :8080
lsof -i :8001

# Mate o processo
kill -9 <PID>

# Ou mude a porta no docker-compose.yml
```

### Rebuild não funciona
```bash
# Limpe tudo e rebuild
docker-compose down
docker system prune -f
docker-compose up --build
```

### Containers não se comunicam
```bash
# Verifique a rede
docker network ls
docker network inspect nexuschat-docker_nexuschat-network
```

### Frontend não conecta no Faye
1. Abra o console do navegador (F12)
2. Procure por erros de WebSocket
3. Verifique se `http://localhost:8001/faye` está acessível
4. Confirme que ambos containers estão rodando: `docker ps`

---

## 📊 Arquitetura

```
┌─────────────────────────────────────────────┐
│        Docker Compose Orchestrator          │
│                                             │
│  ┌──────────────────┐  ┌─────────────────┐ │
│  │   Frontend       │  │  Faye Server    │ │
│  │   (Nginx)        │  │  (Node.js)      │ │
│  │   Porta: 8080    │←→│  Porta: 8001    │ │
│  └──────────────────┘  └─────────────────┘ │
│           │                      │          │
│    nexuschat-network (bridge)              │
└─────────────────────────────────────────────┘
          ↓                        ↓
    http://localhost:8080   http://localhost:8001/faye
```

---

## 🔮 Roadmap

- [ ] Adicionar banco de dados PostgreSQL
- [ ] Integrar com backend Ruby on Rails
- [ ] Adicionar Redis para cache
- [ ] Implementar autenticação JWT
- [ ] SSL/HTTPS com certificados

---

## 📝 Notas para Recrutadores

Este projeto demonstra:
- **Docker & Docker Compose**: Containerização de aplicações
- **Arquitetura Multi-Container**: Frontend + Backend isolados
- **WebSocket Real-Time**: Faye para comunicação bidirecional
- **Nginx**: Servidor web de alta performance
- **Multi-Stage Builds**: Otimização de imagem Docker
- **Network Configuration**: Comunicação entre containers
- **Environment Variables**: Configuração flexível

---

## 👩‍💻 Desenvolvedora

**Rayssa**  
Estudante de Ciência da Computação | Full-Stack Developer

📧 rayssasac04@gmail.com  
🐙 GitHub: [@raayh](https://github.com/raayh)

---

**Copyright © 2026 Rayssa. Todos os direitos reservados.**

Este código é propriedade privada. Visualização permitida para fins de avaliação técnica.
