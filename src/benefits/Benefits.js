import React from "react";
import configuration from "../datas/Cars";

export const Benefits = () => {
  return (
    <div>
      <div className="benefits">
        <div className="benefits-desc">
          <h2 className="benefits-heading">CHOOSE YOUR CONFIGURATION</h2>
        </div>
        {configuration.map(({ id, name, img, desc }) => {
          return (
            <div key={id}>
              <h3>{name}</h3>
              <img src={require("../img/" + img + ".png")} alt="bmw" />
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
