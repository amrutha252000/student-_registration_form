import './App.css';
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const baseURL = "http://127.0.0.1:3001";

function Login() {
  const [techid, setTechid] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const Submit_form = (event) => {
    event.preventDefault();
    const request_body = {
       techid, password

    };
    axios.post(`${baseURL}/login`, request_body)
    .then((response) => {
        console.log(response);
        if(response.status==200)
            navigate("/login_success");
    })
    .catch((err) =>{
        console.log(err);
        if(err.status==400)
            window.alert(err.response.message);
    });
}
  return (
    <div className='design'>
        <h1> Log IN</h1>
    <div className="Login">
      <form onSubmit={Submit_form} className="formdesign">
        <div  className="field1">
          <label><b>Tech ID : </b> </label>
          <input type="text" name="techid" required onChange={(event) => {setTechid(event.target.value)}} />
        </div>
        <div>
          <label><b>Password : </b> </label>
          <input type="password" name="password" required onChange={(event) => {setPassword(event.target.value)}} />
        </div>
        <div className='design2'>
          <input type="submit" />
        </div>
      </form>
    </div>
  </div>
  );
}

export default Login;
