<template>
  <div class="users">
    <h2 class="users__title">Users</h2>
    <ul class="users__list">
      <li class="users__item" v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// import { User } from "@/types";
// import { CustomWebSocket } from "@/services/WebSocket.js";
import { useAuth } from "@/stores";
import {
  createConnection,
  responseUser,
  updateUsers,
  readyClient,
} from "@/services/WebSocket";

const authStore = useAuth();

// const props = defineProps({
//   socket: Object,
// });

const users = ref([]);

onMounted(() => {
  if (authStore.user && authStore.user.email) {
    // Устанавливаем WebSocket-соединение

    createConnection();
    // console.log("asdzxc", users.value);

    // Загружаем начальный список пользователей
    readyClient();
    responseUser((usersList) => {
      users.value = usersList;
    });

    // Подписываемся на обновления через WebSocket
    updateUsers((updatedUsers) => {
      users.value = updatedUsers;
    });
  }
});
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
