import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchTitle",
    initialState: {
        searchTitle: []
    },
    reducers: {
        getSearchTitle: (state, {payload}) => {
            state.searchTitle = payload;
        }
    },
});
export const {getSearchTitle} = searchSlice.actions;
export const selectSearchTitle = state => state.searchTitle.searchTitle;
export default searchSlice.reducer;
