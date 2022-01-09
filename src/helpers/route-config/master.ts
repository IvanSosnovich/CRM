import { Orders } from '../../pages/orders'

export const masterRouteConfig = [
    {
        path: '/orders',
        component: Orders
    },
]

export const masterSideBarLink = [
    {
        link: '/orders',
        name: 'Заказы',
        icon: 'border_all_icon'
    },
]
