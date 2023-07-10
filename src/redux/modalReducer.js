import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    isActiveModal: false
}

export const setIsActiveModal = createAction('SETISACTIVEMODAL')


export default createReducer(initialState, {

    [setIsActiveModal]: (state, action) => {
        state.isActiveModal = action.payload
    }
})