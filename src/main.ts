import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

import Index from './Screens/Index.vue';
import {createMemoryHistory, createRouter} from "vue-router";
import NewsScreen from "./Screens/NewsScreen.vue";
import MembersScreen from "./Screens/MembersScreen.vue";
import ProjectsScreen from "./Screens/ProjectsScreen.vue";
import ContactScreen from "./Screens/ContactScreen.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/news', component: NewsScreen},
    { path: '/members', component: MembersScreen},
    { path: '/projects', component: ProjectsScreen},
    { path: '/contact' , component: ContactScreen}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App);
app.use(router)

app.mount('#app')
