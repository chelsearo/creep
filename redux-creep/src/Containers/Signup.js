import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSignup } from '../Redux/actioncreators/useractions';
import { useHistory } from 'react-router-dom';

const Signup = (props) =>  {

    const history = useHistory();

    const [signupValues, setValues] =  useState({
        name: "",
        email: "",
        password: ""
    })
 

  const handleChange = e => {
     setValues({...signupValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSignup(signupValues)
    .then(() =>  history.push('/profile'))
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
        <label>Email</label>
        <input
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    );

}
export default connect(null, { handleSignup })(Signup);