<template>
  <ul class="user" ref="messagesContainer">
    <li
      class="user__content"
      v-for="(msg, idx) in messages"
      :key="idx"
      :class="{
        'user__content--me': msg?.name === authStore.user.email,
        'user__content--other': msg?.name !== authStore.user.email,
      }"
    >
      <p class="user__name">
        {{ nameDefinition(msg) }}
      </p>
      <p class="user__message">
        {{ msg?.message }}
      </p>
      <button @click="messageDeletionEvent(msg, idx)">удалить</button>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import { getFromLocalStorage } from "@/helpers/localStorage.ts";
// import { UserMessage } from "@/types";
import {
  createConnection,
  getHistoryMsg,
  eventGetHistory,
  responseMessage,
  deleteMessageInArray,
} from "@/services/WebSocket.js";
import { useAuth } from "@/stores";
import { useConfirmDelete } from "@/stores";

const confirmDeleteStore = useConfirmDelete();

const authStore = useAuth();

const messages = ref([]);

const messagesContainer = ref(null);

onMounted(() => {
  createConnection();

  eventGetHistory();
  getHistoryMsg((data) => {
    messages.value = data;
  });
});

const messageDeletionEvent = async (msg) => {
  try {
    const result = await confirmDeleteStore.confirmDeleteMessage();

    if (result) {
      deleteMessageInArray(msg);
      getHistoryMsg((data) => {
        messages.value = data;
      });
    }
  } catch (error) {
    console.log("Удаление отменено", error);
  }
};

const nameDefinition = (msg) => {
  return msg?.name === authStore.user.email ? "Вы" : msg?.name;
};

responseMessage((data) => {
  messages.value.push(data);
  nextTick(() => {
    scrollToBottom();
  });
});

const scrollToBottom = () => {
  if (messagesContainer.value) {
    const lastMessage = messagesContainer.value.lastElementChild;
    if (lastMessage) {
      lastMessage.scrollIntoView({ behavior: "auto", block: "end" });
    }
  }
};

onBeforeUnmount(() => {
  const socket = createConnection();
  socket.off("responseMessage");
});
</script>

<style scoped lang="scss">
.user {
  overflow-y: auto;
  height: auto;
}

.user::-webkit-scrollbar {
  display: none;
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
