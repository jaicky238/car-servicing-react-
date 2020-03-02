import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
        <Link className="navbar-brand" to="/">
            <img src={require('../../Assets/images/logo.jpg')}  alt="logo" width="80"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
            <button className="btn btn-outline-success my-2 my-sm-0 mr-2" type="Button">Sign Up</button>
            <button className="btn btn-outline-success my-2 my-sm-0" type="Button">Login</button>
          </div>
        </div>
      </nav>
    )
}

export default Header
