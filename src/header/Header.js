import React from "react";
import background from "../img/background-header.png";
import logo from "../img/logo.svg";

export const Header = () => {
  return (
    <div>
      <header
        className="header"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="header-container">
          <div className="logo-holder">
            <a className="logo-link" href="#">
              <img className="logo" alt="logo" src={logo} />
            </a>
          </div>
          <nav className="navigation">
            <ul className="nav-list">
              <a className="nav-link" href="#">
                <li className="nav-item">Models</li>
              </a>
              <a className="nav-link" href="#">
                <li className="nav-item">Find & Buy</li>
              </a>
              <a className="nav-link" href="#">
                <li className="nav-item">Availability</li>
              </a>
              <a className="nav-link" href="#">
                <li className="nav-item">Service and support</li>
              </a>
            </ul>
          </nav>
          <div className="btn-holder">
            <a className="btn">About us</a>
            <a className="btn1">Shop</a>
          </div>
        </div>
      </header>
    </div>
  );
};
