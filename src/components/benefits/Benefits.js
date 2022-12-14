import React from "react";
import configuration from "../../datas/Cars";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Benefits = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="benefits">
        <div className="container benefits__container">
          <div className="benefits__desc">
            <h2 className="benefits__heading">{t("benefits.script")}</h2>
          </div>
          <div className="benefits__card-holder">
            {configuration.map(({ id, name, img, desc }) => {
              return (
                <div key={id} className="benefits__card">
                  <h3 className="benefits__heading">{name}</h3>
                  <div className="benefits__image-holder">
                    <img
                      src={require("../../img/" + img + ".png")}
                      alt="bmw"
                      className="benefits__img"
                    />
                  </div>
                  <div className="benefits__button-holder">
                    <Link
                      className="benefits__button"
                      to={`/models/${id}/config`}
                    >
                      {t("benefits.btns")}
                    </Link>
                  </div>
                  <ul className="benefits__list">
                    <li className="benefits__item">
                      {t("models.fules")}
                      {" "}
                      {t(`models.model${id}.fuel`)}
                    </li>
                    <li className="benefits__item">Year: {desc.year}</li>
                    <li className="benefits__item">Transmission: {desc.eng}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
