<template>
  <div class="content">
    <MyConfirmDelete v-if="confirmDeleteStore.isOpen" />
    <MySidebar class="content__sidebar" />
    <MyChat class="content__chat" />
  </div>
</template>

<script setup lang="ts">
// import { ref, defineProps } from "vue";
import MyChat from "@/components/MyChat.vue";
import MySidebar from "@/components/MySidebar.vue";
import MyConfirmDelete from "@/components/MyConfirmDelete.vue";
import { useConfirmDelete } from "@/stores";
// import { UserMessage } from "@/types";

const confirmDeleteStore = useConfirmDelete();

// defineProps({
//   socket: Object,
// });
</script>

<style scoped lang="scss">
.content {
  display: flex;
  height: calc(100vh - 101px);
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
