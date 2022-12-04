import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function LoginSuccess() {
  return (
    <div className='login_success'>
    <h1>  Login Successfull!!! </h1>
    <Button variant="outline-success" href='login'>Log Out</Button>{' '}
    </div>
  );
}

export default LoginSuccess;