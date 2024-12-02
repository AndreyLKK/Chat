import { defineStore } from "pinia";
import { ref } from "vue";

export const useConfirmDelete = defineStore("confirmDelete", () => {
  const isOpen = ref(false);

  let resolvePromise;
  let rejectPromise;

  const confirmDeleteMessage = () => {
    return new Promise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
      isOpen.value = true;
    });
  };

  const confirmYes = () => {
    isOpen.value = false;
    resolvePromise(true);
  };

  const confirmNo = () => {
    isOpen.value = false;
    rejectPromise(false);
  };

  return {
    confirmDeleteMessage,
    isOpen,
    confirmYes,
    confirmNo,
  };
});
