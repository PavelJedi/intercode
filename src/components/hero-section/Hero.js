import React from "react";
import about from "../../img/about.png";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="main">
        <section className="hero">
          <div className="container hero__container">
            <div className="hero__text-holder">
              <h1 className="hero__heading">{t("hero.desc.title")}</h1>
            </div>
            <div className="hero__holder">
              <div className="hero__desc-holder">
                <p className="desc-holder__description">
                  {t("hero.desc.text")}
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
    </>
  );
};
