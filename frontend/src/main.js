import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import {
	create,
	NButton
} from "naive-ui"
const natives = create({
	components:[NButton]
})
createApp(App).use(router).use(natives).mount('#app')
