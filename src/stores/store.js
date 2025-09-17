import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    mockedUsers: [
      { nickname: 'rafinha_bastos', senha: '123' },
      { nickname: 'carlos_almeida', senha: '123' },
      { nickname: 'ana_carolina', senha: '123' },
      { nickname: 'raayh', senha: '123'}
    ],
    loggedInUser: null,
  }),
  actions: {
    login(nickname, senha) {
      const user = this.mockedUsers.find(
        (user) => user.nickname === nickname && user.senha === senha
      );
      if(user) {
        this.loggedInUser = user;
        return true; // A store retorna apenas o resultado da lógica
      }
      return false;
    },
    logout() {
      this.loggedInUser = null;
    }
  },  
});
