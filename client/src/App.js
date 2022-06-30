import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import LoginPage from './components/loginpage/loginpage';
import CreateAccount from './components/createaccountpage/createaccount';
import userContext from './utils/userContext';
import NewPost from './components/newpost/newpost';
import './App.css';


function App() {
  const [firstname, setFirstName] = useState('')
  const value = {firstname, setFirstName}

  return (
    <div className='App'>
      <div className='App-header'>
        <userContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/:name' element={<HomePage/>}/>
          <Route path='/createaccount' element={<CreateAccount/>}/>
          <Route path='/:name/newpost' element={<NewPost/>}/>
        </Routes>
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
