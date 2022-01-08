import {USERS_SLICE_NAME} from '../constants';
import {StateInterface} from '../../interfaces'
import {createSelector} from 'reselect';

const selectSelf = (state: StateInterface) => state[USERS_SLICE_NAME]

export const userSelector = createSelector(selectSelf, (state) => state.user)
