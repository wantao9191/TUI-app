import { createRouter, createWebHashHistory } from "vue-router";
import { index } from "../views/index.tsx";
import { login } from "../views/login/index.tsx";
const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/home',
        children: [
            { path: 'home', name: 'home', component: index },
            { path: 'login', name: 'login', component: login }
        ]
    },
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router