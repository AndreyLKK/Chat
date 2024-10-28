<template>
  <div class="main">
    <router-view :socket="socket" />
  </div>
</template>

<script setup lang="ts">
import socketIO from "socket.io-client";
import { onUnmounted } from "vue";

const socket = socketIO.connect("http://localhost:5000");

onUnmounted(() => {
  socketIO.disconnect();
});
</script>
