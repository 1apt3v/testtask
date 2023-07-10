import { configureStore, combineReducers } from '@reduxjs/toolkit';
import testReducer from './testReducer';
import houseReducer from './houseReducer';
import filtersReducer from './filtersReducer';
import modalReducer from './modalReducer';
import carouselReducer from './carouselReducer';
import loaderReducer from './loaderReducer';

let reducers = combineReducers({
    testReducer: testReducer,
    houseReducer: houseReducer,
    filtersReducer: filtersReducer,
    modalReducer: modalReducer,
    carouselReducer: carouselReducer,
    loaderReducer: loaderReducer
})



export const store = configureStore({
    reducer: reducers
})