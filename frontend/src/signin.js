import React from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from "react-router-dom";
const baseURL = "http://127.0.0.1:3001";

function Signin() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [techid, setTechid] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [phno, setPhno] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const Submit_form = (event) => {
        event.preventDefault();
        const request_body = {
            name, email, techid, gender, phno, password

        };
        console.log(name);
        axios.post(`${baseURL}/signup`, request_body)
        .then((response) => {
            console.log(response);
            if(response.status==200)
                navigate("/signup_success");
        })
        .catch((err) =>{
            console.log(err);
            if(err.status==400)
                window.alert(err.response.message);
        });
    }
    return (
        <div className="Signin">
        <form onSubmit={Submit_form}>
            <div>
            <label>Name </label>
            <input type="text" name="name" required onChange={(event) => {setName(event.target.value)}} />
            </div>
            <div>
            <label>Tech ID </label>
            <input type="text" name="techid" required onChange={(event) => {setTechid(event.target.value)}} />
            </div>
            <div>
            <label>Email ID </label>
            <input type="email" name="email" required onChange={(event) => {setEmail(event.target.value)}}/>
            </div>
            <div>
            <label>Phone Number </label>
            <input type="text" name="Phone" required onChange={(event) => {setPhno(event.target.value)}}/>
            </div>
            <div>
            <label>Gender </label>
            <input type="text" name="text" required onChange={(event) => {setGender(event.target.value)}}/>
            </div>
            <div>
            <label>Password </label>
            <input type="password" name="password" required onChange={(event) => {setPassword(event.target.value)}}/>
            </div>
            <div>
            <input type="submit"/>
            </div>
            If you already have an account <a href="/login">click here</a>
        </form>
        </div>
        
    );
}

export default Signin;