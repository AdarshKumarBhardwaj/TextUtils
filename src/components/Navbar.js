//below code comes by typing rfc
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
    
        <Link className="navbar-brand" to="/">                          
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            {/* change a to Link and href to to */}
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.abouttext}
              </Link>
            </li>
          </ul>
          
          {/* //this is used to add different button in navbar */}
          <div className="d-flex">
            <div className="bg-primary mx-2" onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>  
            <div className="bg-danger mx-2" onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-success mx-2" onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-warning mx-2" onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={()=>{props.togglemode(null)}}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//this is used to set the types of values of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //if title is not set and default is also not set then it gives error
  abouttext: PropTypes.string,
};

//this is used to set default value if we not send values of title and about in app.js
Navbar.defaultProps = {
  title: "type title Here",
  abouttext: "type about here",
};
