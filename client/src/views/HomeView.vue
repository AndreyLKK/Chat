<template>
  <div class="home">
    <input class="home__input" type="text" v-model="name" />
    <button class="home__button" @click="enterСhat()">Войти в чат</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { saveToLocalStorage } from "@/helpers/localStorage";
import { CustomWebSocket } from "@/services/WebSocket";

const props = defineProps({
  socket: Object,
});

const router = useRouter();

const name = ref<string>("");

const enterСhat = (): void => {
  saveToLocalStorage("user", name.value);
  const webSocket = new CustomWebSocket(props.socket);
  webSocket.createUser(name.value);
  router.push({ name: "chat" });
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.home__input {
  padding: 10px;
  border: 1px solid #cecece;
  margin-right: 40px;
}

.home__button {
  padding: 10px;
  background-color: #ffa8a8;
  border-radius: 10px;
}
</style>
