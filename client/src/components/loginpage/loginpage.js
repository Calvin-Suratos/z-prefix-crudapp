import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../../utils/userContext";

const LoginPage = () => {
  const nav = useNavigate();
  const [users, setUsers] = useState([])
  const {setFirstName} = useContext(userContext);
  const [searchUsername, setSearchUsername] = useState({username: ''})
  const [searchPassword, setSearchPassword] = useState({password: ''})

  useEffect(() => {
    fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error(err))
  }, [])


  const searchHandlerUsername = (e) => {
    setSearchUsername(e.target.value);
  };

  const searchHandlerPassword = (e) => {
    setSearchPassword(e.target.value);
  };


  let checkProfile = () => {
    let count = 0;
    users.map(user => {
      if (searchUsername === user.username && searchPassword === user.password) {
        setFirstName(user.first_name);
        return nav(`/${user.first_name}-${user.last_name}`);
      }    
      else {
        return count++;
      }
    })

    if (count === users.length) {
      alert ('Incorrect username or password. Please try again.')
    }
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