<template>
    <div class="container">
        
        <img :src="chatStore.avatarUrl(chatStore.loggedInUser?.nickname)"  alt="" class="avatar-image">

        <p class="avatar-name">{{chatStore.loggedInUser?.nickname}}</p>

       <div class="actions">
            <div class="status">
                <!-- <p> {{ isDirectMessage.online ? 'Online' : 'Offline' }} </p> -->
            </div>
            <button class="logout">Sair</button>
            <div class="activeRooms"> 
                Salas ativas:
            </div>
       </div>

    </div>
</template>

<script>
import { useChatStore } from '../stores/chat';

export default{
    computed: {
        chatStore() {
          return useChatStore();
        },
     }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;

    border-radius: 10px;
    margin-left: 30px;
    margin-top: 10px;
    padding: 10px;

    background-color: #C8BEEA;
    color: #3D2450;
    
    overflow-y: auto;
}

.avatar-image{
   width: 50px;
   height: 50px;

   border-radius: 50%; 
   object-fit: cover;

   margin-right: 20px;
}

p::first-letter {
  text-transform: uppercase;
}
</style>