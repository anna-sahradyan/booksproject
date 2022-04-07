import React, {useEffect} from 'react';
import s from './BookDetails.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchAsyncAllBooksId, selectOneBook} from "../../store/detailSlice";


const BookDetails = () => {
    let {booksId} = useParams();
    let dispatch = useDispatch();
    const allBooks = useSelector(selectOneBook);
    let books = allBooks.items;

    console.log(booksId);
    useEffect(() => {
        dispatch(fetchAsyncAllBooksId(booksId));
        return () => {

        }
    }, [dispatch, booksId])
    return (
        <>
            <div className={s.contentPage}>
                <div className={s.containerPage}>
                    <div className={s.cardList}>


                     </div>
                </div>


            </div>

        </>
    );
};

export default BookDetails;