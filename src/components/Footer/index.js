import React from 'react';
import  s from './Footer.module.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.bookDiv}>Books App</div>
                <span><CopyrightIcon style={{width:'15px',marginTop:'-5px'}} />2022, Books,Inc.or its affiliates</span>
            </footer>
        </>
    );
};

export default Footer;