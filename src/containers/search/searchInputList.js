import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {fetchAsyncAllBooks} from "../../store/allBooksSlice";
import {NavLink} from "react-router-dom";

const SearchInputList = () => {
    const [inputValue, setInputValue] = useState('');
    let dispatch = useDispatch();
    const handelPress = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                dispatch(fetchAsyncAllBooks(inputValue))
                console.log('enter press')
            }

    }
    return (<>
        <div>
            <NavLink to ='/'><h1>SEARCH FOR BOOKS</h1></NavLink>
            <form>
                <Box
                    sx={{
                        width: 500, maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="search movie" id="fullWidth"
                               style={{backgroundColor: "white", marginLeft: "400px", marginTop: "50px"}}
                               autoFocus
                               value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}

                               onKeyPress={handelPress}/>
                </Box>
            </form>

        </div>


    </>);
};

export default SearchInputList;