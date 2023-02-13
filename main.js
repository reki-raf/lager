import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import { routes } from './router'

import './assets/main.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

const app = createApp(App)
app.use(router)
app.mount('#app')
