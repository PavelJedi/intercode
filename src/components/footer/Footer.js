import React from "react";
import { list } from "../../datas/Cars";
import { Fragment } from "react";

export const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container footer__container">
          {list.map((car) => {
            return (
              <div key={car.id} className="footer__card">
                <h3 className="footer__title">{car.title}</h3>
                <ul className="footer__list">
                  {car.items.map(({option}) => (
                    <li className="list__item">{option}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
    </Fragment>
  );
};
