<template>
  <div class="chat">
    <button class="chat__leave" @click="handlerLeave">Покинуть чат</button>
    <div class="chat__line"></div>
    <div class="chat__flex">
      <MyMessagesUsers :socket="socket" :messages="messages" />
    </div>
    <MyInputMessage :socket="socket" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onBeforeUnmount, onMounted } from "vue";
import MyMessagesUsers from "@/components/MyMessagesUsers.vue";
import MyInputMessage from "@/components/MyInputMessage.vue";
import { useRouter } from "vue-router";
import { removeFromLocalStorage } from "@/helpers/localStorage.ts";
import { UserMessage } from "@/types";
import { CustomWebSocket } from "@/services/WebSocket.js";

const props = defineProps({
  socket: Object,
});

const router = useRouter();

const messages = ref<UserMessage[]>([]);

const handleHistoryReceived = (data: UserMessage): void => {
  messages.value = data;
};

onMounted(() => {
  // props.socket.emit("getHistory");

  // props.socket.on("getHistory", handleHistoryReceived);
  const webSocket = new CustomWebSocket(props.socket);
  webSocket.eventGetHistory();
  webSocket.getHistory(handleHistoryReceived);
});

const handlerLeave = () => {
  removeFromLocalStorage("user");
  props.socket.emit("removeUser", { id: props.socket.id });
  router.push("/");
};

onBeforeUnmount(() => {
  props.socket.off("getHistory", handleHistoryReceived);
});

props.socket.on("response", (data: UserMessage): void => {
  messages.value.push(data);
});
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
