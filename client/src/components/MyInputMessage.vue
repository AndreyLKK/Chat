<template>
  <form class="chat__form">
    <input
      class="chat__message"
      type="text"
      placeholder="Введите сообщение..."
      v-model="message"
    />
    <button class="chat__btn" type="submit" @click.prevent="handlerSend">
      <p>Отправить</p>
    </button>
  </form>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { getFromLocalStorage } from "@/helpers/localStorage.ts";
import { UserMessage } from "@/types";
import { CustomWebSocket } from "@/services/WebSocket.js";

const props = defineProps({
  socket: Object,
});

const message = ref<string>("");

const handlerSend = (): void => {
  if (message.value && (getFromLocalStorage("user") as string)) {
    const getNameLs = getFromLocalStorage("user");

    const webSocket = new CustomWebSocket(props.socket);
    webSocket.createMessage(getNameLs, message.value);
    webSocket.saveHistoryMsg(getNameLs, message.value);

    message.value = "";
  }
};
</script>

<style lang="scss">
.chat__message {
  width: 100%;
  background-color: transparent;
  color: aliceblue;
}

.chat__form {
  display: flex;
  margin-top: 10px;
}
</style>
