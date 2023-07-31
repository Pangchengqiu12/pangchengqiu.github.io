import { createApp } from 'vue'
import 'normalize.css'
import './style.css'
import App from './App.vue'
import pinia from './stores'
import router from './router'
createApp(App).use(router).use(pinia).mount('#app')
