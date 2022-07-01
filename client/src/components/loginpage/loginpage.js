import React, { useState, /*useEffect,*/ } from "react";
import { useNavigate } from "react-router-dom";
import { Createbox, Fieldbox, Headerbox, Inputbox, Legend, Submitbox } from "./styleloginpage";

const LoginPage = () => {
  const nav = useNavigate();
  const [searchUsername, setSearchUsername] = useState({searchUsername: ''})
  const [searchPassword, setSearchPassword] = useState({searchPassword: ''})

    
  const searchHandlerUsername = (e) => {
    setSearchUsername(e.target.value);
  };
  
  const searchHandlerPassword = (e) => {
    setSearchPassword(e.target.value);
  };
  
  
  let checkProfile = () => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        username: searchUsername,
        password: searchPassword,
      })
    }
    
    fetch('https://calvin-blogger-api.herokuapp.com/login', init)
    .then(res => res.json())
    .then(user => {
      if (user.message !== 'Could not retrieve data') {
        nav(`/${user.first_name}-${user.last_name}`)
      }
      else {
        alert('Invalid username or password. Please try again.')
      }
    })
    .catch(err => console.error(err))
  }


  return (
    <>
      <Headerbox>BLOG SPACE</Headerbox>
      <Fieldbox>
        <Legend>LOGIN</Legend>
        <label>
          <div><Inputbox type="text" placeholder="Username" onKeyUp={(e) => searchHandlerUsername(e)}/></div>
          <div><Inputbox type="password" placeholder="Password" onKeyUp={(e) => searchHandlerPassword(e)}/></div>
          <div><Submitbox type="submit" value="Submit" onClick={() => checkProfile()}/></div>
          <div>______________</div>
          <Createbox onClick={() => nav('/createaccount')}>Create Account</Createbox>
        </label>
      </Fieldbox>
    </>
  )
}

export default LoginPage;