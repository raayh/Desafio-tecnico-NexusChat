<template>

    <div>
        <div class="status-message">
            <p class="user-name-message" v-if="message.nickname !== chatStore.userNickname">{{message.nickname}}</p>
            <p class="user-name-message" v-else>Você</p>
            <p class="wd-message">{{ formatWeekday(message.date)}}</p>
            <p class="hour-message">{{ formatTime(message.date) }}</p>
        </div>
        <div  class="message">
            <img 
            v-if="message.nickname !== chatStore.userNickname"
            :src="'https://i.pravatar.cc/150?img=1' + (id + 1)" 
            class="message-avatar-image">

            <div class="messages">
                <p :class="{ 
                'my-text': message.nickname === chatStore.userNickname, 
                'text-message': message.nickname !== chatStore.userNickname }">
                    {{message.text}}
                </p>
            </div>
        </div>
    </div>
    
</template>

<script>
import { useChatStore } from '../stores/chat';

export default{
    props:{
        message:{
            type: Object,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
      chatStore() {
         return useChatStore();
      }
   },
   methods:{
      formatWeekday(dateString) {
         const date = new Date(dateString);
         const options = { weekday: 'long' };
         return new Intl.DateTimeFormat('pt-BR', options).format(date);
      },

      formatTime(dateString) {
         const date = new Date(dateString);
         const options = { hour: '2-digit', minute: '2-digit', hour12: false };
         return new Intl.DateTimeFormat('pt-BR', options).format(date);
      }
   }
}
</script>

<style>
/* Mensagens das outras pessoas*/
.others-messages{
   display: inline-flex;
   flex-direction: column;
   align-items: flex-start;
   max-width: 70%;

   color: black;
}

.status-message{
   display: inline-flex;
   flex-direction: row;
   white-space: nowrap;
   gap: 8px;

   padding-left: 50px;

   font-weight: 250;
   font-size: 13px;
}

/* Container do avatar e da mensagem */
.message{
   display: flex;
   flex-direction: row;
   align-items: top;
   text-align: start;

   margin-top: 5px;

   font-weight:400;
}

.message-avatar-image{
   width: 36px;
   height: 36px;

   border-radius: 50%; 
   object-fit: cover;

   margin-right: 10px;
}

/* Container com os textos */
.messages{
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;

   gap: 5px;
}

.text-message{
   padding: 10px 15px;
   border-radius: 10px;
   max-width: 100%;
   
   overflow-wrap: break-word;
   background-color: white;
}

/* Minhas mensagens */
.my-messages {
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  max-width: 60%; /* limite proporcional ao container */
  margin-left: auto; /* empurra para a direita */

  color: black;
}

.my-text{
   padding: 10px 15px;
   border-radius: 10px;
   max-width: 100%;
   
   word-wrap: break-word;
   background-color: #E3D9FF;
}

</style>