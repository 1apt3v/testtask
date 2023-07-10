import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    houses: [],
    modalHouseData: {},
    totalPages: 0,
    currentPage: 1,
    totalHouses: 0
}


export const setHousesData = createAction('SETHOUSESDATA')
export const setModalHouseData = createAction('SETMODALHOUSEDATA')
export const setTotalPages = createAction('SETTOTALPAGES')
export const setCurrentPage = createAction('SETCURRENTPAGE')
export const setTotalHouses = createAction('SETTOTALHOUSES')

export default createReducer(initialState, {
    [setHousesData]: (state, action) => {
        state.houses = action.payload
    },
    [setModalHouseData]: (state, action) => {
        state.modalHouseData = action.payload
    },
    [setTotalPages]: (state, action) => {
        state.totalPages = action.payload / 8
    },
    [setCurrentPage]: (state, action) => {
        state.currentPage = action.payload
    },
    [setTotalHouses]: (state, action) => {
        state.totalHouses = action.payload
    }
})


