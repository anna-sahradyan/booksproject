import React, {useState} from 'react';
import s from '../../components/Header/Header.module.scss';
import {useDispatch} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {fetchAsyncAllBooks} from "../../store/allBooksSlice";

const SearchSortList = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const handelClick = (e) => {
        e.preventDefault();
        if (inputValue) {
            dispatch(fetchAsyncAllBooks(inputValue));
        }
    }

    return (
        <>
            <div className={s.sort}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Relevance</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        autoFocus
                        value={inputValue}
                        label="relevance"
                        onChange={(e) => setInputValue(e.target.value)}
                    >
                        <MenuItem value={'relevance'} onClick={handelClick}>relevance</MenuItem>
                        <MenuItem value={'newest'} onClick={handelClick}>newest</MenuItem>

                    </Select>
                </FormControl>
            </div>
        </>
    );
};

export default SearchSortList;