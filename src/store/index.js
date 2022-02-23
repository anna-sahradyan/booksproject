import {combineReducers} from "redux";
import allBooks from '../store/allBooksSlice'
const rootReducer = combineReducers({
    allBooks,
    devTools:true,
})
export default  rootReducer;