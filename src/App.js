import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Main from "./Main";
import Footer from "./components/Footer";
import BookDetails from "./components/BookDetails";
import AllBooksList from "./containers/allBooksList/AllBooksList";

const App = () => {
    return (
        <>
            <div className='wrapper'>
                <Header/>
                <div className='main'>
                    <Routes>
                        <Route exact path='/' element={<Main/>}/>
                        {/*<Route exact path='/filter' element={<AllBooksList/>}/>*/}
                        <Route  exact  path='/book/:booksId' element={<BookDetails/>}/>

                    </Routes>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default App;