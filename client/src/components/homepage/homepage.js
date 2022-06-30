import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Feeds from '../feeds/feeds';


const HomePage = () => {
  const [results, setResults] = useState([{id: 1, first_name: '', last_name: '', username: '', password: '', salt: ''}])
  const [posts, setPosts] = useState([{users_id: 5, title: '', content: ''}])
  const params = useParams();
  const nav = useNavigate();
  let today = new Date().toLocaleString()

  useEffect(() => {
    fetch('http://localhost:8080/users/' + params.name.split('-')[0])
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => console.error(err))
  }, [params.name])

  useEffect(() => {
    fetch('http://localhost:8080/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err))
  }, [])

  const deletePost = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm('Are you sure you want to delete the post?')){
    const postURL = 'http://localhost:8080/posts/' + id;
    const init = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    }
    fetch(postURL, init)
    .then(res => res.json())
    .then(data => {
      let temp = {...results};
      setResults(temp);
      alert('Post has been deleted');
      window.location.reload(false);
    })
  }
  }

  let user = results[0]
  return (
    <>
      <button onClick={() => nav('/')}>Logout</button>
      <div key={user.id}>
        <h1>{user.first_name} {user.last_name}</h1>
        <h3>WELCOME TO THE HOMEPAGE</h3>
        <fieldset>
          <legend>YOUR POSTS</legend>
          <button onClick={() => nav(`/${user.first_name}-${user.last_name}/newpost`)}>New Post</button>
          {posts.map(post => 
            user.id === post.users_id ?                    
            <fieldset key={post.title}>
              <legend>{post.title}</legend>
              {post.content.length > 100 ? <div>{post.content.substring(0,100)}...</div>:<div>{post.content}</div>}
              <h6>Created on: {today}</h6>
              <button onClick={() => deletePost(post.id)}>X</button>
            </fieldset>
            : null              
          )}
        </fieldset>          
      </div>

      <Feeds name={params.name.split('-')[0]}/>
    </>
  )
}

export default HomePage;