<template>
  <div class="content">
    <MySidebar class="content__sidebar" :socket="socket" />
    <MyChat class="content__chat" :socket="socket" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import MyChat from "@/components/MyChat.vue";
import MySidebar from "@/components/MySidebar.vue";
import { UserMessage } from "@/types";

defineProps({
  socket: Object,
});
</script>

<style scoped lang="scss">
.content {
  display: flex;
  height: calc(100vh - 40px);
  border-top: 1px solid #cecece;
  margin-bottom: 40px;
}

.content__chat {
  flex: 2;
}

.content__sidebar {
  flex: 1;
}
</style>
