import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "inputValue",
    initialState: {
        inputValue:[]
    },
    pending: null,
    error: false,
    reducers: {
        getInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        getInputValueSuccess: (state, {payload}) => {
            state.inputValue = payload;
            state.pending= false;
            state.errors = false;
        },
        getInputValueFailure: state => {
            state.pending = false;
            state.errors = true;
        },

    },
});
export const {getInputValue, getInputValueFailure,getInputValueSuccess} = searchSlice.actions;
export const selectInputValue = state => state.inputValue.inputValue;
export default searchSlice.reducer;
