import VisitorCountDashboard from "@/components/VisitorCountDashboard.vue";
import VisitorRecordDashboard from "@/components/VisitorRecordDashboard.vue";
import Login from "@/components/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import axios from "axios";
import {ElNotification} from "element-plus";

const routes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/dashboard/visitor-count",
        component: VisitorCountDashboard,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: "/dashboard/visitor-record",
        component: VisitorRecordDashboard,
        meta: {
            requireAuth: true,
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.requireAuth) {
        return axios
            .post(
                "/check-token-validity"
            )
            .then((response) => {
                if (response.data.code !== 200) {
                    ElNotification({
                        title: "Authentication Failure",
                        message: response.data.message,
                        type: "error",
                    });
                    return "/login";
                } else {
                    return true;
                }
            })
            .catch(reason => {
                ElNotification({
                    title: "Unknown Error",
                    message: reason.toString(),
                    type: "error",
                })
                return false;
            })
    }
})

export {router};
