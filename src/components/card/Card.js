import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../../datas/Cars";

export const Card = () => {
  return (
    <>
      <main>
        <section className="card">
          <div className="container card__container">
            {cars.map(({ id, img, model, fuel, price }) => {
              return (
                <div key={id} className="card__box">
                  <div className="card__img-holder">
                    <img className="card__img" src={img} alt="bmw" />
                  </div>
                  <div className="card__text-holder">
                    <h2 className="card__heading">{model}</h2>
                    <span className="card__prename">{fuel}</span>
                    <span className="card__price">{price}</span>
                    <Link className="card__link" to={`/models/${id}/config`}>
                      Build and price
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};
