import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fieldbox, Inputbox, Legend, Submitbox } from "./stylecreateacount";

const CreateAccount = () => {
  const nav = useNavigate();
  const [searchFirstName, setSearchFirstName] = useState({searchFirstName: ''})
  const [searchLastName, setSearchLastName] = useState({searchLastName: ''})
  const [searchUsername, setSearchUsername] = useState({searchUsername: ''})
  const [searchPassword, setSearchPassword] = useState({searchPassword: ''})

  const searchHandlerFirstName = (e) => {
    setSearchFirstName(e.target.value);
  };
  
  const searchHandlerLastName = (e) => {
    setSearchLastName(e.target.value);
  };

  const searchHandlerUsername = (e) => {
    setSearchUsername(e.target.value);
  };
  
  const searchHandlerPassword = (e) => {
    setSearchPassword(e.target.value);
  };

  const createProfile = () => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        first_name: searchFirstName,
        last_name: searchLastName,
        username: searchUsername,
        password: searchPassword,
      })
    }
    
    fetch('https://calvin-blogger-api.herokuapp.com/createaccount', init)
    .then(res => res.json())
    .then(user => {
      console.log(user)
      nav(`/${user.first_name}-${user.last_name}`)
    })
    .catch(err => console.error(err))    
  }

  return (
    <>
        <Legend>CREATE ACCOUNT</Legend>
      <Fieldbox>
        <label>
          <div><Inputbox type="text" placeholder="First Name" onKeyUp={(e) => searchHandlerFirstName(e)}/></div>
          <div><Inputbox type="text" placeholder="Last Name" onKeyUp={(e) => searchHandlerLastName(e)}/></div>
          <div><Inputbox type="text" placeholder="Username" onKeyUp={(e) => searchHandlerUsername(e)}/></div>
          <div><Inputbox type="password" placeholder="Password" onKeyUp={(e) => searchHandlerPassword(e)}/></div>
          <div>______________</div>
          <Submitbox onClick={() => createProfile()}>Submit</Submitbox>
        </label>
      </Fieldbox>
    </>
  )
}

export default CreateAccount;