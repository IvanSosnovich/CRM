export interface Orders {
    id: number,
    location: string,
    description: string,
    client: string,
}

export interface OrdersState {
    orders: Orders[] | []
}
