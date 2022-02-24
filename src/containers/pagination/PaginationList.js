import React, {useEffect, useState} from 'react';
import s from './PaginationList.module.scss';
import BookCard from "../../components/BookCard";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncAllBooks, selectAllBooks} from "../../store/allBooksSlice";

const PaginationList = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(10);
    const dispatch = useDispatch();
    let allBooks = useSelector(selectAllBooks);
    let books = allBooks.items;
    console.log(books);
    const showMoreItem = () => {
        setVisible((prevValue)=>prevValue+5);
    }
    useEffect(() => {
        dispatch(fetchAsyncAllBooks());
    }, [dispatch]);
    return (<>
        <div className={s.contentDiv}>
            <div className={s.content}>
                <div className={s.cardList}>
                    {allBooks.kind === 'books#volumes' ? (books.slice(0, visible).map((item, index) => {
                        return <BookCard key={`${item}_${index}`} title={item.volumeInfo['title']}
                                         booksId={item.id}
                                         img={item.volumeInfo.imageLinks['thumbnail']}
                                         authors={item.volumeInfo['authors']}
                                         description={item.volumeInfo['description']}
                                         categories={item.volumeInfo['categories']}
                                         language={item.volumeInfo['language']}
                                         publishedDate={item.volumeInfo['publishedDate']}/>
                    })) : (<div><h1>{allBooks.Error}</h1></div>)}

                </div>
                <div className={s.btn}>
                    <Stack direction="row" spacing={2} className={s.btn}>
                        <Button variant="contained" color="success" onClick={showMoreItem}>
                            Load More
                        </Button>
                    </Stack>
                </div>
            </div>

        </div>
    </>);
};

export default PaginationList;