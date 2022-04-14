import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_KEY} from "../data";

export const fetchAsyncAllBooksId = createAsyncThunk('oneBook/fetchAsyncAllBooksId', async function (id, {rejectWithValue}) {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key${API_KEY}`);
        if (!response.ok) {
            throw new Error('Server Error!');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }

});

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}
const detailSlice = createSlice({
    name: "oneBook",
    initialState: {
        oneBook: {},
        status: null,
        error: null,
    },
    reducers: {
        removeList: (state) => {
            state.oneBook = [];
        }
    },
    extraReducers: {
        [fetchAsyncAllBooksId.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchAsyncAllBooksId.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.oneBook = action.payload;
           // {...state, oneBook: payload};


        },

        [fetchAsyncAllBooksId.rejected]: setError,
    },

});
export const {removeList} = detailSlice.actions;
export const selectOneBook = state => state.oneBook.oneBook;
export default detailSlice.reducer;