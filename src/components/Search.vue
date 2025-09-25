<template>
    <div class="container">
        <div class="box" v-for="(message, index) in searchMessage" :key="index" >
            <div class="box-message" v-if="searchMessage.length  > 0">
                <img :src="'https://i.pravatar.cc/150?img=' + message.id" class="message-avatar-image">

                <div  class="search-message">
                    <div class="status-msg">
                        <p class="user-name-message" v-if="!isMyMessage(message)">{{message.nickname}}</p>
                        <p class="user-name-message" v-else>Você</p>
                        <p class="wd-message">{{ formatWeekday(message.date)}}</p>
                        <p class="hour-message">{{ formatTime(message.date) }}</p>
                    </div>
                       
                    <div class="message-ballo">
                        <p class="text-msg">{{message.text}}</p>
                    </div>
                </div>

            </div>
            
            <p v-else class="text-msg"> Nenhuma mensagem encontrada </p>
        </div>
    </div>
</template>

<script>
import { useChatStore } from '@/stores/chat';
import ChatMessage from '@/components/ChatMessage.vue'

export default {
    props: {
        searchText:{
            type: String
        },
        showSearchModal:{
            type: Boolean
        }
    },
    components:{
        ChatMessage
    },
    computed: {
        chatStore (){
            return useChatStore();
        },
        currentMessages() {
         return this.chatStore.messagesByRoom[this.chatStore.activeRoom] || []
        },
        searchMessage(){
         let itemsFiltered = [];
         itemsFiltered = this.currentMessages.filter((message) => {
            return (message.text.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
         }); 
         return itemsFiltered;
      }
    },
    methods:{
        isMyMessage(message) {
          // Lógica para saber se a mensagem é do usuário logado
          return message.nickname === this.chatStore.loggedInUser?.nickname;
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
    
    overflow-y: auto;
}

.box {
    border: 1px solid #B4A7DF;
    border-radius: 10px;
    padding: 5px;

    margin-bottom: 15px;

    background-color: #C3B9E4;
    color: #3D2450;
}

.box-message{
    display: flex;
    flex-direction: row;

    align-items: center;
}

.status-msg{
   display: inline-flex;
   flex-direction: row;
   white-space: nowrap;
   gap: 8px;

   font-weight: 250;
   font-size: 13px;
}

.message-avatar-image{
   width: 36px;
   height: 36px;

   border-radius: 50%; 
   object-fit: cover;

   margin-right: 10px;
}

.message-ballo{
    max-width: 80%;
}

.text-msg{
   max-width: 100%;
   
   overflow-wrap: break-word;
}

</style>