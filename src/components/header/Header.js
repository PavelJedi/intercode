import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import background from "../../img/background-header.png";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const styles = {
    backgroundImage: `url(${background})`,
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className={`header ${isActive ? "active" : ""}`} style={styles}>
        <div className="container header__container">
          <div className="header__logo-holder">
            <a className="logo-link" href="#">
              <img className="logo" alt="logo" src={logo} />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item ">
                <Link className="nav__link" to="/models">
                  {t("header.list.li1")}
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/#">
                  {" "}
                  {t("header.list.li2")}
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/#">
                  {t("header.list.li3")}
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/#">
                  {t("header.list.li4")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__button-holder">
            <button
              className="header__button"
              onClick={() => changeLanguage("ua")}
            >
              ua
            </button>
            <button
              className="header__button"
              onClick={() => changeLanguage("en")}
            >
              en
            </button>
            <button className="nav-opener" onClick={toggleClass}>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
