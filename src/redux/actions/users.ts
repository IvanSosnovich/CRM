import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import { USERS_GET_TYPE, USER_URL } from '../constants';
import { Error, User } from '../../interfaces'
interface IncomingData {
    login: string,
    password: string
}

export const userAuthorization = createAsyncThunk<
    User,
    Partial<IncomingData>,
    {
        extra: {
            jwt: string
        }
        rejectWithValue: Error
    }
    >(
        USERS_GET_TYPE,
        async ({ login, password }, {rejectWithValue}) => {
            try {
                const response = await axios.get(USER_URL, { params: { login, password }})
                return response.data
            } catch (error) {
                rejectWithValue(error)
            }
        }
    )
