import React, { useState } from 'react'
import { connect } from 'react-redux';
import { updateBio } from '../Redux/actioncreators/useractions';
import { useHistory } from 'react-router-dom';
import '../stylesheets/Home.scss';


const Profile = (props) => {
    const [userValues, setValues] =  useState({
        desc: "",
        age: "",
        image: ""
    })

    let history = useHistory();
 

  const handleChange = e => {
     setValues({...userValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.updateBio(userValues, props.currentUser)
    .then(() =>  history.push('/creeper'))
    .catch(() => history.push('/'))
  }


    return (
      <form onSubmit={handleSubmit} className="bio">
        <label>Age</label>
        <input
          placeholder="Your Age"
          name="age"
          onChange={handleChange}
        />
        <label>Bio</label>
        <input
          placeholder="Bio"
          name="desc"
          onChange={handleChange}
        />
        <label>Image</label>
        <input
          type="text"
          placeholder="Image Url"
          name="image"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );

}



const mapStateToProps =  state =>  {
    return {
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, { updateBio })(Profile);