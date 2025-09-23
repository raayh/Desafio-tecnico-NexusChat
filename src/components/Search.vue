<template>
    <div class="container" @keyup.esc="showSearchModal=false">
        <div class="box">
            <p class="room-title">
                {{  }}
            </p>
            <div class="box-message">
             
            </div>
        </div>

    </div>
</template>

<script>
import ChatMessage from '@/components/ChatMessage.vue'
import { useChatStore } from '@/stores/chat';

export default {
    components:{
        ChatMessage
    },
    computed: {
        chatStore (){
            return useChatStore;
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

    background-color: #C3B9E4;
}

</style>