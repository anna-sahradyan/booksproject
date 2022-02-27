import React, {useRef, useState} from 'react';
import s from '../../components/Header/Header.module.scss';
//import {useDispatch, useSelector} from "react-redux";
//import {selectSort,setSort} from "../../store/sortSlice";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SearchSortList = () => {
    const [search, setSearch] = useState('');
    let ref = useRef();
    //let sort = useSelector(selectSort);
    //let dispatch=useDispatch();
    const handleChange = (e) => {
        e.preventDefault();
        //dispatch(setSort(e.target.value));

        //console.log(sort)
    }

    return (
        <>
            <div className={s.sort}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Relevance</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={search}
                        label="relevance"
                        onChange={handleChange}
                    >
                        <MenuItem value={'relevance'}>relevance</MenuItem>
                        <MenuItem value={'newest'}>newest</MenuItem>

                    </Select>
                </FormControl>
            </div>
        </>
    );
};

export default SearchSortList;