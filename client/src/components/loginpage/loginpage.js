import React, { useState, /*useEffect,*/ } from "react";
import { useNavigate } from "react-router-dom";

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
    
    fetch('http://localhost:8080/login', init)
    .then(res => res.json())
    .then(user => nav(`/${user.first_name}-${user.last_name}`))
    .catch(err => console.error(err))
  }


  return (
    <>
      <fieldset>
        <legend>LOGIN</legend>
        <label>
          <div><input type="text" placeholder="Username" onKeyUp={(e) => searchHandlerUsername(e)}/></div>
          <div><input type="text" placeholder="Password" onKeyUp={(e) => searchHandlerPassword(e)}/></div>
          <div><input type="submit" value="Submit" onClick={() => checkProfile()}/></div>
          <div>______________</div>
          <button onClick={() => nav('/createaccount')}>Create Account</button>
        </label>
      </fieldset>
    </>
  )
}

export default LoginPage;