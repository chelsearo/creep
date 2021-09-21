import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../Redux/actioncreators/useractions';
import { useHistory } from 'react-router-dom';

const Login = (props) =>  {

    const [loginValues, setValues] =  useState({
        name: "",
        password: ""
    })
  let history = useHistory()

  const handleChange = e => {
     setValues({...loginValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.handleLogin(loginValues)
    .then(() =>  history.push('/creeper'))
    .catch(() => history.push('/'))
  }


    return (
      <form onSubmit={handleSubmit} className="signup">
        <label>Name</label>
        <input
          placeholder="Your Name"
          name="name"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );

}
export default connect(null, { handleLogin })(Login);