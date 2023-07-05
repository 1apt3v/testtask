import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    inputValue: ''
}

export const setInputValue = createAction('INPUTVALUE')


// export default createReducer(initialState, (builder) => {
//     builder.addCase(setInputValue, (state, action) => {
//         console.log(action)
//         state.inputValue = action.payload
//     })
    


export default createReducer(initialState, {

    [setInputValue]: (state, action) => {
        state.inputValue = action.payload
    }
})