import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncAllBooks, selectAllBooks} from "../store/allBooksSlice";
import s from './AllBooksList.module.scss';
import BookCard from "../components/BookCard";

const AllBooksList = () => {
    const dispatch = useDispatch();
    const allBooks = useSelector(selectAllBooks);
    const books=allBooks.items;
    console.log(allBooks)
    console.log(books)
    useEffect(() => {
        dispatch(fetchAsyncAllBooks());

    }, [dispatch])

    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.cardList}>
                        {/*{allBooks.Response === 'true' ? (books.map((item, index) => {*/}
                        {/*    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;*/}
                        {/*    return <BookCard key={`${item}_${index}`} data={item} img={thumbnail} authors={item.volumeInfo.authors}*/}
                        {/*                     year={item.Year}/>*/}
                        {/*})) : (<div><h1>{allBooks.Error}</h1></div>)}*/}

                        {/*{books.map((item,index)=>{*/}
                        {/*    return <BookCard key={`${item}_${index} `} id={item.id}/>*/}
                        {/*})}*/}

                        {allBooks.kind === 'books#volumes' ?(books.map((item,index)=>{
                            return <BookCard key={`${item}_${index}`}/>
                        })):(<div><h1>{allBooks.Error}</h1></div>) }


                    </div>
                </div>
            </div>


        </>
    );
};

export default AllBooksList;