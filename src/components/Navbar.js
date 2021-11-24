import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
      //we want that when darkMode in(App.js) is true then only navbar is bar so wrap it in jsx
      //`` is used so that we can use templateliteral
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* replace 'a' with 'Link' and href with'to' to be used in react router when we want to go from home to About or vice versa */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.abouttext}</Link>
        </li> */}

      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}

      {/*1. Using a Switch to Enable Dark Or Light Mode */}
      {/*2.below condition- if mode light then make it dark else light  */}
      {/* 3.${props.mode==='light'?'dark':'light' --> this whole is a variable */}
      
              <div className={`form-check form-switch text -${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" style={{color:props.mode==='dark'?'white':'#1d0c49'}} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
                
              <div className={`form-check form-switch text -${props.mode==='light'?'green':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleGreenMode} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" style={{color:props.mode==='green'?'white':'green'}} htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
                </div>
                
              
    </div>
  </div>
</nav>
    )
}
Navbar.propTypes ={title: PropTypes.string.isRequired,
                   abouttext:PropTypes.string}
                
// use these default values if I do not pass props
Navbar.defaultProps = {
    title:"Set title here",
    aboutText :'About Text Here'
};
