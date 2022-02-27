import React, {useEffect, useRef, useState} from 'react';
import s from '../../components/Header/Header.module.scss';
import axios from "axios";
import AllBooksList from "../allBooksList/AllBooksList";
import PaginationList from "../pagination/PaginationList";
import {useDispatch, useSelector} from "react-redux";
import {getInputValue, selectInputValue} from "../../store/searchSlice";
import {useLocation} from "react-router-dom";


const SearchInputList = () => {
    const [flag, setFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [BookData, setBookData] = useState([]);
    const location = useLocation();
    //const inputValue = useSelector(selectInputValue);
    let dispatch = useDispatch();


    useEffect(() => {
        dispatch(getInputValue());
    }, [dispatch]);

    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(ref.current.value);

    }

    const searchBook = (e) => {
        e.persist();
        if (e.key === 'Enter') {
            setFlag(true);
            location.pathname = '/filter';
            setIsLoading(false);
            try {
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=AIzaSyCEjuT4DYQ4KVHfoA68ulwR_hX4yJHYg8I&maxResults=40
 `).then(res => setBookData(res.data.items))

            } catch (err) {
                setIsLoading(false)
            }

        }
    }

    const ref = useRef();
    return (<>
        <div>

          <h1>SEARCH FOR BOOKS</h1>
            <div className={`${s.inputSearch} `}>
                <form action="#">
                    <input type="text" ref={ref} defaultValue={inputValue} onChange={handleChange}
                           placeholder='Search...' onKeyPress={searchBook}/>
                </form>
            </div>


        </div>
        {flag ?<AllBooksList book={BookData}/>:null}
    </>);
};

export default SearchInputList;