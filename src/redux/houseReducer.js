import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    houses: [],
    modalHouseData: {}
}


export const setHousesData = createAction('SETHOUSESDATA')
export const setModalHouseData = createAction('SETMODALHOUSEDATA')

export default createReducer(initialState, {
    [setHousesData]: (state, action) => {
        state.houses = action.payload
    },
    [setModalHouseData]: (state, action) => {
        state.modalHouseData = action.payload
    }
})


