import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

const Header = (props) => {

  const loggedOut = <><li className="nav-item">
    <Link className="nav-link" to="/signup">Sign Up</Link>
  </li>
    <li className="nav-item">
      <Link className="nav-link" to="/login">Login</Link>
    </li></>

  const loggedIn = <><li className="nav-item">
    <Link className="nav-link" to="/logout">Logout</Link>
  </li>
  </>

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">G</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feed">Feed</Link>
        </li>
        
        <AuthContext.Consumer>
          {
            user => {
              if (user) return loggedIn
              else return loggedOut
            }
          }
        </AuthContext.Consumer>
      </ul>
    </nav>
  )
}

export default Header;