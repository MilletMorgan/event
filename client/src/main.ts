import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { store, key } from './store'
import './index.css'
import Notifications from '@kyvg/vue3-notification'
import axios from "axios";

axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000
});

createApp(App).use(router).use(store, key).use(Notifications).mount('#app')
