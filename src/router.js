import { createRouter, createWebHistory } from 'vue-router'

import RedOn from '@/pages/RedOn'
import YellowOn from '@/pages/YellowOn'
import GreenOn from '@/pages/GreenOn'

const routes = [
    {
        // redirect on '/red' for start app on load
        path: '/',
        redirect: {name:'red'}
    },
    {
        path: '/red',
        name: 'red',
        component: RedOn,
        props: true
    },
    {
        path: '/green',
        name: 'green',
        component: GreenOn   
    },
    {
        path: '/yellow',
        name: 'yellow',
        component: YellowOn
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router

