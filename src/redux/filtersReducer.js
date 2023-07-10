import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    filters: {}
}

export const setFiltersValue = createAction('SETFILERSVALUE')


export default createReducer(initialState, {

    [setFiltersValue]: (state, action) => {
        state.filters = action.payload
    }
})