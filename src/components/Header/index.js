import React from 'react';
import s from './Header.module.scss';
import SearchInputList from "../../containers/search/searchInputList";
import SearchSortList from "../../containers/search/searchSortList";
import SearchCategoryList from "../../containers/search/searchCategoryList";

const Header = () => {

    return (
        <>
            <header>
                <div className={s.header}>
                    <SearchInputList/>
                    <div className={s.sortPart}>
                        <SearchSortList/>
                    </div>
                    <div className={s.category}>
                        <SearchCategoryList/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;