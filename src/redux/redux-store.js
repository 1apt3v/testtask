import { configureStore, combineReducers } from '@reduxjs/toolkit';
import testReducer from './testReducer';
import houseReducer from './houseReducer';
import filtersReducer from './filtersReducer';
import modalReducer from './modalReducer';
import carouselReducer from './carouselReducer';

let reducers = combineReducers({
    testReducer: testReducer,
    houseReducer: houseReducer,
    filtersReducer: filtersReducer,
    modalReducer: modalReducer,
    carouselReducer: carouselReducer
})



export const store = configureStore({
    reducer: reducers
})