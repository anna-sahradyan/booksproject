import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncAllBooksDetails = createAsyncThunk("details/fetchAsyncAllBooksDetails", async (id) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCEjuT4DYQ4KVHfoA68ulwR_hX4yJHYg8I&maxResults=40&id=${id}`,id)
    console.log(response.data)
    return response.data;

});

const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        details: [],

    },
    reducers: {
        getAllBooksDetails: (state, {payload}) => {
            state.details = payload;
        },
    },
    extraReducers: {
        [fetchAsyncAllBooksDetails.pending]: () => {

        },
        [fetchAsyncAllBooksDetails.fulfilled]: (state, {payload}) => {

            return {...state, details: payload};

        },
        [fetchAsyncAllBooksDetails.rejected]: () => {


        },

    }
});
export const {getAllBooksDetails} = detailsSlice.actions;
export const selectAllBooksDetails = state => state.details.details;
export default detailsSlice.reducer;
