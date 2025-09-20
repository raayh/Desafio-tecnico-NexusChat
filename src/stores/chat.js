import { defineStore } from 'pinia'

export const useChatStore = defineStore("chat", {
    // state: () => ({
    //     favorites: [ "Fulano(eu)", "BFFs"],
    //     rooms: [ "Geral", "Músicas", "BFFs"],
    //     directs: [ "Mat", "Ana Carolina"],
    //     activeRoom: null,
    // }),
    state: () => ({
       lists: [
          { title: 'Favoritos', items: [ "Fulano(eu)", "BFFs"], isOpen: false},
          { title: 'Salas', items: [ "Geral", "Músicas", "BFFs"], isOpen: false},
          { title: 'Mensagens Diretas', items: [ "Mat", "Ana Carolina"], isOpen: false},
       ],
       activeRoom: null,
       userNickname: 'Raayh', // <--- Nickname para diferenciar suas mensagens
       
       messages: [ // <--- Array de mensagens para a tela
          { 
             id: 1, 
             nickname: 'Rafinha Bastos', 
             text: 'Olá a todos! Como vocês estão?', 
             date: '2025-09-19T09:10:00Z' 
          },
          { 
             id: 2, 
             nickname: 'Carlos Almeida', 
             text: 'Opa, tudo bem por aqui! E com você?', 
             date: '2025-09-19T09:12:00Z' 
          },
          { id: 3, 
             nickname: 'Raayh', 
             text: 'Também estou bem, obrigado por perguntar!', 
             date: '2025-09-19T09:14:00Z' 
          },
          { 
             id: 4, 
             nickname: 'Ana Carolina', 
             text: 'Cheguei! Tive que resolver um problema com a internet.', 
             date: '2025-09-19T09:16:00Z' 
          },
          { 
             id: 5, 
             nickname: 'Mat', 
             text: 'Sem problemas, Ana. Estamos apenas começando.', 
             date: '2025-09-19T09:17:00Z' 
          },
          { 
             id: 6, 
             nickname: 'Raayh', 
             text: 'O bom é que agora você está aqui!', 
             date: '2025-09-19T09:18:00Z' 
          }
       ]
    }),

    actions: {
        init() {
            localStorage.setItem("lists", JSON.stringify(this.lists));
            localStorage.setItem("messages", JSON.stringify(this.messages));
            localStorage.setItem("room", JSON.stringify(this.activeRoom));  
        },
        setActiveRoom(room){
            this.activeRoom = room;
        }
    }
})