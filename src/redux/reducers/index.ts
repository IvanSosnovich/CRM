import { ORDERS_SLICE_NAME, USERS_SLICE_NAME } from '../constants'
import ordersReducer from './orders'
import userReducer from './users'

export const rootReducer = {
    [ORDERS_SLICE_NAME]: ordersReducer,
    [USERS_SLICE_NAME]: userReducer
}
