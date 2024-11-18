<template>
  <div>
    <h2>Войдите</h2>
    <form class="entrance" @submit.prevent="authStore.loginUser">
      <label class="entrance__text" for="email">Введите почту</label>
      <input
        class="entrance__input"
        v-model="authStore.email"
        type="text"
        name="email"
      />
      <label class="entrance__text" for="password">Введите пароль</label>
      <input
        class="entrance__input"
        v-model="authStore.password"
        type="text"
        name="password"
      />
      <button class="entrance__btn" type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { useAuth } from "@/stores";

const authStore = useAuth();
</script>

<style scoped>
.entrance {
  height: 100vh;
  display: flex;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
}

.entrance__input:not(:last-child) {
  margin-bottom: 10px;
}
</style>
