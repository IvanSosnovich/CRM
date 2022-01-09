import { Users } from '../../pages/users'
import { Statistics } from '../../pages/statistics'
import { OrderGrid } from '../../pages/order-grid'
import { Orders } from '../../pages/orders'
export const adminRouteConfig = [
    {
        path: '/',
        component: OrderGrid
    },
    {
        path: '/orders',
        component: Orders
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '/users',
        component: Users
    },
]

export const adminSideBarLink = [
    {
        link: '/',
        name: 'Маршрутка',
        icon: 'add_road'
    },
    {
        link: '/orders',
        name: 'Заказы',
        icon: 'border_all_icon'
    },
    {
        link: '/statistics',
        name: 'Статистика',
        icon: 'leaderboard'
    },
    {
        link: '/users',
        name: 'Мастера',
        icon: 'android'
    },
]
