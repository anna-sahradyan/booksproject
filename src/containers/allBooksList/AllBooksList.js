import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncAllBooks, selectAllBooks} from "../../store/allBooksSlice";
import s from './AllBooksList.module.scss';
import BookCard from "../../components/BookCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Filter from "../filter";


const AllBooksList = ({book}) => {
    const dispatch = useDispatch();
    const allBooks = useSelector(selectAllBooks);
    const [visible, setVisible] = useState(10);
    const showMoreItem = () => {
        setVisible((prevValue)=>prevValue+5);
    }

    useEffect(() => {
        dispatch(fetchAsyncAllBooks());

    }, [dispatch])

    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.cardList}>
                        {book.slice(0, visible).map((item, index) => {
                                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                                if (thumbnail !== undefined) {
                                    return <Filter key={`${item}_${index}`} img={thumbnail} amount={amount}
                                                     authors={item.volumeInfo['authors']}
                                                     categories={item.volumeInfo['categories']}
                                                     language={item.volumeInfo['language']}
                                                     publishedDate={item.volumeInfo['publishedDate']}
                                    />
                                }

                            })}

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


        </>
    );
};

export default AllBooksList;