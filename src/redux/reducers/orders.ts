import { createSlice } from '@reduxjs/toolkit'
import {OrdersState} from '../../interfaces';
import { getOrders } from '../actions'
import { ORDERS_SLICE_NAME } from '../constants'

const initialState: OrdersState = {
    orders: [],
}

const ordersSlice = createSlice({
    name: ORDERS_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload
        })
    }
})

export default ordersSlice.reducer
