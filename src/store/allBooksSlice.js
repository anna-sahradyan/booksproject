import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAsyncAllBooks = createAsyncThunk('allBooks/fetchAsyncAllBooks', async function (inputValue, {rejectWithValue}) {
    try {
        const response = await fetch(` https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=AIzaSyCEjuT4DYQ4KVHfoA68ulwR_hX4yJHYg8I&maxResults=40`);
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
const allBooksSlice = createSlice({
    name: "allBooks",
    initialState: {
        allBooks: [],
        oneBook: [],
        status: null,
        error: null,
    },
    reducers: {
        getAllBooks: (state, {payload}) => {
            state.allBooks = payload;
        },
    },
    extraReducers: {
        [fetchAsyncAllBooks.pending]: (state) => {
            state.status = 'resolved';
        },
        [fetchAsyncAllBooks.fulfilled]: (state, {payload}) => {
            state.status = 'resolved';
            return {...state, allBooks: payload};

        },
        [fetchAsyncAllBooksId.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchAsyncAllBooksId.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.oneBook = action.payload;
            //return {...state, oneBook: payload};


        },
        [fetchAsyncAllBooks.rejected]: setError,
        [fetchAsyncAllBooksId.rejected]: setError,
    },

});
export const {getAllBooks} = allBooksSlice.actions;
export const selectAllBooks = state => state.allBooks.allBooks;
export const selectOneBook = state =>state.allBooks.oneBook;
export default allBooksSlice.reducer;