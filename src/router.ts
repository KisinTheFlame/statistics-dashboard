import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/home",
        redirect: "/"
    },
    {
        path: "/login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.requireAuth) {
        return "/login";
    }
})

export {router};
