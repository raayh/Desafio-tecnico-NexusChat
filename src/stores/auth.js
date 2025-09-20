import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [
      { nickname: 'rafinha_bastos', password: '123' },
      { nickname: 'carlos_almeida', password: '123' },
      { nickname: 'ana_carolina', password: '123' },
      { nickname: 'raayh', password: '123'}
    ],
    loggedInUser: null,
  }),
  
  actions: {
    init() {
      // localStorage.removeItem("users");

      const stored = localStorage.getItem("users");
      if (stored) {
        this.users = JSON.parse(stored);
      } else {
        // Se não existir nada salvo, inicializa com os usuários default
        localStorage.setItem("users", JSON.stringify(this.users));
      }
    },

    saveUsers() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },
    login(nickname, password) {
      const user = this.users.find(
        (user) => user.nickname === nickname);
      
      if(!user) {
        return {status: "not-found"}; 
      }

      if (user.password !== password){
        return {status: "wrong-password"};
      }

      this.loggedInUser = user;
      return {status: "success", user};
    },
    logout() {
      this.loggedInUser = null;
    },
    addUser(nickname, password){
      const exists = this.users.find(
        (user) => user.nickname === nickname);

      if(exists){
        return {status: "already-exists"}
      }

      const newUser = {nickname,password};
      this.users.push(newUser);
      this.loggedInUser = newUser;

      this.saveUsers();

      return {status: "created", user: newUser}
    },
  },
})