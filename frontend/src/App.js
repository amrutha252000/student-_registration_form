import React from 'react';
import './App.css';
import Signin from './signin';
import Login from './login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import SignupSuccess from './signupSuccess';
function App() {
  return (
    <div className="App">
      <Router>
<Routes>
  <Route path="/" element={<Signin />}/>
  <Route path="/signin" element={<Signin />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup_success" element={<SignupSuccess />} />
</Routes>
</Router>
          
    </div>


  );
}

export default App;
