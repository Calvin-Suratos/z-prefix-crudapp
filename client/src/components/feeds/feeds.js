import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Fieldbox, GridDiv, HeaderOne, Legendbox } from './stylefeeds';


const Feeds = ({name}) => {
  const [results, setResults] = useState([])
  const [posts, setPosts] = useState([])
  const nav = useNavigate();

  useEffect(() => {
    fetch('https://calvin-blogger-api.herokuapp.com/users')
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetch('https://calvin-blogger-api.herokuapp.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err))
  }, [])


  return (
    <>
      <HeaderOne>FEEDS</HeaderOne>
      {results.map(user => user.first_name === name.split('-')[0] ? null :
        <GridDiv key={user.id}>
          <Fieldbox>
            <Legendbox style={{'textAlign': 'center'}}>{user.first_name} {user.last_name}</Legendbox>
            {posts.map((post) => 
              user.id === post.users_id ?                    
              <Fieldbox key={post.id}>
                <Legendbox>Post: {post.title}</Legendbox>
                {post.content.length > 100 ? <div>{post.content.substring(0,100)}...</div>:<div>{post.content}</div>}
                <button onClick={() => nav(`/${user.first_name}-${user.last_name}/${post.id}`)}>See more</button>
              </Fieldbox>
              : null                
            )}
          </Fieldbox>          
        </GridDiv>
      )}
    </>
  )
}

export default Feeds;