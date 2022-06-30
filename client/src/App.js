import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import LoginPage from './components/loginpage/loginpage';
import CreateAccount from './components/createaccountpage/createaccount';
import { firstContext, lastContext } from './utils/userContext';
import NewPost from './components/newpost/newpost';
import SeePost from './components/seepost/seepost';
import './App.css';


function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const first = {firstName, setFirstName}
  const last = {lastName, setLastName}



  return (
    <div className='App'>
      <div className='App-header'>
        <firstContext.Provider value={first}>
        <lastContext.Provider value={last}>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/:name' element={<HomePage/>}/>
          <Route path='/createaccount' element={<CreateAccount/>}/>
          <Route path='/:name/newpost' element={<NewPost/>}/>
          <Route path='/:name/:post' element={<SeePost/>}/>
        </Routes>
        </lastContext.Provider>
        </firstContext.Provider>
      </div>
    </div>
  );
}

export default App;
