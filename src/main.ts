import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

import IndexScreen from './Screens/Index.vue';
import {createMemoryHistory, createRouter} from "vue-router";

const routes = [
    { path: '/', component: IndexScreen },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App);
app.use(router)

app.mount('#app')
