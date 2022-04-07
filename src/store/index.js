import {combineReducers} from "redux";
import allBooks from '../store/allBooksSlice';
import oneBook from '../store/detailSlice';
const rootReducer = combineReducers({
    allBooks,
    oneBook,
    devTools: true,
})
export default rootReducer;