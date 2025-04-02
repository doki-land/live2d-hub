import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue';
import ModelView from "@/pages/Model.vue";
import ModelDetail from "@/pages/ModelDetail.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/model',
            component: ModelView,
        },
        {
            path: '/model/:model_link',
            component: ModelDetail,
        },
    ],
});

export default router;
