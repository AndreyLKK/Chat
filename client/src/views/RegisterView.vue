<template>
  <div>
    <h2 class="">Регистрация</h2>
    <form class="registration" @submit.prevent="authStore.registerUser">
      <label class="registration__text" for="email">Введите почту</label>
      <input
        class="registration__input"
        v-model="authStore.email"
        type="text"
        name="email"
      />
      <label class="registration__text" for="password">Введите пароль</label>
      <input
        class="registration__input"
        v-model="authStore.password"
        type="text"
        name="password"
      />
      <label class="registration__text" for="password"
        >Введите пароль повторно</label
      >
      <input
        class="registration__input"
        v-model="authStore.confirmPassword"
        type="text"
        name="password"
      />
      <button class="registration__btn" type="submit">
        Зарегестрироваться
      </button>
    </form>
  </div>
</template>

<script setup>
import { useAuth } from "@/stores";
import { useRouter } from "vue-router";
// import { CustomWebSocket } from "@/services/WebSocket";
const router = useRouter();
const authStore = useAuth();
</script>

<style scoped>
.registration {
  height: 100vh;
  display: flex;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
}

.registration__input:not(:last-child) {
  margin-bottom: 10px;
}
</style>
