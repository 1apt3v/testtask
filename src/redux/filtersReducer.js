import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    filters: {},
    sortValue: ''
}

export const setFiltersValue = createAction('SETFILERSVALUE')
export const setSortValue = createAction('SETSORTVALUE')


export default createReducer(initialState, {

    [setFiltersValue]: (state, action) => {
        state.filters = action.payload
    },
    [setSortValue]: (state, action) => {
        state.sortValue = action.payload
    }
})