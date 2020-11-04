import Vue from 'vue'
import VueRouter from 'vue-router'

import GiftList from './pages/GiftList.vue'
import Login from './pages/Login.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: GiftList
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
