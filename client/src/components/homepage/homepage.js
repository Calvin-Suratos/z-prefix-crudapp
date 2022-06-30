import React, { useState, useEffect, /*useContext*/ } from 'react';
import { useParams } from 'react-router-dom';
import LandingPage from './landingpage';
// import userContext from '../../utils/userContext';


const HomePage = () => {
  const [results, setResults] = useState([])
  const [posts, setPosts] = useState([])
  // const {firstname} = useContext(userContext);
  const params = useParams();

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
            {posts.map(post => 
              user.id === post.users_id ?                    
              <fieldset key={post.id}>
                <legend>{post.title}</legend>
                <div>{post.content}</div>
              </fieldset>
              : null                
            )}
          </fieldset>          
        </div>
      )}

      <LandingPage name={params.name.split('-')[0]}/>
    </>
  )
}

export default HomePage;