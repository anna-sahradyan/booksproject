import React from 'react';
import s from './BookCard.module.scss';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';
const BookCard = (props) => {
    return (
        <>
            <motion.div className={s.card} whileHover={{scale: 1.03}}>
                <Link to={`/books/:${props.id}`}>
                    <img src={props.img} alt=""/>
                    {/*<h5>{props.authors}</h5>*/}
                    {/*<h6>{props.year}</h6>*/}

                </Link>
            </motion.div>
        </>
    );
};

export default BookCard;