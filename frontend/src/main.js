import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";
/*import {
	create,
	NButton,
	NMessageProvider,
} from "naive-ui"*/
import naive from "naive-ui";
/*const natives = create({
	components:[NButton,NMessageProvider]
})*/
createApp(App).use(store).use(router).use(naive).mount('#app');
