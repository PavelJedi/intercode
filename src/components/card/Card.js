import React from "react";
import { Link, useParams } from "react-router-dom";
import { Fragment } from "react";
import { cars } from "../../datas/Cars";

export const Card = () => {
    const params = useParams();
  return (
    <Fragment>
      <div className="card-container">
        {cars.map(({ id, img, model, fuel, price }) => {
          return (
            <div key={id} className="card">
              <div className="card-img-holder">
                <img
                  className="card-img"
                  src={require("../../img/" + img + ".jpeg")}
                  alt="bmw"
                />
              </div>
              <div className="card-text-holder">
                <h2 className="card-heading">{model}</h2>
                <span className="card-prename">{fuel}</span>
                <span className="card-price">{price}</span>
                <Link className="card-link" to={params.id}>
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

//             <Link className="card-link" to="/options">
//               Build and price
//             </Link>
