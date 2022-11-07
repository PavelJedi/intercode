import React, { useState } from "react";
import background from "../../img/background-header.png";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const styles = {
    backgroundImage: `url(${background})`,
  };

  return (
    <Fragment>
      <header className={`header ${isActive ? "active" : ""}`} style={styles}>
        <div className="header__container">
          <div className="header__logo-holder">
            <a className="logo-link" href="#">
              <img className="logo" alt="logo" src={logo} />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item ">
                <Link className="nav__link" to="/models">
                  Models
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/#">
                  {" "}
                  Find & Buy
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/#">
                  Availability
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/#">
                  Service and support
                </Link>
              </li>
            </ul>
          </nav>
          {/* <div className="header__btn-holder">
            <a className="header__btn" href="#">
              About us
            </a>
            <a className="header__btn" href="#">
              Shop
            </a>
          </div> */}
          <button className="nav-opener" onClick={toggleClass}>
            <span></span>
          </button>
        </div>
      </header>
    </Fragment>
  );
};
