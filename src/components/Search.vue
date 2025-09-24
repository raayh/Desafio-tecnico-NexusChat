<template>
    <div class="container" @keyup.esc="showSearchModal=false">
        <div class="box" v-for="(message, index) in searchMessage" :key="index">
            <p class="room-title">
                {{ message.room }}
            </p>
            <div class="box-message" v-if="searchMessage.length  >= 1">
             
                <div class="status-message">
                    <p class="user-name-message" v-if="!isMyMessage(message)">{{message.nickname}}</p>
                    <p class="user-name-message" v-else>Você</p>
                    <p class="wd-message">{{ formatWeekday(message.date)}}</p>
                    <p class="hour-message">{{ formatTime(message.date) }}</p>
                </div>
                <div  class="message">
                        <img 
                        v-if="!isMyMessage(message)"
                        :src="'https://i.pravatar.cc/150?img=' + message.id" 
                        class="message-avatar-image">
                        
                        <div class="messages">
                            <p :class="textMessageClasses(message)">{{message.text}}</p>
                        </div>
                </div>

            </div>
            
            <div v-else class="noResult"> console.log(Nenhuma mensagem foi encontrada) </div>
        </div>

    </div>
</template>

<script>
import { useChatStore } from '@/stores/chat';
import ChatMessage from '@/components/ChatMessage.vue'

export default {
    props: {
        searchMessage:{
            type: Object
        }
    },
    components:{
        ChatMessage
    },
    computed: {
        chatStore (){
            return useChatStore;
        }
    },
    methods:{
        isMyMessage(message) {
          // Lógica para saber se a mensagem é do usuário logado
          return message.nickname === this.chatStore.loggedInUser?.nickname;
        },
        messageClasses(message) {
          // Classe para o alinhamento da mensagem
          return {
              'my-messages': this.isMyMessage(message),
              'others-messages': !this.isMyMessage(message)
          };
        },
        textMessageClasses(message) {
          // Classe para a cor da bolha do chat
          return {
              'my-text': this.isMyMessage(message),
              'text-message': !this.isMyMessage(message)
          };
        },
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
.container {
    display: flex;
    flex-direction: column;

    padding: 20px;
    width: 260px;

    background-color: #C8BEEA;
    border-left: 1px solid #B4A7DF;    
}

.box {
    border: 1px solid #B4A7DF;
    border-radius: 10px;
    padding: 5px;

    margin-bottom: 15px;

    background-color: #C3B9E4;
    color: #3D2450;
}

</style>