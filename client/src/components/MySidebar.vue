<template>
  <div class="users">
    <h2 class="users__title">Users</h2>
    <ul class="users__list">
      <li class="users__item" v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
    <button @click="clearHistoryMessage">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { User } from "@/types";
import { CustomWebSocket } from "@/services/WebSocket.js";

const props = defineProps({
  socket: Object,
});

const users = ref([]);

const webSocket = new CustomWebSocket(props.socket, users);
webSocket.init();
</script>

<style lang="scss" scoped>
.users {
  padding: 30px 20px 0px 20px;
  text-align: left;
  border-right: 1px solid #cecece;
}

.users__title {
  margin-bottom: 20px;
}

.users__item:not(:last-child) {
  margin-bottom: 10px;
}
</style>
