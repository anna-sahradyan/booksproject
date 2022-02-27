import React, {useState} from 'react';
import s from '../../components/Header/Header.module.scss';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
//import {useDispatch, useSelector} from "react-redux";
//import {selectCategory, setCategory} from "../../store/categorySlice";

const SearchCategoryList = () => {
    const [search, setSearch] = useState('');
    // let category = useSelector(selectCategory);
    //let dispatch = useDispatch();
    // console.log(category)
    const removeInput = (e) => {
       e.target.value = '';
        window.location.href = 'http://localhost:3000/home'

    }


    const handleChange = (e) => {
        e.preventDefault();
        //dispatch(setCategory(e.target.value));

    }

    return (
        <>
            <div className={s.categoryList}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">All</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={search}
                        label="all"
                        onChange={handleChange}
                    >
                        <MenuItem value={'all'}>all</MenuItem>
                        <MenuItem value={'art'}>Art</MenuItem>
                        <MenuItem value={'biography'}>Biography</MenuItem>
                        <MenuItem value={'computers'}>Computers</MenuItem> <MenuItem value={'history'}>History</MenuItem>
                        <MenuItem value={'medical'}>Medical</MenuItem><MenuItem value={'poetry'}>Poetry</MenuItem>


                    </Select>
                </FormControl>
            </div>
        </>
    );
};

export default SearchCategoryList;