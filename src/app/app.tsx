import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux'
import MainContainer from '../pages/main-container/main-container';
import {store} from '../redux';

export const App = () => {
    return (
        <Provider store={store}>
            <CssBaseline>
                <MainContainer />
            </CssBaseline>
        </Provider>
    )
}

