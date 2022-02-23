import React from 'react';
import s from './Header.module.scss';
import SearchInputList from "../../containers/searchInputList";

const Header = () => {

    return (
        <>
            <header>
                <div className={s.header}>
                    <SearchInputList/>
                </div>
            </header>
        </>
    );
};

export default Header;