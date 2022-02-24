import React, {useEffect} from 'react';
import s from './BookDetails.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncAllBooksDetails, selectAllBooksDetails} from "../../store/detailsSlice";
import {useParams} from "react-router-dom";
import BookCard from "../BookCard";
import BooksPage from "../BooksPage";


const BookDetails = () => {
    let {booksId} = useParams();
    let dispatch = useDispatch();
    const allBooks = useSelector(selectAllBooksDetails);
    let books=allBooks.items;

    useEffect(() => {
        dispatch(fetchAsyncAllBooksDetails(booksId))
    }, [dispatch, booksId])
    useEffect(() => {
        return () => {
            if (booksId && booksId !== ''){
                fetchAsyncAllBooksDetails(booksId);
            }

        }
    }, [])
    return (
        <>
            <div className={s.contentPage}>
                <div className={s.containerPage}>

                        {allBooks.kind === 'books#volumes' ? (books.map((item, index) => {
                            return <BooksPage key={`${item}_${index}`} title={item.volumeInfo['title']}
                                             booksId={item.id}
                                             img={item.volumeInfo.imageLinks['thumbnail']}
                                             authors={item.volumeInfo['authors']}
                                             description={item.volumeInfo['description']}
                                             categories={item.volumeInfo['categories']}
                                             language={item.volumeInfo['language']}
                                             publishedDate={item.volumeInfo['publishedDate']}/>
                        })) : (<div><h1>{allBooks.Error}</h1></div>)}


                    </div>


            </div>

        </>
    );
};

export default BookDetails;