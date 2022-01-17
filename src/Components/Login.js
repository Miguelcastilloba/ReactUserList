import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import useLocalStorage from 'use-local-storage'




async function loginUser(credentials) {
 return fetch('https://reqres.in/api/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {

  

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

const switchTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);

}



  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return(

<div className='wrapper' data-theme={theme}>

<div className='TopMenu'>  <button onClick={switchTheme} >  Cambiar al tema {theme === 'light' ? 'oscuro' : 'claro'} </button></div>



    <div className="login-wrapper">



      <h1>Favor de iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nombre de usuario:</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Contraseña:</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};