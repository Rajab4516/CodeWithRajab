import React from "react";
export default function Navbar2(props) {
  return (
    <>
      <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-3`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <h4 className="text-light">TextForm</h4>
          </a>
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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
              <button className={`btn btn-${props.mode === 'primary'? 'dark':'light'}`} type="button" onClick={props.toggleMode}>
                {props.modeBtnText}
              </button>
          </div>
        </div>
      </nav>
    </>
  );
}
