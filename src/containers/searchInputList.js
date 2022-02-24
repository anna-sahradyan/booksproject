import React, {useState} from 'react';
import s from '../components/Header/Header.module.scss';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import {selectAllBooks} from "../store/allBooksSlice";
import {getSearchTitle, selectSearchTitle} from "../store/searchSlice";


const SearchInputList = () => {
    const [search, setSearch] = useState('');
    const allBooks = useSelector(selectAllBooks);
    let books = allBooks.items;
    let searchTitle = useSelector(selectSearchTitle);
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (books) => books.volumeInfo['title'],
    });

    let dispatch = useDispatch();
    // const handleChange = (event) => {
    //     dispatch(getSearchTitle(event.target.value));
    //
    //
    // };
    console.log(searchTitle)
    return (<>
        <h1>SEARCH FOR BOOKS</h1>
        <div className={`${s.inputSearch} `}>
            <Autocomplete
                id="filter-demo"
                options={books}
                getOptionLabel={(option) => option.volumeInfo['title']}
                filterOptions={filterOptions}
                sx={{width: 600}}
                renderInput={(params) => <TextField {...params} label="Custom filter"  />}
            />
        </div>
    </>);
};

export default SearchInputList;