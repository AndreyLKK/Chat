<template>
  <div class="header">
    <button class="header__btn" v-if="authStore.user === null">
      Водйите в профиль
    </button>
    <p class="header_text" v-else>{{ authStore.user.email }}</p>
    <router-link
      v-if="authStore.user"
      class="header__link"
      :to="{ name: 'main' }"
      >На главную</router-link
    >
  </div>
</template>

<script setup>
import { useAuth } from "@/stores";

const authStore = useAuth();
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}
</style>
