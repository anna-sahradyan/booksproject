import React from 'react';
import s from './BookCard.module.scss';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';

const BookCard = (props) => {
    return (
        <>
            <motion.div className={s.card} whileHover={{scale: 1.03}}>
                <Link to={`/books/${props.booksId}`} className={s.cardItem}><img src={props.img} alt=""/>  </Link>
                <h3>{props.title}</h3>
                <h4>{props.authors}</h4>


            </motion.div>
        </>
    );
};

export default BookCard;