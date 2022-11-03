import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { cars } from "../../datas/Cars";
import { Select } from "../select/Select";

export const Configurator = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getCar = (id) => {
    const auto = cars.find((item) => {
      return item.id === parseInt(id);
    });
    setData(auto);
  };

  useEffect(() => {
    getCar(id);
  }, []);

  return (
    <div>
      <header className="config">{data.model}</header>
      <main>
        <div className="config__container">
          <div className="config__first">
            <div className="config__photo-holder">
              <img src={data.img} alt="photos" />
            </div>
            <div className="config__info">
              <ul className="config__list">
                <li className="config__item">Model: {data.model}</li>
                <li className="config__item">Fuel type: {data.fuel}</li>
                <li className="config__item">Price: {data.price}</li>
              </ul>
              <span className="config__price">Total price is </span>
            </div>
          </div>
          <div className="config__second">
            <Select />
          </div>
        </div>
      </main>
    </div>
  );
};
