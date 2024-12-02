import { defineStore } from "pinia";
import { ref } from "vue";
import { authService } from "@/services/Firebase.js";
import { useRouter } from "vue-router";
import { createUser } from "@/services/WebSocket.js";

export const useAuth = defineStore("auth", () => {
  const user = ref(null);
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const router = useRouter();

  const registerUser = async () => {
    try {
      if (confirmPassword.value !== password.value)
        return alert("Пароли не совпадают");
      user.value = await authService.signup(email.value, password.value);
      if (user.value) {
        email.value = "";
        password.value = "";
        confirmPassword.value = "";

        createUser(user.value.email);

        router.push("/chat");
      }
    } catch (err) {
      console.log("Ошибка при регистрации", err);
    }
  };

  const loginUser = async () => {
    try {
      user.value = await authService.login(email.value, password.value);
      if (user.value) {
        email.value = "";
        password.value = "";
        alert("Вы успешно авторизовались!");

        createUser(user.value.email);

        router.push("/chat");
      }
    } catch (err) {
      console.log("Ошибка при входе", err);
    }
  };

  const exit = async () => {
    try {
      await authService.getOut();
      user.value = null;
      alert("Вы успешно вышли!");

      router.push("/login");
    } catch (err) {
      console.log("Проблемы с выходом", err);
    }
  };

  authService.onAuthStateChangedListener((currentUser) => {
    user.value = currentUser;
  });

  return {
    user,
    email,
    confirmPassword,
    password,
    loginUser,
    exit,
    registerUser,
  };
});
