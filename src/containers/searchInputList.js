import React, {useState} from 'react';
import s from '../components/Header/Header.module.scss';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import {useSelector} from "react-redux";
import {selectAllBooks} from "../store/allBooksSlice";

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});
const SearchInputList = () => {
    const [search, setSearch] = useState('');
    const allBooks=useSelector(selectAllBooks);
    console.log(allBooks.items)
    const searchBook = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <h1>SEARCH FOR BOOKS</h1>
            <div className={`${s.inputSearch} `}>
                <Autocomplete
                    // value={search}
                    // onKeyPress={searchBook}
                    id="filter-demo"
                    options={top100Books}
                    getOptionLabel={(option) => option.title}
                    filterOptions={filterOptions}
                    sx={{width: 600}}
                    renderInput={(params) => <TextField {...params} label="Custom filter"/>}
                />
            </div>
        </>
    );
};
const top100Books = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},];
export default SearchInputList;