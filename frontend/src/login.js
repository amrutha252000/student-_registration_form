import './App.css';
function Login() {
  return (
    <div className="Login">
      <form>
        <div>
          <label>Tech ID </label>
          <input type="text" name="techid" required />
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
