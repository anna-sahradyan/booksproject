import React, {useEffect, useState} from 'react';
import s from './PaginationList.module.scss';
import BookCard from "../../components/BookCard";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncAllBooks, selectAllBooks} from "../../store/allBooksSlice";
import Loading from "../../components/Loading";



const PaginationList = () => {
    const [visible, setVisible] = useState(10);
    const dispatch = useDispatch();
    let allBooks = useSelector(selectAllBooks);
    let books = allBooks.items;
    const showMoreItem = () => {
        if (visible >=25) {
            setVisible((prevValue) => prevValue - 5);
            return
        }
        setVisible((prevValue) => prevValue + 5);
    }
    let text = 'react'
    useEffect(() => {
        dispatch(fetchAsyncAllBooks(text));
    }, [dispatch]);
    return (<>
        <div className={s.contentDiv}>
            <div className={s.content}>
                <div className={s.cardList}>
                    {allBooks.kind !== 'books#volumes' ?(<Loading/>): (books.slice(0, visible).map((item, index) => {
                        return <BookCard key={`${item}_${index}`}
                                         title={item.volumeInfo['title']}
                                         booksId={item.id}
                                         img={item.volumeInfo.imageLinks['thumbnail']}

                        />
                    }))}

                </div>
                <div className={s.btn}>
                    <Stack direction="row"  className={s.btn} >
                        <Button variant="contained" color="success" onClick={showMoreItem} style={{width:'1200px'}}>
                            Load More
                        </Button>
                    </Stack>
                </div>
            </div>

        </div>
    </>);
};

export default PaginationList;