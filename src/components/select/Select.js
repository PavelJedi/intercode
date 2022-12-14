import React from "react";
import { colors, wheels } from "../../datas/Cars";

export const Select = ({ data, handleColor, handleWheels, setDefault }) => {
  return (
    <div>
      <div className="config__options">
        <h3 className="config__title">Car color</h3>
        <div className="config__card-holder">
          {colors.map(({ id, pic, colorName, cost }) => {
            return (
              <div className="config__cards">
                <div
                  key={id}
                  className={`config__card ${
                    data.color === colorName ? "choosen" : ""
                  }`}
                  name="data"
                  onClick={(e) => {
                    handleColor(colors[id - 1]);
                  }}
                >
                  <img src={pic} alt="color" className="config__img" />
                </div>
                <span className="config__cost">$ {cost}</span>
              </div>
            );
          })}
        </div>
        <h3 className="config__title">Wheels</h3>
        <div className="config__card-wheels">
          {wheels.map(({ id, img, wheelName, cost }) => {
            return (
              <div className="config__cards">
                <div
                  key={id}
                  className={`config__card_wheel ${
                    data.wheel === wheelName ? "choosen" : ""
                  }`}
                  name="data"
                  onClick={(e) => {
                    handleWheels(wheels[id - 1]);
                  }}
                >
                  <img src={img} alt="wheel" className="config__img" />
                </div>
                <span className="config__cost">$ {cost}</span>
              </div>
            );
          })}
        </div>
        <div className="config__total-holder">
          <h3 className="config__total">Total price is {data?.totalPrice}$</h3>
          <button
            className="config__default"
            onClick={(e) => {
              setDefault();
            }}
          >
            Set default
          </button>
        </div>
      </div>
    </div>
  );
};
