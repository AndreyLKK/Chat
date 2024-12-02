<template>
  <form class="chat__form">
    <div class="chat__inner">
      <input
        class="chat__message"
        type="text"
        placeholder="Введите сообщение..."
        v-model="message"
      />
      <button class="chat__emoji-btn" type="button" @click="toggleEmojiPicker">
        😊
      </button>

      <div v-if="emojiPickerVisible" ref="emojiPicker" class="emoji-picker">
        <EmojiPicker
          class="chat__emoji-picker"
          :native="true"
          @select="onSelectEmoji"
          hide-search
          theme="dark"
        />
      </div>
    </div>
    <button class="chat__btn" type="submit" @click.prevent="handlerSend">
      <p>Отправить</p>
    </button>
  </form>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { createMessage, saveHistoryMsg } from "@/services/WebSocket.js";
import { useAuth } from "@/stores";
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";

const authStore = useAuth();

const message = ref("");

const emojiPickerVisible = ref(false);

const emojiPicker = ref(null);

const toggleEmojiPicker = () => {
  emojiPickerVisible.value = !emojiPickerVisible.value;
};

onMounted(() => {
  nextTick(() => {
    document.addEventListener("click", handleClickOutside);
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const handleClickOutside = (event) => {
  if (
    emojiPicker.value &&
    !emojiPicker.value.contains(event.target) &&
    !event.target.closest(".chat__emoji-btn")
  ) {
    emojiPickerVisible.value = false;
  }
};

const onSelectEmoji = (emoji) => {
  message.value += emoji.i;
  emojiPickerVisible.value = false;
};

const handlerSend = () => {
  createMessage(authStore.user.email, message.value);
  saveHistoryMsg(authStore.user.email, message.value);
  message.value = "";
};
</script>

<style lang="scss">
.chat__message {
  width: 100%;
  background-color: transparent;
  color: aliceblue;
}

.chat__inner {
  position: relative;
  width: 100%;
}

.chat__emoji-btn {
  position: absolute;
  right: 2%;
}

.chat__emoji-picker {
  position: absolute;
  bottom: 50px;
  right: -14%;
  z-index: 10;
}

.chat__form {
  display: flex;
  margin-top: 10px;
}
</style>
