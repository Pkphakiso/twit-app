import React from 'react';
import classes from "./Modal.module.css";

function Modal({children, onModalClick}) { // distructuring object props 
     
        return (
            <>
                <div className={classes.backdrop} onClick={ onModalClick }/>
                <dialog open className={classes.modal}>
                    {children}
                </dialog>         
            </>
        );
    
}
 
export default Modal;