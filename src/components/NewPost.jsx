import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({onCancel, onAddPost}) {
    // check why 
    const [ enteredBody, setEnteredBody ] = useState("");
    const [ enteredAuthor, setEnteredAuthor ] = useState("");
    

    function changeBodyHandler(e){
        console.log(e.target.value);
        setEnteredBody(e.target.value);
    }
    function changeAuthorHandler(e){
        console.log(e.target.value);
        setEnteredAuthor(e.target.value);
    }
    function submitHandler(e){
        e.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        onAddPost(postData);
        //check its a function call
        onCancel();
    }
    return ( 
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeAuthorHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
     );
}
 
export default NewPost;