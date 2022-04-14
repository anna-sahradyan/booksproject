import React from 'react';
import s from "./BookDetails.module.scss";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {motion} from "framer-motion";
const BooksPage = (props) => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (<>
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
        <div className={s.partData}>
            <p><span>Authors:</span>{props.authors}</p>
            <p><span>Publisher:</span>{props.publisher}</p>
            <p><span>Language:</span>{props.language}</p>
            <p><span>PublishedDate:</span>{props.publishedDate}</p>
            <p><span>PageCount:</span>{props.pageCount}</p>
        </div>
        <motion.div className={s.imgPart} whileHover={{scale: 1.03}}><img src={props.img} alt={props.title}/>
        </motion.div>
<div className={s.partDescription}>
        <Button onClick={handleClickOpen('body')} style={{position:"absolute",left:"670px",width:"500px",top:"50px"}}><h4>Click here to see the description</h4></Button>
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                >
                    {props.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
</div>

    </>);
};

export default BooksPage;