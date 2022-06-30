import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {firstContext, lastContext} from '../../utils/userContext';

const SeePost = () => {
  const [posts, setPosts] = useState([{users_id: 1, title: '', content: ''}])
  const {firstName} = useContext(firstContext)
  const {lastName} = useContext(lastContext)
  const params = useParams();
  const nav = useNavigate();

  console.log(firstName)
  console.log(lastName)

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${params.post}`)
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err))
  }, [params.post])


  return (
    <>
      <h1>{params.name.split('-')[0]} {params.name.split('-')[1]}'s Post</h1>
      <h3>{posts[0].title.toUpperCase()}</h3>
      <fieldset><div>{posts[0].content}</div></fieldset>
      <h6><button onClick={() => nav(`/${firstName}-${lastName}`)}>Back to Home Page</button></h6>
    </>
  )
}

export default SeePost;