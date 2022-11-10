import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cars } from "../../datas/Cars";
import { carColors } from "../../datas/Cars";
import { Select } from "../select/Select";

export const Configurator = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [defaultData, setDefaultData] = useState({});
  const [cost, setCost] = useState({ colorPrice: 0, wheelPrice: 0 });

  const getCar = (id) => {
    const auto = cars.find((item) => {
      return item.id === parseInt(id);
    });
    setDefaultData({ ...auto, totalPrice: auto.price });
    setData({ ...auto, totalPrice: auto.price });
  };

  const findColor = carColors.find((item) => {
    return item.model === data.model;
  });

  useEffect(() => {
    getCar(id);
  }, [id]);

  function handleColor(colorItem) {
    setData({
      ...data,
      color: colorItem.colorName,
      img:
        findColor.model === data.model
          ? findColor.image[`${colorItem.colorName}`]
          : data.image,
      totalPrice:
        defaultData.color === colorItem.colorName
          ? defaultData.price
          : defaultData.price + colorItem.cost,
    });
    setCost({
      ...cost,
      colorPrice:
        defaultData.color === colorItem.colorName ? 0 : colorItem.cost,
    });
  }

  function handleWheels(wheelItem) {
    console.log(wheelItem);
    setData({
      ...data,
      wheel: wheelItem.wheelName,
      totalPrice:
        defaultData.color === wheelItem.wheelName
          ? defaultData.price
          : defaultData.price + wheelItem.cost,
    });
    setCost({
      ...cost,
      wheelPrice:
        defaultData.color === wheelItem.wheelName ? 0 : wheelItem.cost,
    });
  }

  const sumCost = Object.values(cost).reduce(
    (colorPrice, wheelPrice) => colorPrice + wheelPrice
  );
  const finalPrice = sumCost + defaultData.totalPrice;

  function setDefaultHandler() {
    setData(defaultData);
  }

  return (
    <div>
      <main>
        <section className="config">
          <header className="config__header">{data?.model}</header>
          <div className="config__container">
            <div className="config__first">
              <div className="config__photo-holder">
                <img src={data?.img} alt="photos" />
              </div>
              <div className="config__info">
                <ul className="config__list">
                  <li className="config__item">Model: {data?.model}</li>
                  <li className="config__item">Fuel type: {data?.fuel}</li>
                  <li className="config__item">Max Speed: {data?.maxSpeed}</li>
                  <li className="config__item">Color: {data?.color}</li>
                  <li className="config__item">Wheels: {data?.wheel}</li>
                </ul>
              </div>
            </div>
            <div className="config__second">
              <Select
                data={data}
                handleColor={handleColor}
                handleWheels={handleWheels}
                setDefault={setDefaultHandler}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
