import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {ORDERS_GET_TYPE, ORDERS_URL} from '../constants';
import { Error, Orders } from '../../interfaces'

export const getOrders = createAsyncThunk<
    Orders[],
    Partial<undefined>,
    {
        extra: {
                jwt: string
        }
            rejectWithValue: Error
    }
    >(
        ORDERS_GET_TYPE,
        async (undefined, {rejectWithValue}) => {
            try {
                const response = await axios.get(ORDERS_URL)
                return response.data
            } catch (error) {
                rejectWithValue(error)
            }
        }
    )
