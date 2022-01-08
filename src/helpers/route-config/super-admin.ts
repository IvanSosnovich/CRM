import { Users } from '../../pages/users'
import { Statistics } from '../../pages/statistics'
import { OrderGrid } from '../../pages/order-grid'
import { Orders } from '../../pages/orders'

export const superAdminRouteConfig = [
    {
        path: '/',
        component: OrderGrid,
        exact: true
    },
    {
        path: '/orders',
        component: Orders,
        exact: true
    },
    {
        path: '/statistics',
        component: Statistics,
        exact: true
    },
    {
        path: '/users',
        component: Users,
        exact: true
    },
]

export const superAdminSideBarLink = [
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
