import React from "react";
import logoImage from './images/navbar-logo.png';

function Navbar(props) {
  return (
    <>
      <div className="navbar-main-container">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <img id="navbar-logo" src={logoImage} alt="" />
          </div>
          <div className="navbar-links-container">
            <ul>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Home</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">About</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">How To Reach Me</a></li>
              <li><a href="http://" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            </ul>
          </div>
          <div className="navbar-resume-button-container">
            <button className="btn btn-sm btn-light bg-danger">Resume</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
