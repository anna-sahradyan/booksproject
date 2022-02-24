import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
//import {API} from "../data";


export const fetchAsyncAllBooks = createAsyncThunk("allBooks/fetchAsyncAllBooks", async (allBooks) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCEjuT4DYQ4KVHfoA68ulwR_hX4yJHYg8I&maxResults=40`,allBooks)
    console.log(response.data)
    return response.data;

});

const allBooksSlice = createSlice({
    name: "allBooks",
    initialState: {
        allBooks: [],
    },
    reducers: {
        getAllBooks: (state, {payload}) => {
            state.allBooks = payload;
        },
    },
    extraReducers: {
        [fetchAsyncAllBooks.pending]: () => {

        },
        [fetchAsyncAllBooks.fulfilled]: (state, {payload}) => {

            return {...state, allBooks: payload};

        },
        [fetchAsyncAllBooks.rejected]: () => {


        },
    },

});
export  const {getAllBooks}=allBooksSlice.actions;
export const selectAllBooks = state => state.allBooks.allBooks;
export default allBooksSlice.reducer;