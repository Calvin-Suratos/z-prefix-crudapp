import React, { useState, useEffect} from 'react';


const Feeds = ({name}) => {
  const [results, setResults] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err))
  }, [])


  return (
    <>
      <h1>YOUR FEED</h1>
      {results.map(user => user.first_name === name ? null :
        <div key={user.id}>
          <fieldset>
            <legend>{user.first_name} {user.last_name}</legend>
            {posts.map(post => 
              user.id === post.users_id ?                    
              <fieldset key={post.id}>
                <legend>{post.title}</legend>
                {post.content.length > 100 ? <div>{post.content.substring(0,100)}...</div>:<div>{post.content}</div>}
              </fieldset>
              : null                
            )}
          </fieldset>          
        </div>
      )}
    </>
  )
}

export default Feeds;