import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    filters: {},
    sortValue: '', 
    fullFilters: false
}

export const setFiltersValue = createAction('SETFILERSVALUE')
export const setSortValue = createAction('SETSORTVALUE')
export const setFullFilters = createAction('SETFULLFILTERS')


export default createReducer(initialState, {

    [setFiltersValue]: (state, action) => {
        state.filters = action.payload
    },
    [setSortValue]: (state, action) => {
        state.sortValue = action.payload
    },
    [setFullFilters]: (state, action) => {
        state.fullFilters = action.payload
    }
})