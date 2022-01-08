import {OrdersState} from './orders';
import {UserState} from './users';
import {ORDERS_SLICE_NAME, USERS_SLICE_NAME} from '../redux/constants';

export interface StateInterface {
    [ORDERS_SLICE_NAME]: OrdersState,
    [USERS_SLICE_NAME]: UserState
}
