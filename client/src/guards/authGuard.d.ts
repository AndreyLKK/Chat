declare module "@/guards/authGuard.js" {
  import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

  export const requiresAuth: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => void;
}
