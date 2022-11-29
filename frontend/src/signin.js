import axios from 'axios';
import './App.css';
function Signin() {

    submit_form = () =>{
              
    }
    return (
        <div className="Signin">
        <form>
            <div>
            <label>Name </label>
            <input type="text" name="name" required />
            </div>
            <div>
            <label>Tech ID </label>
            <input type="text" name="techid" required />
            </div>
            <div>
            <label>Email ID </label>
            <input type="email" name="email" required />
            </div>
            <div>
            <label>Phone Number </label>
            <input type="text" name="Phone" required />
            </div>
            <div>
            <label>Gender </label>
            <input type="text" name="text" required />
            </div>
            <div>
            <label>Password </label>
            <input type="password" name="password" required />
            </div>
            <div>
            <input type="submit" />
            </div>
            If you already have an account <a href="/login">click here</a>
        </form>
        </div>
    );
}

export default Signin;
