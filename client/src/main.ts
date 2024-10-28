import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.scss";
import "./assets/reset.css";

createApp(App).use(router).mount("#app");
