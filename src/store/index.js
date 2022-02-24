import {combineReducers} from "redux";
import allBooks from '../store/allBooksSlice';
import searchTitle from '../store/searchSlice';
import details from '../store/detailsSlice';

const rootReducer = combineReducers({
    allBooks,
    searchTitle,
    details,
    devTools: true,
})
export default rootReducer;