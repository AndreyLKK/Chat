<template>
  <div class="app">
    <header>
      <MyHeader />
    </header>
    <main class="main">
      <router-view />
    </main>
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
