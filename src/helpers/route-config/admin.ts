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
        icon: ''
    },
    {
        link: '/orders',
        name: 'Заказы',
        icon: ''
    },
    {
        link: '/statistics',
        name: 'Статистика',
        icon: ''
    },
    {
        link: '/users',
        name: 'Мастера',
        icon: ''
    },
]
