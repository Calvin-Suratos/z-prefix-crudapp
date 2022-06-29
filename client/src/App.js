import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import LoginPage from './components/loginpage/loginpage';
import CreateAccount from './components/createaccount/createaccount';
import userContext from './utils/userContext';
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
        </Routes>
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
