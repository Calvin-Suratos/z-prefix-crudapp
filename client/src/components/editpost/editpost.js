import React, { useState, useEffect } from "react";

const EditPost = ({post}) => {
  const [isEditable, setIsEditable] = useState(false)

  const editPost = (post) => {
    setIsEditable(!isEditable)

    const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(
        {
          "title": post.title,
          "content": !post.content,
        } 
      )
    }

    fetch(`http://localhost:8080/posts/${post.id}`, init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div>      
      {post.content.length > 100 ? 
      <div><div contentEditable="true" onInput={() => editPost(post)}>{isEditable ? post.content : post.content.substring(0,100)}</div><span>...</span></div>
        :<div contentEditable="true" onInput={() => 'd' }>{post.content}</div>}
    </div>
  )
}

export default EditPost;

// function Tasks ({item}) {
//   return(
//       <div className = 'tasks-container'>
//           <div contenteditable="true" onInput={e => editTask(item.id, e.currentTarget.textContent)} >
//               {item.chore}
//           </div>
//       </div> 
//   )
