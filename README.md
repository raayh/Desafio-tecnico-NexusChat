# 💬 NexusChat — Parte 1 | Frontend

> Projeto frontend de mensageria desenvolvido com **Vue 3**, focado em arquitetura de estado, experiência do usuário e simulação de comunicação client-side **sem backend**.

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

🔗 **Demo online**: https://nexuschat.netlify.app  
📂 **Versão alternativa (Faye)**: ver branch/diretório específico no repositório

---

## 🎯 Sobre o Projeto

O **NexusChat** é um projeto dividido em fases.  
Esta **Parte 1** cobre exclusivamente o **frontend**, com foco em:

- Arquitetura SPA moderna
- Gerenciamento de estado
- Simulação de comunicação em tempo real
- Persistência client-side
- UI/UX responsiva

Nenhum backend é utilizado nesta etapa. Todas as decisões técnicas são alinhadas ao objetivo de demonstrar domínio de frontend. Este projeto faz parte do meu portfólio técnico e de UX.

---

## 🚀 Funcionalidades Implementadas

- 💬 Chat em salas públicas e mensagens diretas
- 🔄 Sincronização em tempo real entre abas usando BroadcastChannel API
- 💾 Persistência client-side com localStorage
- 👤 Login e cadastro simulados, com avatars dinâmicos
- 🟢 Status online/offline
- 🔍 Busca de mensagens
- ♾️ Carregamento progressivo (infinite scroll)
- 📱 Interface responsiva (desktop e mobile)

---

## 🧠 Decisões Técnicas Importantes

- **Componentização seletiva**: componentes reutilizados apenas quando há ganho real de clareza. Elementos visuais com estrutura idêntica e dados dinâmicos são controlados via `v-if` e estado centralizado.
- **Simulação local de tempo real**: a BroadcastChannel API foi escolhida por ser nativa, simples e eficaz para demonstrar sincronização client-side.
- **Persistência local**: uso consciente de `localStorage`, assumindo suas limitações em ambiente de produção.
> Navegadores diferentes não compartilham estado. Para isso, existe uma versão alternativa com Faye.
---

## 🧪 Testes da Aplicação

📄 **Roteiro de testes (UX)**: _em breve_  
🔗 **Acesso direto à demo**: https://nexuschat.netlify.app

### Teste rápido
1. Abra o site em duas abas
2. Faça login com usuários diferentes
3. Envie mensagens
4. Observe a sincronização em tempo real entre abas

---

## 🏗️ Stack Tecnológico

- **Vue 3** (Composition API)
- **Vite**
- **Pinia**
- **Vue Router**
- **BroadcastChannel API**
- **localStorage**
- **Netlify** (deploy estático)

---

## 🌐 Versão Alternativa — WebSocket (Faye)

Este repositório também contém uma **versão experimental** utilizando **Faye + WebSocket**, com suporte a múltiplos navegadores.

📂 Veja: diretório/branch dedicada  
📄 README próprio com instruções de Docker e execução local

---

## 🔮 Próxima Fase — Parte 2 (Backend)

Planejado para a próxima etapa do projeto:

- Backend com Ruby on Rails
- WebSocket real (Action Cable)
- Persistência em banco de dados
- Autenticação com JWT
- Escalabilidade real multiusuário

---

## 👩‍💻 Desenvolvedora

**Rayssa Guerra**  
Desenvolvedora front-end | UX Design | Full-Stack em formação

🔗 LinkedIn: https://linkedin.com/in/seu-perfil  
🐙 GitHub: https://github.com/seu-usuario

---

## 📌 Observação Importante

Este projeto é educacional e autoral, criado para demonstração técnica e de UX.
Não é um produto comercial.

© 2025 — Projeto desenvolvido para fins educacionais e demonstração técnica.
