import React from "react";
import hero from "../img/hero.png";
import about from "../img/about.png";

export const Hero = () => {
  return (
    <div>
      <main className="main" style={{ backgroundImage: `url(${hero})` }}>
        <div className="container">
          <div className="text-holder">
            <h1 className="heading">ABOUT US</h1>
          </div>
          <div className="holder">
            <div className="desc-holder">
              <p className="description">
                The BMW Group sets trends in production technology and
                sustainability as an innovation leader with an intelligent
                material mix, a technological shift towards digitalisation and
                resource-efficient production. At the same time, flexibility and
                continuous optimisation of value chains ensure competitiveness.
              </p>
            </div>
            <div className="hero-img-holder">
              <img
                className="hero-img"
                src={about}
                style={{ borderRadius: "10px" }}
                alt="about-us"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
