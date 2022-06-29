import React from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const nav = useNavigate();

  return (
    <>
      <fieldset>
        <legend>CREATE ACCOUNT</legend>
        <label>
          <div><input type="text" placeholder="First Name"/></div>
          <div><input type="text" placeholder="Last Name"/></div>
          <div><input type="text" placeholder="Username"/></div>
          <div><input type="text" placeholder="Password"/></div>
          <div>______________</div>
          <button onClick={() => nav('/homepage')}>Submit</button>
        </label>
      </fieldset>
    </>
  )
}

export default CreateAccount;