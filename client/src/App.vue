<template>
  <div class="app">
    <div class="container">
      <header>
        <MyHeader />
      </header>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MyHeader from "@/components/MyHeader.vue";
import { createConnection } from "@/services/WebSocket";

onMounted(() => {
  createConnection();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
}
</style>
