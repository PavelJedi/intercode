import React from "react";
import background from "../../img/background-header.png";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export const Header = () => {
  return (
    <Fragment>
      <div>
        <header
          className="header"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="header-container">
            <div className="logo-holder">
              <a className="logo-link" href="#">
                <img className="logo" alt="logo" src={logo} />
              </a>
            </div>
            <nav className="navigation">
              <ul className="nav-list">
                <Link className="nav-link" to="/models">
                  <li className="nav-item">Models</li>
                </Link>
                <Link className="nav-link" to="/#">
                  <li className="nav-item">Find & Buy</li>
                </Link>
                <Link className="nav-link" to="/#">
                  <li className="nav-item">Availability</li>
                </Link>
                <Link className="nav-link" to="/#">
                  <li className="nav-item">Service and support</li>
                </Link>
              </ul>
            </nav>
            <div className="btn-holder">
              <a className="btn" href="#">
                About us
              </a>
              <a className="btn1" href="#">
                Shop
              </a>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};
