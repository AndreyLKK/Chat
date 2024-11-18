<template>
  <div class="main-page">
    <h1 class="main-page__title">Chat</h1>
    <div class="main-page__collection-btn">
      <button class="main-page__btn">
        <router-link to="/register">Зарегестрироваться</router-link>
      </button>
      <button class="main-page__btn">
        <router-link to="/login">Войти</router-link>
      </button>
      <button class="main-page__btn">
        <router-link to="/chat" @click="userCreationCall">Чат</router-link>
      </button>
      <button class="main-page__btn" @click="logOutProfile">
        <router-link to="/login">Выйти из аккаунта</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "@/stores";
import { createUser } from "@/services/WebSocket.js";

const authStore = useAuth();

const logOutProfile = () => {
  authStore.exit();
};

const userCreationCall = () => {
  createUser(authStore.user.email);
};
</script>

<style scoped>
.main-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-page__title {
  margin-bottom: 40px;
}

.main-page__btn {
  padding: 10px;
  background-color: #dca760;
  border-radius: 10px;
}

.main-page__btn:not(:last-child) {
  margin-right: 20px;
}
</style>
