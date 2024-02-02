import '../index.css'
import axios from 'axios';
import { useState } from "react";


const Login = () => {


  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {

  event.preventDefault();
    setErrors([]);


  const params = new FormData(event.target);

  axios
    .post("http://localhost:8000/auth/token/", params)
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error.response);
      setErrors(["Invalid email or password"]);
    });
  }


  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
      {errors && errors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder='Username' required/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password"
        id="password" placeholder='Password' required/>
        <br />
        <input type="submit" value="Submit"/>

      </form>
    </div>

   )
}
export default Login;

// http://localhost:8000/auth/signup