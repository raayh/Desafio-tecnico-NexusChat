  <script>
    import { useAuthStore } from '../stores/store';
  
    export default {
      data (){
        return {
          nickname: '',
          senha: '',
          erro: null
        };
      },
      methods: {
        login() {
          const authStore = useAuthStore();

          const loginSucesso = authStore.login(this.nickname, this.senha);
  
          if(loginSucesso){
            this.$router.push('/chat');
          } else {
            this.erro = 'Nickname ou senha invalidos';
          }
  
        },
      },
    };
  </script>

<template>
  <div class="body">

      <div class="cabecalho">
        <img src="@/assets/images/logo.png" alt="" class="img-logo">
        <h1 class="text-logo">Nexus</h1>
      </div>

      <div class="box-login">
        
        <p class="titulo-login">Faça login ou cadastre-se</p>
        
        <input type="text" v-model="nickname" placeholder="Insira seu nickname">
        <input type="text" v-model="senha" placeholder="Insira sua senha">

        <div class="btn">
          <button class="criar">Criar</button>
          <button @click="login" class="Entrar">Entrar</button>
        </div>

        <p v-if="erro" style="color: red; margin-top: 10px;">{{ erro }}</p>

      </div>
    </div>
</template>


<style scoped>
.body {
  display: flex;
  flex-direction: column;     /* empilha os elementos: cabeçalho em cima, box embaixo */
  justify-content: justify; /*distribui espaço entre topo e meio */
  align-items: center;        /* centraliza horizontal */
  
  padding: 25px;
  height: 100vh;            /* ocupa altura total da tela */
  
  background-color: #583BBF;
  color: white;

  /* Imagem de fundo */
  background-image: url('@/assets/images/fundo.png');  /* caminho da imagem */
  background-size: cover;                          /* cobre toda a tela */
  background-position: center;                     /* centraliza a imagem */
  background-repeat: no-repeat;                    /* não repete */
}

.cabecalho {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.img-logo{
  width: 66px;
  height: 66px;
  margin-right: 10px;
}

.text-logo{
  font-size: 60px;
  font-weight: bold;
  margin:auto;
}

.box-login{
  display: flex;
  flex-direction: column;

  /* width: 496px; */

  padding: 39px 80px;
  margin: 250px 0px;
  align-items: center;

  border-radius: 15px;
  background-color: rgba(200, 190, 234, 76%);
}

.titulo-login{
  color:black;
  font-size: 24px;
  font-weight: bold;

  margin-bottom: 25px;
}

input{
  border: none;
  border-radius: 5px;

  margin-bottom: 8px;
  padding-left: 10px;

  min-height: 40px;
  min-width: 280px;
}

.btn{
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  max-width: 280px; /* mesma largura dos inputs */

  padding: 15px;
}

button{
  /* flex: 1; */
  border: none;
  border-radius: 20px;

  color: white;
  
  background-color: #583BBF;
  font-size: 16px;
  font-weight: bold;

  padding: 8px 40px;
}



</style>
