<template>
   <div class="body">

      <div class="sidebar">

         <div class="user-info">

            <div class="avatar">
               <img src="https://i.pravatar.cc/150?img=30" alt="" class="avatar-image">
               <p class="avatar-name">Raayh</p>
            </div>
            <img src="../assets/icons/more.png" alt="" class="more-image">
         </div>

         <div class="lists">
           <SidebarLists 
            v-for="(list, index) in chatStore.lists"
            :key="index"
            :list="list"
           />
         </div>

         <div class="logo">
            <img src="@/assets/images/logo.png" alt="" class="logo-image">
         </div>
        
      </div>

      <div class="chat">

         <div class="top-bar">

            <div class="chat-info">
               <h3 class="room-name"> {{ chatStore.activeRoom || "Selecione uma sala" }} </h3>
               <p class="online-status">10 pessoas online</p>
            </div>

            <div class="topBar-actions">
               <img src="../assets/icons/notification.png" alt="" class="notifications">
               <img src="../assets/icons/Users.png" alt="" class="participants">
               <div class="search">
                  <input type="text" class="search-text" placeholder="Buscar">
                  <img src="../assets/icons/search.png" alt="" class="search-icon">
               </div>

            </div>

         </div>

         <div class="messages-block">
            
            <ChatMessage 
            v-for="message in chatStore.messages"
            :key="message.id"
            :message="message"
            :id="message.id"
            :class="{
               'my-messages': message.nickname === chatStore.userNickname,
               'others-messages': message.nickname !== chatStore.userNickname
            }"/>

         </div>

         <div class="message-bar">
            <input type="text" class="new-message" placeholder="Digite sua mensagem aqui...">
            <div class="new-message-icons">
               <img src="" alt="" class="attchment">
               <img src="" alt="" class="emoji">
               <img src="" alt="" class="text-editor">
               <img src="../assets/icons/send_message.png" alt="" class="send">
            </div>
         </div>

      </div>

   </div>
</template>

<script>
import { useChatStore } from '../stores/chat';
import SidebarLists from '@/components/SidebarLists.vue';
import ChatMessage from '@/components/ChatMessage.vue';

export default{
   components:{
      SidebarLists,
      ChatMessage
   },
   computed: {
      chatStore() {
         return useChatStore();
      }
   },
}

</script>

<style scoped>

.body {
  display: flex;
  flex-direction: row;        
  justify-content: space-between;   
  align-items: center;      
}

.sidebar{
   display: flex;
   flex-direction: column;        
   justify-content: space-between;   

   width: 25%;
   height: 100vh;            
  
   background-color: #583BBF;
   color: white;   
}

/* Cabeçalho do sidebar */

.user-info{
   display: flex;
   flex-direction: row; 
   justify-content: space-between; 

   align-items: center;

   padding: 12px 25px;

   border-bottom: 1px solid #C8BEEA;
}

.avatar{
   display: flex;
   flex-direction: row;
}

.avatar-image{
   width: 50px;
   height: 50px;

   border-radius: 50%; 
   object-fit: cover;

   margin-right: 20px;
}

.avatar-name{
   font-size: 20px;
   font-weight: bold;

   margin: auto;

   color: #C8BEEA;
}

/* Listas de favoritos, salas e directs */

.lists{
   display: flex;
   flex-direction: column;
   padding: 40px 25px;
   flex-grow: 1;
}

/* Rodapé sidebar */

.logo{
   padding: 0px 0px 10px 25px;
}

.logo-image{
   width: 44px;
}

/* Lado da conversa */

.chat{
   display: flex;
   flex-direction: column;

   width: 75%;
   height: 100vh;            

   background-color: #C8BEEA;
   color: white;
}

/* Cabeçalho da conversa */

.top-bar{
   display: flex;
   flex-direction: row;
   flex: 0 0 auto;
   justify-content: space-between;

   padding: 15px 40px;

   border-bottom: 1px solid #B4A7DF;

   color: #3D2450;
}

.chat-info > .online-status{
   opacity: 60%;
}

.online-status:hover{
   font-weight: 500;
}

/* Icones de ação */

.topBar-actions{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
}

.notifications, .participants{
   padding: 10px;
}

.search{
   display: flex;
   flex-direction: row;

   position: relative;
   display: inline-block;

   padding-left: 10px;
}

.search-text{
   border: 1px solid #BBAFE3;
   border-radius: 8px;

   background-color: #C3B9E4;
   color: #3D2450;

   padding: 6px 21px 6px 15px;
}

.search-text::placeholder{
   color: #3D2450;
}

.search-icon{
   position: absolute;

   right: 10px;
   top: 25%;
}

/* Bloco das mensagens */
.messages-block{
   display: flex;
   flex-direction: column;
   flex: 1;
   overflow-y: auto;

   gap: 20px;
   padding: 30px 40px;
}


/* Input de mensagem */

.message-bar {
   flex: 0 0 auto;
   display: flex;
   justify-content: space-around;
   margin: 0px 35px 19px 35px;
   position: relative;
   /* max-width: 100%; */
}

.new-message {
   flex: 1;
   border: none;
   border-radius: 10px;

   background-color: white;
   color: #3D2450;

   padding: 18px 45px;
}

.new-message-icons{
   position: absolute;
   top: 22%;
   right: 45px;
}

</style>
