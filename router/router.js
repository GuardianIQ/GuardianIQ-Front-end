import { createRouter, createWebHistory } from 'vue-router';


import personalSafety from "../pages/personalSafety.vue";

const  routes = [

    {path:'/personalSafety',component:personalSafety},




]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
