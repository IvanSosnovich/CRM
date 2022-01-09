import { OrderGrid } from '../../pages/order-grid'
import { Orders } from '../../pages/orders'

export const logistRouteConfig = [
    {
        path: '/',
        component: OrderGrid
    },
    {
        path: '/orders',
        component: Orders
    },
]

export const logistSideBarLink = [
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
]
