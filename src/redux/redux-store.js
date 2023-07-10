import { configureStore, combineReducers } from '@reduxjs/toolkit';
import testReducer from './testReducer';
import houseReducer from './houseReducer';
import filtersReducer from './filtersReducer';

let reducers = combineReducers({
    testReducer: testReducer,
    houseReducer: houseReducer,
    filtersReducer: filtersReducer
})



export const store = configureStore({
    reducer: reducers
})