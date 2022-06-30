import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NewPost = () => {

  const [newTitle, setNewTitle] = useState({newTitle: ''})
  const [newContent, setNewContent] = useState({newContent: ''})
  const params = useParams();
  const nav = useNavigate();
    
  const TitleHandler = (e) => {
    setNewTitle(e.target.value);
  };
  
  const ContentHandler = (e) => {
    setNewContent(e.target.value);
  };


  const newPost = () => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        title: newTitle,
        content: newContent,
        firstname: params.name.split('-')[0]
      })
    }
    
    fetch('http://localhost:8080/newpost', init)
    .then(res => res.json())
    .then(user => nav(`/${user.first_name}-${user.last_name}`))
    .catch(err => console.error(err))
  }

  return(
    <>
      <h1>New Post</h1>
      <fieldset>
        <legend>Title</legend>
        <div><input type='text' placeholder="Title" onKeyUp={(e) => TitleHandler(e)}/></div>
        <textarea rows='4' cols='50' placeholder="Insert Blog Here" onKeyUp={(e) => ContentHandler(e)}></textarea>
        <div><button onClick={() => newPost()}>Submit</button></div>
      </fieldset>
    </>
  )
}

export default NewPost;