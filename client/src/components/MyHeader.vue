<template>
  <div class="header">
    <button class="header__btn" v-if="authStore.user === null">
      Водйите в профиль
    </button>
    <p class="header_text" v-else>{{ authStore.user.email }}</p>
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
  padding-top: 40px;
}
</style>
