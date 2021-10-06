import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import RedLight from '@/components/RedLight'
import YellowLight from '@/components/YellowLight'
import GreenLight from '@/components/GreenLight'

const routes = [
    {
        path: '/',
        redirect: {name:'red'}
    },
    {
        path: '/red',
        name: 'red',
        component: RedLight,
        props: true
    },
    {
        path: '/green',
        name: 'green',
        component: GreenLight   
    },
    {
        path: '/yellow',
        name: 'yellow',
        component: YellowLight
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router

