import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './Form/Form';
import { combineReducers } from 'redux';
const reducer = combineReducers({
    form: formSlice.reducer
})

export const store = configureStore({
    reducer,
})