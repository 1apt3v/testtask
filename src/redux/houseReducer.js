import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = []


export const setHouseData = createAction('SETHOUSEDATA')

export default createReducer(initialState, {
    [setHouseData]: (state, action) => action.payload
})