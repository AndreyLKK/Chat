<template>
  <ul class="user">
    <li
      class="user__content"
      v-for="(msg, idx) in messages"
      :key="idx"
      :class="{
        'user__content--me': msg?.name === authStore.user.email,
        'user__content--other': msg?.name !== authStore.user.email,
      }"
    >
      <p class="user__name">{{ msg?.name }}</p>
      <p class="user__message">
        {{ msg?.message }}
      </p>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { getFromLocalStorage } from "@/helpers/localStorage.ts";
// import { UserMessage } from "@/types";
import {
  createConnection,
  getHistoryMsg,
  eventGetHistory,
  responseMessage,
} from "@/services/WebSocket.js";
import { useAuth } from "@/stores";

const authStore = useAuth();

const messages = ref([]);

onMounted(() => {
  createConnection();

  eventGetHistory();
  getHistoryMsg((data) => {
    messages.value = data;
  });
});

responseMessage((data) => {
  messages.value.push(data);
});

onBeforeUnmount(() => {
  const socket = createConnection();
  socket.off("responseMessage");
});
</script>

<style scoped lang="scss">
.user {
  overflow-y: auto;
}
.user__content {
  text-align: right;
}

.user__message {
  margin-left: auto;
  padding: 10px;
  background-color: #182539;
  border-radius: 10px;
  width: fit-content;
  flex: 1;
}

.user__content--other p {
  text-align: left;
  margin-left: 0px;
}

.user__content--other .user__message {
  background-color: #a588f3;
}

.user__content:not(:last-child) {
  margin-bottom: 20px;
}
</style>
