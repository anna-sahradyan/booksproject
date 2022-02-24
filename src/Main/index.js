import React from 'react';
import AllBooksList from "../containers/allBooksList/AllBooksList";
import PaginationList from "../containers/pagination/PaginationList";
import BookDetails from "../components/BookDetails";

const Main = () => {
    return (
        <>
            {/*<AllBooksList/>*/}
            <PaginationList/>
            {/*<BookDetails/>*/}
        </>
    );
};

export default Main;