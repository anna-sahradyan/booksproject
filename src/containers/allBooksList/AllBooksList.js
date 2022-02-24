import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncAllBooks, selectAllBooks} from "../../store/allBooksSlice";
import s from './AllBooksList.module.scss';
import BookCard from "../../components/BookCard";


const AllBooksList = () => {
    const dispatch = useDispatch();
    const allBooks = useSelector(selectAllBooks);
    const books = allBooks.items;


    useEffect(() => {
        dispatch(fetchAsyncAllBooks());

    }, [dispatch])

    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.cardList}>
                        {allBooks.kind === 'books#volumes' ? (books.map((item, index) => {
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
                </div>
            </div>


        </>
    );
};

export default AllBooksList;