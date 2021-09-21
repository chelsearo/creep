import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import '../stylesheets/Home.scss';

const  Home  = () =>  {

    const [view,setView] = useState("login")
    
    const whichForm = (e) => {
    if(e.target.innerText.toLowerCase() !== view) {
      setView(e.target.innerText.toLowerCase())
    }
  }

  const renderView = () => {
    if(view === "login") {
      return <Login />
    } else {
      return <Signup />
    }
  }

    return (
      <div className="home">
        <div className="credentials">
          <div className="toggle">
            <button
              onClick={whichForm}
              className={view === 'login' ? 'active' : ''}
            >
              Login
            </button>
            <button
              onClick={whichForm}
              className={view === 'signup' ? 'active' : ''}
            >
              Signup
            </button>
          </div>
          {renderView()}
        </div>
      </div>
    );
}

export default Home;