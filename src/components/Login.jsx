import '../index.css'
import axios from 'axios';
import { useState } from "react";


const Login = ({closeModal}) => {


  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {

  event.preventDefault();
    setErrors([]);


  const params = new FormData(event.target);

  axios
    .post("http://localhost:8000/auth/token/", params)
    .then(response => {
      console.log(response);
      closeModal();
    })
    .catch((error) => {
      console.log(error.response);
      setErrors(["Invalid email or password"]);
    });
  }


  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Log In</h2>
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
          <button type='button' onClick={closeModal}>X</button>
        </form>
      </div>
    </div>

   )
}
export default Login;

// http://localhost:8000/auth/signup