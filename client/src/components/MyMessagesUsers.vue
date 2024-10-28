<template>
  <ul class="user">
    <li
      class="user__content"
      v-for="msg in messages"
      :key="msg.socketID"
      :class="{
        'user__content--me': msg?.name === getFromLocalStorage('user'),
        'user__content--other': msg?.name !== getFromLocalStorage('user'),
      }"
    >
      <p class="user__name">{{ msg?.name }}</p>
      <p class="user__message">
        {{ msg?.text }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { getFromLocalStorage } from "@/helpers/localStorage.ts";
import { UserMessage } from "@/types";

interface Props {
  messages: UserMessage[];
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.user {
  overflow-y: auto;
}
.user__content {
  text-align: right;
}

.user__message {
  margin-left: auto;
  padding: 10px;
  background-color: #182539;
  border-radius: 10px;
  width: fit-content;
  flex: 1;
}

.user__content--other p {
  text-align: left;
  margin-left: 0px;
}

.user__content--other .user__message {
  background-color: #a588f3;
}

.user__content:not(:last-child) {
  margin-bottom: 20px;
}
</style>
