import { defineStore } from 'pinia'
import axios from 'axios';

function normalizeNickname(nickname) {
  return nickname.trim().toLowerCase();
}

export const useChatStore = defineStore("chat", {
   state: () => ({
      users: [
         { nickname: 'rafinha_bastos', password: '123' },
         { nickname: 'carlos_almeida', password: '123' },
         { nickname: 'ana', password: '123' },
         { nickname: 'raayh', password: '123'}
      ],
      loggedInUser: null,
      lists: [
          { title: 'Favoritos', items: [ "Fulano(eu)", "BFFs"], isOpen: false},
          { title: 'Salas', items: [ "Geral", "Músicas", "BFFs"], isOpen: false},
          { title: 'Mensagens Diretas', items: [ "Mat", "Ana"], isOpen: false},
      ],
      activeRoom: 'Geral',       
      messagesByRoom: {},
      newMessage: []
    }),

    actions: {
     // Inicializa a store carregando do localStorage
      async init() {
         this.users = JSON.parse(localStorage.getItem("users")) || this.users;
         this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
         this.activeRoom = JSON.parse(localStorage.getItem("activeRoom")) || "Geral";
         this.messagesByRoom = JSON.parse(localStorage.getItem("messagesByRoom")) || {};

         // Se não tiver nada no localStorage ainda, carrega do arquivo JSON
         if (Object.keys(this.messagesByRoom).length === 0) {
            try {
               const response = await axios.get('/messages.json');
               this.messagesByRoom = response.data;
               localStorage.setItem("messagesByRoom", JSON.stringify(this.messagesByRoom));
            } catch (error) {
               console.error("Erro ao carregar mensagens:", error);
            }
         }
      },

     // ---------- AUTH ----------
      login(nickname, password) {
         const normalizedNickname = normalizeNickname(nickname);
         const user = this.users.find(user => user.nickname === normalizedNickname);
         
         if(!user) return { status: "not-found" }; 
         if (user.password !== password) return { status: "wrong-password" };

         this.loggedInUser = user;
         localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));
         return { status: "success", user };
      },

      addUser(nickname, password) {
         const normalizedNickname = normalizeNickname(nickname);
         const exists = this.users.find(user => user.nickname === normalizedNickname);
         if(exists) return { status: "already-exists" };

         const newUser = { nickname: normalizedNickname, password };
         this.users.push(newUser);
         this.loggedInUser = newUser;
            
         localStorage.setItem("users", JSON.stringify(this.users));
         localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));

         return { status: "created", user: newUser };
      },
      // ---------- ROOMS ----------
      setActiveRoom(room){
         this.activeRoom = room;
         localStorage.setItem("activeRoom", JSON.stringify(this.activeRoom));
      },

      // ---------- MESSAGES ----------
      addNewMessage(newMessage){
         if (!this.messagesByRoom[this.activeRoom]) {
            this.messagesByRoom[this.activeRoom] = [];
         }
         this.messagesByRoom[this.activeRoom].push(newMessage);
         localStorage.setItem("messagesByRoom", JSON.stringify(this.messagesByRoom));
      }
    }
})