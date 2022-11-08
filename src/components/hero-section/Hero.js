import React from "react";
import about from "../../img/about.png";
import { Fragment } from "react";

export const Hero = () => {
  return (
    <Fragment>
      <main className="main">
        <section className="hero">
          <div className="container hero__container">
            <div className="hero__text-holder">
              <h1 className="hero__heading">ABOUT US</h1>
            </div>
            <div className="hero__holder">
              <div className="hero__desc-holder">
                <p className="desc-holder__description">
                  The BMW Group sets trends in production technology and
                  sustainability as an innovation leader with an intelligent
                  material mix, a technological shift towards digitalisation and
                  resource-efficient production. At the same time, flexibility
                  and continuous optimisation of value chains ensure
                  competitiveness.
                </p>
              </div>
              <div className="hero__img-holder">
                <img
                  className="img-holder_img"
                  src={about}
                  style={{ borderRadius: "10px" }}
                  alt="about-us"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
