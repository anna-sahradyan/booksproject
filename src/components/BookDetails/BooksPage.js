import React from 'react';
import s from "./BookDetails.module.scss";
const BooksPage = (props) => {
    return (
        <>
        <div className={s.title}>
            <div style={{color:"red"}}>{props.title}</div></div>
            <img src={props.img}alt=""/>
            <div style={{color:"red"}}>{props.categories}</div>
        </>
    );
};

export default BooksPage;