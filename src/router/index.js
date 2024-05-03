import { createRouter, createWebHistory } from 'vue-router'

import pageEquipos from "../commerce/pages/page-equipos.vue";

const  routes = [

    {path:'/pageEquipos',component:pageEquipos}


]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router