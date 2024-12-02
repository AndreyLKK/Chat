<template>
  <div class="confirm-delete" v-if="confirmDeleteStore.isOpen">
    <div class="confirm-delete__bg"></div>
    <div class="confirm-delete__modal">
      <p class="confirm-delete__text">
        Вы действительно хотите удалить сообщение?
      </p>
      <div class="confirm-delete__inner">
        <button
          class="confirm-delete__btn"
          @click="confirmDeleteStore.confirmYes()"
        >
          Да
        </button>
        <button
          class="confirm-delete__btn"
          @click="confirmDeleteStore.confirmNo()"
        >
          Нет
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConfirmDelete } from "@/stores";

const confirmDeleteStore = useConfirmDelete();
</script>

<style scoped>
.confirm-delete__bg {
  height: 100vh;
  background-color: rgba(14, 22, 33, 0.4);
  backdrop-filter: blur(4px);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
}

.confirm-delete__modal {
  background-color: white;
  max-width: 400px;
  width: 100%;
  min-height: auto;
  position: absolute;
  top: 25%;
  transform: translateX(-50%);
  left: 50%;
  border-radius: 10px;
  padding: 30px;
  z-index: 2;
}

.confirm-delete__btn,
.confirm-delete__text {
  color: rgb(14, 22, 33);
  font-size: 20px;
}

.confirm-delete__btn {
  padding: 5px 10px;
  background-color: #dca760;
  border-radius: 10px;
}

.confirm-delete__inner {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
</style>
