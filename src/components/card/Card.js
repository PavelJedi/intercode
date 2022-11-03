import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { cars } from "../../datas/Cars";

export const Card = () => {
  return (
    <Fragment>
      <div className="card-container">
        {cars.map(({ id, img, model, fuel, price }) => {
          return (
            <div key={id} className="card">
              <div className="card-img-holder">
                <img className="card-img" src={img} alt="bmw" />
              </div>
              <div className="card-text-holder">
                <h2 className="card-heading">{model}</h2>
                <span className="card-prename">{fuel}</span>
                <span className="card-price">{price}</span>
                <Link className="card-link" to={`/models/${id}/config`}>
                  Build and price
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
