import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Feeds from '../feeds/feeds';


const HomePage = () => {
  const [results, setResults] = useState([])
  const [posts, setPosts] = useState([])
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


  return (
    <>
      {results.map(user => 
        <div key={user.id}>
          <h1>{user.first_name} {user.last_name}</h1>
          <h3>WELCOME TO THE HOMEPAGE</h3>
          <fieldset>
            <legend>YOUR POSTS</legend>
            <button onClick={() => nav(`/${user.first_name}-${user.last_name}/newpost`)}>New Post</button>
            {posts.map(post => 
              user.id === post.users_id ?                    
              <fieldset key={post.id}>
                <legend>{post.title}</legend>
                <div>{post.content}</div>
                <h6>Created on: {today = new Date().toLocaleString()}</h6>
                <button>X</button>
              </fieldset>
              : null                
            )}
          </fieldset>          
        </div>
      )}

      <Feeds name={params.name.split('-')[0]}/>
    </>
  )
}

export default HomePage;