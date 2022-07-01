import React, { useState } from "react";

const EditPost = ({post}) => {
  const [isEditable, setIsEditable] = useState(false)
  const [editInput, setEditInput] = useState('')

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
          "content": editInput,
        } 
      )
    }

    fetch(`https://calvin-blogger-api.herokuapp.com/posts/${post.id}`, init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      window.location.reload(false);
    })
  }

  const editHandler = (e) => {
    setEditInput(e.target.value)
  }

  return (
    <div>      
      {post.content.length > 100 ? 
        <>
        {isEditable ? 
          <>
          <div><textarea rows='4' cols='50' onKeyUp={(e) => editHandler(e)} placeholder='Insert New Blog Here'/></div>
          <div><button onClick={() => {
            editPost(post)
            
            }
            }>Submit</button></div>
          </>
        :
          <>
          <div>{post.content.substring(0,100)}...</div>
          <div><button onClick={() => setIsEditable(!isEditable)}>Edit</button></div>
          </>
        }
        </>
      :
        <>
        {isEditable ? 
          <>
          <div><textarea rows='4' cols='50' onKeyUp={(e) => editHandler(e)} placeholder='Insert New Blog Here'/></div>
          <div><button onClick={() => {
            editPost(post)
            
            }
            }>Submit</button></div>
          </>
        :
          <>
          <div>{post.content}</div>
          <div><button onClick={() => setIsEditable(!isEditable)}>Edit</button></div>
          </>
        }
        </>
      }
    </div>
  )
}

export default EditPost;

// <div>      
//   {post.content.length > 100 ? 
//   <div><div contentEditable="true" onInput={() => editPost(post)}>{isEditable ? post.content : post.content.substring(0,100)}</div><span>...</span></div>
//     :<div contentEditable="true" onInput={(e) => editPost(e)}>{post.content}</div>}
// </div>


// function Tasks ({item}) {
//   return(
//       <div className = 'tasks-container'>
//           <div contenteditable="true" onInput={e => editTask(item.id, e.currentTarget.textContent)} >
//               {item.chore}
//           </div>
//       </div> 
//   )
