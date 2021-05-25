import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/logo.png';
import './Login.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
  integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
  crossorigin="anonymous"
/>

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
 .then(
        data => data.json()
    ).catch(
        data => null
    )
}



export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if(token)
      setToken(token);
    else {
      console.log("AUTH SERVER NOT PRESENT");
    }
  }




  return(
    <div className="wrapper fadeInDown">
    <div id="formContent">

      <div className="fadeIn first">
        <img src={logo} id="icon" alt="User Icon" />
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Login" onChange={e => setUserName(e.target.value)}/>
        <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        <input type="submit" className="fadeIn fourth" value="Log In"/>
      </form>

      <div id="formFooter">
        <a className="underlineHover" href="preferences">Forgot Password?</a>
      </div>

    </div>
  </div>
  )


}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
