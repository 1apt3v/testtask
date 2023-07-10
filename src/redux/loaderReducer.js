import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    loaderActive: false
}

export const setLoaderActive = createAction('SETLOADERACTIVE')


export default createReducer(initialState, {

    [setLoaderActive]: (state, action) => {
        state.loaderActive = action.payload
    }
})