import { configureStore, combineReducers } from '@reduxjs/toolkit';
import testReducer from './testReducer';

let reducers = combineReducers({
    testReducer: testReducer
})



export const store = configureStore({
    reducer: reducers
})