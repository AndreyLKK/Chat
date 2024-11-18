import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.scss";
import "./assets/reset.css";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
