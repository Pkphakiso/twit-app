import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList({isPosting,onStopPosting}){
  
    const [ posts , setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {
                isPosting ? (
                    <Modal onModalClick={onStopPosting}>
                        <NewPost  onCancel={onStopPosting} onAddPost={addPostHandler} />
                    </Modal>  
                ): false       
            }
            { 
                posts.length > 0 && (
                    <ul className={classes.posts}>
                        { 
                            posts.map(
                                (post) => <Post key={post.author} author={post.author} body={post.body} />
                            )
                        }
                    </ul>
                )
            }
            {
                posts.length === 0 && (
                    <div style={{textAlign:"center", color:"black"}}>
                        <h2>There are no post</h2>
                    </div>
                ) 
            }                    
        </>       
    );
}

export default PostsList;