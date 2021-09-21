import React from 'react';
import Logo from './Logo'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../Redux/actioncreators/useractions'
import { useHistory } from 'react-router-dom'

const Header = (props) => {

    let history = useHistory();

    const handleLogout = () => {
        props.removeCurrentUser();
        history.push("/")
    }

    return (
          <header>
                <div className="fl">
                <button type="button">
                    <img 
                    src="/images/misc/user.png" 
                    alt="User Settings" 
                    />
                </button>
                </div>

                <div className="fl">
                <Logo />
                </div>

                <div className="fl">
                <button type="button">
                    <img src="/images/misc/messages.png" 
                    alt="View Messages" 
                    />
                </button>
                </div>
                { localStorage.token ? 
                    <div className="fl">
                        <button 
                        onClick={handleLogout}>
                            Logout
                        </button>
                    </div> :
                     null
                }
        </header>
        
    )

};

export default connect(null, { removeCurrentUser })(Header);