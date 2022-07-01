import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {firstContext, lastContext} from '../../utils/userContext';
import { Fieldbox, HeaderOne, Legendbox } from './styleseepost';

const SeePost = () => {
  const [posts, setPosts] = useState([{users_id: 1, title: '', content: ''}])
  const {firstName} = useContext(firstContext)
  const {lastName} = useContext(lastContext)
  const params = useParams();
  const nav = useNavigate();
  

  useEffect(() => {
    fetch(`https://calvin-blogger-api.herokuapp.com/posts/${params.post}`)
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err))
  }, [params.post])


  return (
    <>
      <HeaderOne>{params.name.split('-')[0].toUpperCase()} {params.name.split('-')[1].toUpperCase()}'S POST</HeaderOne>
      <Legendbox>TITLE: {posts[0].title.toUpperCase()}</Legendbox>
      <Fieldbox><div>{posts[0].content}</div></Fieldbox>
      <h6><button onClick={() => nav(`/${firstName}-${lastName}`)}>Back to Home Page</button></h6>
    </>
  )
}

export default SeePost;