<template>
  <div class="registration">
    <h2 class="registration__title">Регистрация</h2>
    <form class="registration__form" @submit.prevent="authStore.registerUser">
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
    <router-link class="registration__link" :to="{ name: 'login' }"
      >Если уже зарегестрированы</router-link
    >
  </div>
</template>

<script setup>
import { useAuth } from "@/stores";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuth();
</script>

<style scoped>
.registration {
  height: calc(100vh - 21px);
  display: flex;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
}

.registration__title {
  margin-bottom: 100px;
  font-size: 40px;
}

.registration__form {
  display: flex;
  flex-direction: column;
}

.registration__input:not(:last-child) {
  margin-bottom: 10px;
}

.registration__link {
  margin-top: 40px;
}
</style>
