<template>
  <div class="entrance">
    <h2 class="entrance__title">Войдите</h2>
    <form class="entrance__form" @submit.prevent="authStore.loginUser">
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
    <router-link class="entrance__link" :to="{ name: 'register' }"
      >Перейти к регистрации</router-link
    >
  </div>
</template>

<script setup>
import { useAuth } from "@/stores";

const authStore = useAuth();
</script>

<style scoped>
.entrance {
  height: calc(100vh - 21px);
  display: flex;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
}

.entrance__title {
  margin-bottom: 100px;
  font-size: 40px;
}

.entrance__form {
  display: flex;
  flex-direction: column;
}

.entrance__input:not(:last-child) {
  margin-bottom: 10px;
}

.entrance__link {
  margin-top: 40px;
}
</style>
