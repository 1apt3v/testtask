import { configureStore, combineReducers } from '@reduxjs/toolkit';
import testReducer from './testReducer';
import houseReducer from './houseReducer';

let reducers = combineReducers({
    testReducer: testReducer,
    houseReducer: houseReducer
})



export const store = configureStore({
    reducer: reducers
})