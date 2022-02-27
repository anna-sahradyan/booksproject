import React from 'react';
import s from './Filter.module.scss';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';

const Filter = (props) => {
    return (
        <>
            {/*<div className={s.contentDiv}>*/}
            {/*    <div className={s.content}>*/}
            {/*        <div className={s.cardList}>*/}
                        <motion.div className={s.card} whileHover={{scale: 1.03}}>
                            <Link to={`/books/:${props.booksId}`}>
                                <img src={props.img} alt=""/>
                                <h3>{props.title}</h3>
                                <h4>{props.authors}</h4>
                                <h4>published:{props.publishedDate}</h4>

                            </Link>
                        </motion.div>
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};
export default Filter;