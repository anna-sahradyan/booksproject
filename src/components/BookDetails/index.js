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
    let books = {...allBooks.volumeInfo};
    let images ={...books.imageLinks}
        console.log(books.description)
    useEffect(() => {
        if (booksId && booksId !== '') {
            dispatch(fetchAsyncAllBooksId(booksId));
        }
        return () => {
            dispatch(removeList());
        }

    }, [dispatch, booksId])
    return (<>
        <div className={s.contentPage}>
            <div className={s.containerPage}>
                <div className={s.cardList}>
                    {books.length === '' ? (<Loading/>) : (<>
                            <BooksPage title={books.title}
                                       publisher={books.publisher}
                                       authors={books.authors}
                                       img={images['thumbnail']}
                                       categories={books.categories}
                                       language={books.language}
                                       publishedDate={books.publishedDate}
                                       pageCount={books.pageCount}
                                       description={books.description}

                            />
                        </>


                    )}
                </div>
            </div>
        </div>

    </>);
};

export default BookDetails;