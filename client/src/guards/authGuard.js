import { authService } from "@/services/Firebase";

export const requiresAuth = (to, from, next) => {
  authService.onAuthStateChangedListener((user) => {
    if (user) {
      to.path === "/login" || to.path === "/register"
        ? next({ name: "main" })
        : next();
    }

    if (!user) {
      to.path !== "/login" ? next({ name: "login" }) : next();
    }
  });
};
