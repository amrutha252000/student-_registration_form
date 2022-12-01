import React from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const baseURL = "http://127.0.0.1:3001";

function Signin() 
{
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
                
    //             <Alert variant="danger" dismissible>
    //     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    //     <p>
    //       Change this and that and try again. Duis mollis, est non commodo
    //       luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    //       Cras mattis consectetur purus sit amet fermentum.
    //     </p>
    //   </Alert>
        });
    }
    return (
        <div className='design'>
        <h1> Sign-IN</h1>
        <form onSubmit={Submit_form}  className="formdesign">
            <div className="field1">
            <label><b>Name :</b> </label>
            <input type="text" name="name" required onChange={(event) => {setName(event.target.value)}} />
            </div>
            <div>
            <label><b>Tech ID :</b> </label>
            <input type="text" name="techid" required onChange={(event) => {setTechid(event.target.value)}} />
            </div>
            <div>
            <label><b>Email ID :</b> </label>
            <input type="email" name="email" required onChange={(event) => {setEmail(event.target.value)}}/>
            </div>
            <div>
            <label><b>Ph No :</b> </label>
            <input type="text" name="Phone" required onChange={(event) => {setPhno(event.target.value)}}/>
            </div>
            <div>
            <label><b>Gender : </b></label>
            <input type="text" name="text" required onChange={(event) => {setGender(event.target.value)}}/>
            </div>
            <div>
            <label><b>Password :</b> </label>
            <input type="password" name="password" required onChange={(event) => {setPassword(event.target.value)}}/>
            </div>
        
            <div className='design2'>
            <input type="submit"/>
            </div>
            <div className='design3'>
            <i>If you already have an account <a href="/login">click here</a></i>
            </div>
        </form>
        </div>
     

     
    );
}

export default Signin;