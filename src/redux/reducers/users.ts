import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../interfaces';
import { userAuthorization } from '../actions'
import { USERS_SLICE_NAME } from '../constants';

const initialState: UserState = {
    user: {
        id: '213123',
        name: 'Ivan',
        role: 'ADMIN',
        phone: '21312312'
    }
}

const userSlice = createSlice({
    name: USERS_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userAuthorization.fulfilled, (state, { payload }) => {
            state.user = payload
        })
    }
})

export default userSlice.reducer
