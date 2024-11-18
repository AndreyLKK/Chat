<template>
  <div class="chat">
    <button class="chat__leave" @click="handlerLeave">Покинуть чат</button>
    <div class="chat__line"></div>
    <div class="chat__flex">
      <MyMessagesUsers />
    </div>
    <MyInputMessage />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import MyMessagesUsers from "@/components/MyMessagesUsers.vue";
import MyInputMessage from "@/components/MyInputMessage.vue";
import { useAuth } from "@/stores";
import { removeUser } from "@/services/WebSocket";

const authStore = useAuth();

const router = useRouter();

const handlerLeave = () => {
  removeUser(authStore.user.email);
  router.push({ name: "main" });
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px 20px 0px 20px;
}

.chat__leave {
  padding: 10px;
  background-color: #ffa8a8;
  border-radius: 10px;
  display: block;
  margin-left: auto;
}

.chat__line {
  border-bottom: 1px solid #cecece;
  margin: 40px 0px;
}

.chat__flex {
  flex: 1;
  overflow-y: auto;
  max-height: calc(100vh - 140px);
}
</style>
