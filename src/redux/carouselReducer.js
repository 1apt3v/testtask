import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    activeIndex: 0
}

export const setActiveIndex = createAction('SETACTIVEINDEX')


export default createReducer(initialState, {

    [setActiveIndex]: (state, action) => {
        state.activeIndex = action.payload
    }
})