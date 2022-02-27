import {combineReducers} from "redux";
import allBooks from '../store/allBooksSlice';
import inputValue from '../store/searchSlice';
import details from '../store/detailsSlice';

const rootReducer = combineReducers({
    allBooks,
    inputValue,
    details,
    devTools: true,
})
export default rootReducer;