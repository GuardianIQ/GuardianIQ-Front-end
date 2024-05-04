import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);
app.use(router);
app.use(Notifications);
app.mount('#app');
