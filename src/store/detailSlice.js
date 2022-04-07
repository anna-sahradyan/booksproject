import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAsyncAllBooksId= createAsyncThunk('oneBook/fetchAsyncAllBooksId', async function (id, {rejectWithValue}) {
    try {
        const response = await fetch(` https://www.googleapis.com/books/v1/volumes?q=${id}&key=AIzaSyCEjuT4DYQ4KVHfoA68ulwR_hX4yJHYg8I`);
        if (!response.ok) {
            throw new Error('Server Error!');
        }
        const data = await response.json();
        console.log(data)
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
        oneBook: [],
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [fetchAsyncAllBooksId.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchAsyncAllBooksId.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.oneBook = action.payload;
            //return {...state, oneBook: payload};


        },

        [fetchAsyncAllBooksId.rejected]: setError,
    },

});

export const selectOneBook = state =>state.oneBook.oneBook;
export default detailSlice.reducer;