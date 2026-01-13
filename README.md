# 💬 NexusChat

> Aplicação de mensageria em tempo real desenvolvida com **Vue 3**, demonstrando comunicação client-side e arquitetura moderna de frontend.

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

---

## 🎯 Sobre o Projeto

NexusChat é uma aplicação de mensageria que demonstra conceitos avançados de **comunicação em tempo real** entre abas do navegador, **gerenciamento de estado** com Pinia, e **persistência de dados** client-side. 

### ✨ Destaques Técnicos

- 🔄 **Sincronização em tempo real** entre múltiplas abas usando BroadcastChannel API
- 📦 **Gerenciamento de estado robusto** com Pinia
- 💾 **Persistência de dados** com localStorage
- 🎨 **UI/UX responsiva** com design moderno
- ⚡ **Build otimizado** (67 kB gzipped) para performance máxima
- 🌐 **Deploy em produção** no Netlify (hospedagem estática)
- 🧪 **Arquitetura escalável** pronta para integração backend

---

## 🚀 Demo Online

**Testar agora**: [nexuschat.netlify.app](https://seu-projeto.netlify.app) *(adicione sua URL aqui)*

### Como Testar a Aplicação (Netlify)

> **💡 Dica para Recrutadores/Testers**: Abra a aplicação em **2 abas diferentes** para ver a sincronização em tempo real!

---

#### **🚀 Teste Rápido (2-3 minutos)**

1. **Acesse** [nexuschat.netlify.app](https://seu-projeto.netlify.app)
2. **Faça login** com usuário demo:
   - Nickname: `carlos` | Senha: `123`
3. **Abra em nova aba** (Ctrl+T / Cmd+T) o mesmo link
4. **Faça login** com outro usuário:
   - Nickname: `ana` | Senha: `123`
5. **Posicione as abas lado a lado**
6. **Envie uma mensagem** na aba do Carlos
7. ✨ **Observe** a mensagem aparecer instantaneamente na aba da Ana!

**Resultado esperado**: Sincronização em tempo real entre as abas ✅

---

#### **🧪 Teste Completo - Todas as Funcionalidades (10-15 minutos)**

##### **1. Sistema de Autenticação**

**Login com Usuário Existente**:
- Nickname: `carlos` | Senha: `123`
- ✅ **Deve**: Redirecionar para o chat

**Cadastro de Novo Usuário**:
- Clique em "Cadastrar"
- Crie um novo usuário (ex: `teste123` / `senha123`)
- ✅ **Deve**: Criar conta, gerar avatar aleatório, e entrar no chat

**Validações**:
- Tente login com senha errada → ❌ Deve mostrar erro
- Tente cadastrar com username já existente → ❌ Deve mostrar erro

---

##### **2. Mensageria em Tempo Real (Core Feature)**

**Setup**: Abra 2 abas com usuários diferentes (Carlos e Ana)

**Teste em Sala Geral**:
1. **Aba Carlos**: Entre na sala "Geral"
2. **Aba Ana**: Entre na mesma sala "Geral"
3. **Aba Carlos**: Envie "Testando sincronização"
4. ✅ **Resultado**: Mensagem aparece instantaneamente em ambas as abas
5. **Aba Ana**: Responda "Funcionou!"
6. ✅ **Resultado**: Carlos vê a resposta em tempo real

**Teste em Mensagens Diretas (DM)**:
1. **Aba Carlos**: Clique em "Mensagens Diretas" → Selecione "Ana"
2. **Aba Ana**: Abra "Mensagens Diretas" → Selecione conversa com Carlos
3. Envie mensagens em ambas as direções
4. ✅ **Resultado**: Chat privado sincroniza entre abas

---

##### **3. Persistência de Dados**

1. Envie algumas mensagens
2. **Feche TODAS as abas** do navegador
3. Reabra o NexusChat
4. Faça login novamente
5. ✅ **Resultado**: Todas as mensagens continuam lá! (salvas em localStorage)

---

##### **4. Detalhes do Perfil**

1. Faça login
2. **Clique no seu avatar** (canto superior esquerdo)
3. ✅ **Deve abrir**: Modal com seus detalhes
4. Veja informações do perfil exibidas
5. Clique fora ou pressione **ESC** para fechar

---

##### **5. Status Online/Offline**

1. No modal de perfil (clique no avatar)
2. **Clique para alternar status** Online ↔ Offline
3. ✅ **Resultado**: 
   - Ícone muda
   - Status atualiza na sidebar
   - Em outra aba, o status é sincronizado

**Teste em 2 abas**:
- Aba 1: Mude Carlos para Offline
- Aba 2: Na lista de pessoas online, Carlos deve desaparecer

---

##### **6. Visualizar Pessoas Online**

1. Entre em uma **sala** (não mensagem direta)
2. No topo, veja o contador: "X pessoas online"
3. **Clique no contador** "X pessoas online"
4. ✅ **Deve abrir**: Modal mostrando todos os participantes
5. Veja quem está online (verde) e offline (cinza)
6. Pressione **ESC** para fechar

---

##### **7. Busca de Mensagens**

1. No topo da tela, veja a **barra de busca**
2. Digite uma palavra que aparece em alguma mensagem (ex: "bom")
3. ✅ **Deve abrir**: Painel lateral com resultados filtrados
4. Clique em uma mensagem nos resultados → Deve rolar até ela no chat
5. Clique no **X** para limpar a busca

---

##### **8. Carregamento Progressivo (Infinite Scroll)**

1. Entre em uma sala com muitas mensagens (ex: "Geral")
2. **Role até o topo** do chat (scroll para cima)
3. Quando chegar no topo, espere 1 segundo
4. ✅ **Resultado**: Aparece "Carregando mais..." e mais 10 mensagens antigas surgem
5. Repita até carregar todas

---

##### **9. Múltiplas Salas e Navegação**

**Salas Disponíveis**:
- **Favoritos** → "(Eu)", "BFFs"
- **Salas** → "Geral", "Músicas", "BFFs"
- **Mensagens Diretas** → Conversas 1-on-1

**Teste de Navegação**:
1. Clique em cada lista (Favoritos, Salas, Mensagens Diretas) para expandir/colapsar
2. Entre em diferentes salas
3. Envie mensagens em cada uma
4. Navegue entre salas
5. ✅ **Resultado**: Cada sala mantém seu histórico independente

---

##### **10. UI Responsiva**

**Desktop**:
- Sidebar visível por padrão
- Layout lado a lado

**Mobile** (F12 → Device Toolbar ou acesse do celular):
- Sidebar oculta por padrão
- **Clique no ícone de menu** (☰) no topo → Sidebar aparece
- Clique fora → Sidebar esconde
- ✅ Interface adaptada para telas pequenas

---

##### **11. Atalhos de Teclado**

- **ESC**: Fecha modais (perfil, busca, pessoas online, sidebar mobile)
- **Enter**: Envia mensagem

---

#### **📊 Checklist de Testes**

Use este checklist para validar todas as funcionalidades:

- [ ] Login com usuário existente funciona
- [ ] Cadastro de novo usuário funciona
- [ ] Validações de login/senha funcionam
- [ ] Mensagens sincronizam em tempo real entre abas
- [ ] Mensagens diretas (DM) funcionam
- [ ] Mensagens persistem após fechar/reabrir navegador
- [ ] Modal de perfil abre ao clicar no avatar
- [ ] Status online/offline alterna corretamente
- [ ] Modal de pessoas online mostra lista completa
- [ ] Busca filtra mensagens corretamente
- [ ] Infinite scroll carrega mensagens antigas
- [ ] Navegação entre salas funciona
- [ ] Sidebar colapsa/expande em mobile
- [ ] ESC fecha modais
- [ ] Interface responsiva em mobile

---

---

## 💻 Desenvolvimento Local

### Pré-requisitos

- Node.js 20.19+ ou 22.12+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nexuschat-front.git
cd nexuschat-front

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
# Acesse http://localhost:5173
```

### Build para Produção

```bash
npm run build
# Output: pasta /dist (pronta para deploy)
```

---

## 🏗️ Arquitetura e Tecnologias

### Stack Tecnológico

| Camada | Tecnologia | Propósito |
|--------|-----------|-----------|
| **Framework** | Vue 3 (Composition API) | Reatividade e componentização |
| **Build Tool** | Vite 7 | Build ultra-rápido com HMR |
| **Estado** | Pinia 3 | Gerenciamento centralizado de estado |
| **Roteamento** | Vue Router 4 | SPA routing |
| **Comunicação** | BroadcastChannel API | Sincronização entre abas |
| **Persistência** | localStorage | Armazenamento client-side |
| **HTTP Client** | Axios | Requisições HTTP |
| **Notificações** | Vue Toastification | Feedback visual ao usuário |
| **Deploy** | Netlify | Hospedagem estática com CI/CD |

### Como Funciona a Sincronização

**Versão Netlify** (Client-Side):
- Utiliza **BroadcastChannel API** nativa do navegador
- Sincroniza mensagens entre **abas do mesmo navegador**
- Dados persistem em **localStorage** para disponibilidade offline
- **Sem servidor backend** → Ideal para hospedagem estática

**Limitação intencional**: Navegadores diferentes não compartilham mensagens (isolamento por design). Para sincronização entre usuários reais, veja a versão Docker com WebSocket.

**Compatibilidade**:
- ✅ Chrome/Edge 54+
- ✅ Firefox 38+
- ✅ Safari 15.4+

---

## 📋 Funcionalidades Implementadas

### Autenticação e Usuários
- ✅ Sistema de login/cadastro com validação
- ✅ Gerenciamento de usuários mockados
- ✅ Status online/offline com toggle manual
- ✅ Avatares dinâmicos com [Pravatar](https://pravatar.cc/)
- ✅ Persistência de sessão (localStorage)

### Chat e Mensageria
- ✅ **Salas públicas** (Geral, Músicas, BFFs)
- ✅ **Mensagens diretas** 1-on-1
- ✅ **Sincronização em tempo real** entre abas (BroadcastChannel)
- ✅ **Persistência** de mensagens (localStorage)
- ✅ **Carregamento progressivo** (infinite scroll)
- ✅ Timestamps automáticos

### UI/UX
- ✅ Interface **responsiva** (mobile-first)
- ✅ Sidebar colapsável em mobile
- ✅ Busca de mensagens com highlight
- ✅ Modal de usuários online
- ✅ Notificações toast (vue-toastification)
- ✅ Scroll automático para novas mensagens
- ✅ Capitalização automática de mensagens

---

## 🎓 Conceitos Técnicos Demonstrados

Este projeto demonstra competências em:

- **Vue 3 Composition API** com reatividade avançada
- **Gerenciamento de estado** complexo com Pinia
- **Web APIs modernas** (BroadcastChannel, localStorage)
- **SPA Routing** com Vue Router e guards de navegação
- **Componentização** e reutilização de código
- **Responsividade** e design adaptativo
- **Performance optimization** (lazy loading, code splitting)
- **Deploy e CI/CD** com Netlify

---

## 🌐 Versão Docker (WebSocket Real)

Para uma versão com **sincronização entre navegadores diferentes** usando WebSocket:

📂 Veja o diretório: `/NexusChat-docker`
- Incluí **Docker Compose** para setup simplificado
- **Faye WebSocket Server** configurado
- Preparado para **integração com Rails backend**

---

## 🔮 Roadmap

### Em Desenvolvimento
- 🔨 Backend Ruby on Rails com Action Cable
- 🔨 Autenticação JWT
- 🔨 Banco de dados PostgreSQL

### Planejado
- 📱 Upload de arquivos e imagens
- 🔔 Notificações push
- 🌙 Dark mode
- 🔍 Busca avançada com filtros
- 👥 Criar salas customizadas
- ⚙️ Configurações de usuário

---

## 🤝 Contribuindo

> **⚠️ Importante**: A branch `main` é protegida. Contribuições devem ser feitas via Pull Request de uma branch separada.

**Se você quer contribuir com melhorias**:

1. **Fork** este repositório para sua conta
2. **Clone** seu fork:
   ```bash
   git clone https://github.com/SEU-USUARIO/nexuschat-front.git
   ```
3. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/MinhaFeature
   ```
4. **Faça suas alterações** e commit:
   ```bash
   git commit -m 'feat: Adiciona MinhaFeature incrível'
   ```
5. **Push** para seu fork:
   ```bash
   git push origin feature/MinhaFeature
   ```
6. **Abra um Pull Request** neste repositório original
7. **Aguarde review** - a autora irá revisar e decidir sobre o merge

**Diretrizes**:
- Descreva claramente o que sua PR faz
- Teste suas mudanças antes de enviar
- Siga os padrões de código do projeto
- Um PR por feature/correção

**Não tem permissão para**: Fazer push direto na `main` ❌

---

## 📝 Licença e Direitos Autorais

**Copyright © 2026 Rayssa. Todos os direitos reservados.**

Este código é **propriedade privada** e protegido por direitos autorais.

### ❌ Não Permitido (sem autorização prévia por escrito):

- Copiar o código total ou parcialmente
- Modificar ou criar trabalhos derivados
- Distribuir, publicar ou compartilhar o código
- Usar comercialmente
- Usar em outros projetos

### ✅ Permitido:

- **Visualizar** o código para fins de avaliação (recrutadores, entrevistas)
- **Testar** a aplicação online
- **Sugerir melhorias** via Pull Request (sem garantia de aceite)

### 💡 Para Recrutadores:

Este projeto está disponível publicamente apenas para **demonstração de habilidades técnicas** e avaliação em processos seletivos. O código não está disponível para uso ou redistribuição.

Para solicitar permissão de uso, entre em contato diretamente com a autora.

---

## 👩‍💻 Desenvolvedora

**Rayssa**  
Estudante de Ciência da Computação | Futura Full-Stack Developer

📧 Email: [seu-email@exemplo.com]  
💼 LinkedIn: [linkedin.com/in/seu-perfil]  
🐙 GitHub: [@seu-usuario](https://github.com/seu-usuario)

---

## � Agradecimentos

- [Vue.js](https://vuejs.org/) pela framework incrível
- [Vite](https://vitejs.dev/) pelo build tool ultra-rápido
- [Netlify](https://netlify.com/) pela hospedagem gratuita
- [Pravatar](https://pravatar.cc/) pelos avatares

---

<div align="center">

**Feito com ❤️ e Vue 3**

</div>

