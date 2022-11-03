import React from "react";
import configuration from "../../datas/Cars";
import { Link } from "react-router-dom";

export const Benefits = () => {
  return (
    <div>
      <div className="benefits">
        <div className="benefits-desc">
          <h2 className="benefits-heading">CHOOSE YOUR CONFIGURATION</h2>
        </div>
        <div className="card-holder">
          {configuration.map(({ id, name, img, desc }) => {
            return (
              <div key={id} style={{ margin: "0 20px" }}>
                <h3 style={{ textAlign: "center" }}>{name}</h3>
                <img
                  src={require("../../img/" + img + ".png")}
                  alt="bmw"
                  style={{ marginBottom: "20px" }}
                />
                <div style={{ textAlign: "center" }}>
                  <Link
                    style={{
                      width: "80%",
                      textDecoration: "none",
                      backgroundColor: "grey",
                      color: "white",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                    to="/options"
                  >
                    Сonfigure now
                  </Link>
                </div>
                <p style={{ textAlign: "center" }}>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
