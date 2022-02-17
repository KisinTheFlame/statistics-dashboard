import {createApp} from 'vue';
import App from './App.vue';
import axios from "axios";
import {router} from "@/router";
import 'element-plus/dist/index.css';

const app = createApp(App);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://statistics.kisin.tech/api";

app.use(router);

app.mount('#app');
