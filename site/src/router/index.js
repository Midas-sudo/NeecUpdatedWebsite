import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home'
import Error_Handling from '@/pages/Error_Handling'
import Team from '@/pages/Team'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    { 
        path: '/404', 
        component: Error_Handling 
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router