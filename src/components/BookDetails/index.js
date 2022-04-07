import React, {useEffect} from 'react';
import s from './BookDetails.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import BooksPage from "../BooksPage";
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


            </div>

        </>
    );
};

export default BookDetails;