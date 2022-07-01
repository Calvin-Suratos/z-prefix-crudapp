import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {firstContext, lastContext} from '../../utils/userContext';
import EditPost from '../editpost/editpost';
import Feeds from '../feeds/feeds';
import { Fieldbox, HeaderOne, Legendbox, Logout } from './stylehomepage';


const HomePage = () => {
  const [results, setResults] = useState([{id: 1, first_name: '', last_name: '', username: '', password: '', salt: ''}])
  const [posts, setPosts] = useState([{users_id: 1, title: '', content: ''}])
  const {setFirstName} = useContext(firstContext)
  const {setLastName} = useContext(lastContext)
  let today = new Date().toLocaleString()
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    fetch('https://calvin-blogger-api.herokuapp.com/users/' + params.name.split('-')[0])
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => console.error(err))
  }, [params.name])

  useEffect(() => {
    fetch('https://calvin-blogger-api.herokuapp.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err))
  }, [])

  const deletePost = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm('Are you sure you want to delete the post?')){
    const postURL = 'https://calvin-blogger-api.herokuapp.com/posts/' + id;
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
      {setFirstName(user.first_name)}
      {setLastName(user.last_name)}
      <Logout onClick={() => nav('/')}>Logout</Logout>
      <div key={user.id}>
        <HeaderOne>{user.first_name.toUpperCase()} {user.last_name.toUpperCase()}</HeaderOne>
        <Fieldbox>
          <Legendbox style={{'textAlign': 'center'}}>YOUR POSTS</Legendbox>
          <button onClick={() => nav(`/${user.first_name}-${user.last_name}/newpost`)}>New Post</button>
          {posts.map(post => 
            user.id === post.users_id ?                    
              <Fieldbox key={post.title}>
                <Legendbox>{post.title}</Legendbox>
                <EditPost post={post}/>
                <button onClick={() => nav(`/${user.first_name}-${user.last_name}/${post.id}`)}>See more</button>
                <h6>Created on: {today}</h6>
                <button onClick={() => deletePost(post.id)}>X</button>
              </Fieldbox>                       
            : null              
          )}
        </Fieldbox>          
      </div>

      <Feeds name={params.name}/>
    </>
  )
}

export default HomePage;