import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';


function App() {

  const [ modalIsVisible, setModalIsVisible ] =  useState(false);
  function showModalHandle(){
    setModalIsVisible(true);
  }
  
  function modalClosedHandle(){ 
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandle}/>
      <main>
        <PostsList  isPosting={modalIsVisible} onStopPosting={modalClosedHandle}/>
      </main>
    </>
    
  );
}

export default App;