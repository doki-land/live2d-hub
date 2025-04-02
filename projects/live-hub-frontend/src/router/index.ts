import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue';
import ModelViewView from "@/pages/ModelView.vue";
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
            component: ModelViewView,
        },
        {
            path: '/model/:model_link',
            component: ModelDetail,
        },
    ],
});

export default router;
