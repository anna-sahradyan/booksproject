import React, {useEffect} from 'react';
import s from './BookDetails.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchAsyncAllBooksId, removeList, selectOneBook} from "../../store/detailSlice";
import Loading from '../Loading/index';
import BooksPage from './BooksPage';

const BookDetails = () => {
    let {booksId} = useParams();
    let dispatch = useDispatch();
    const allBooks = useSelector(selectOneBook);
    let bookItem = Object.values(allBooks).map((item) => {
        return item;
    })
    let books =  Object.values(bookItem).map((item) => {
    return item;
    })
    console.log(books);
    useEffect(() => {
        dispatch(fetchAsyncAllBooksId(booksId));
        return () => {
            dispatch(removeList());
        }

    }, [dispatch])
    return (<>
        <div className={s.contentPage}>
            <div className={s.containerPage}>
                <div className={s.cardList}>
                    { books.length===''?(<Loading/>):(books.map((item,index)=>
                           <BooksPage title={item['title']}  key={`${item}_${index}`} />

                    ))}
                </div>
            </div>


        </div>

    </>);
};

export default BookDetails;