import React from 'react';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginForm />}></Route>
        <Route path = '/SignUp' element = {<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;