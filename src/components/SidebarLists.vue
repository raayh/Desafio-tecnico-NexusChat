<template>
    <div class="lists">
        <div v-for="(list, index) in chatStore.lists" :key="index">
            <div @click="toggleList(list)" class="list-header">
                <img src="../assets/icons/more2.png" :class="{ 'collapsed-icon': list.isOpen }">
                <p class="title-list">{{list.title}}</p>
            </div>
    
            <ul v-if="list.isOpen" class="list-content">
                <li v-for="item in list.items" 
                    :key="item" 
                    class="menu-item"
                    @click="goToChat(item)" 
                    :class="{active: chatStore.activeRoom === item}">
                
                    <p>{{item}}</p>
            
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { useChatStore } from '@/stores/chat';

export default {
    props:{
        lists:{
            type: Object,
        }
    },
    computed: {
         chatStore() {
            return useChatStore();
        }
    },
    
    methods: {
        // isOpen(){
        //     this.chatStore.lists.map(() => true);
        // },
        toggleList(list) {
            list.isOpen = !list.isOpen;
        },
        goToChat(item){
            this.$router.push({name: 'chat-room', params: {roomName: item} });
            this.chatStore.setActiveRoom(item);
            console.log("Entrou na sala:", item);
        },
        
    }
}
</script>

<style>
.lists{
   display: flex;
   flex-direction: column;
   padding: 40px 25px;

   gap: 20px;
   flex-grow: 1;
}

.list-header{
   display: flex;
   flex-direction: row; 
   align-items: center;
   
   margin-bottom: 8px;
   
   cursor: pointer;
}

.list-header img {
   margin-right: 10px;
   transition: transform 0.3s ease;
}

.list-header img.collapsed-icon {
    transform: rotate(90deg);
}

.list-header:hover{
   font-weight: 500;
}

.list-content {
   list-style: none; 
   padding: 0;
   margin-bottom: 10px;
   overflow: hidden; 
}

.menu-item {
   display: flex;
   align-items: center;

   padding: 5px 15px;
   margin-bottom: 7px;

   border-radius: 8px;

   cursor: pointer;
   transition: background-color 0.2s ease;
}

.menu-item:hover {
   background-color: rgba(255, 255, 255, 0.1);
}

.active {
   background-color: rgba(255, 255, 255, 0.1);
}
</style>