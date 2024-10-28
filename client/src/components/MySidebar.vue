<template>
  <div class="users">
    <h2 class="users__title">Users</h2>
    <ul class="users__list" v-for="user in users" :key="user.id">
      <li class="users__item">{{ user.name }}</li>
    </ul>
    <button @click="clearHistoryMessage">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { User } from "@/types";

const props = defineProps({
  socket: Object,
});

const users = ref([]);

props.socket.on("responseUser", (data: User): void => {
  users.value = data;
});

props.socket.on("updateUsers", (data: User): void => {
  users.value = data;
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
