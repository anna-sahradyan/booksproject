import React, { useState} from 'react';
import s from '../../components/Header/Header.module.scss';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchAsyncAllBooks} from "../../store/allBooksSlice";

const SearchCategoryList = () => {
    const [inputValue, setInputValue] = useState('all');
    const dispatch = useDispatch();
    const handleChange = (e) => {
            e.preventDefault();
            dispatch(fetchAsyncAllBooks(inputValue));


        }



    return (
        <>
            <div className={s.categoryList}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">All</InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inputValue}
                        label="all"
                        onChange={(e) => setInputValue(e.target.value)}
                    >
                        <MenuItem value={'all'} onClick={handleChange}>all</MenuItem>
                        <MenuItem value={'art'} onClick={handleChange}>Art</MenuItem>
                        <MenuItem value={'biography'} onClick={handleChange}>Biography</MenuItem>
                        <MenuItem value={'computers'} onClick={handleChange}>Computers</MenuItem> <MenuItem
                        value={'history'} onClick={handleChange}>History</MenuItem>
                        <MenuItem value={'medical'} onClick={handleChange}>Medical</MenuItem>
                        <MenuItem value={'poetry'} onClick={handleChange}>Poetry</MenuItem>

                    </Select>

                </FormControl>
            </div>
        </>
    );
};

export default SearchCategoryList;