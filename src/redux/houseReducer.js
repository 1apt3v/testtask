import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    houses: [],
    modalHouseData: {},
    totalPages: 0,
    currentPage: 1
}


export const setHousesData = createAction('SETHOUSESDATA')
export const setModalHouseData = createAction('SETMODALHOUSEDATA')
export const setTotalPages = createAction('SETTOTALPAGES')
export const setCurrentPage = createAction('SETCURRENTPAGE')

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
    }
})


