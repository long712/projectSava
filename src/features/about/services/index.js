import React from "react";
import { useTranslation } from "react-i18next";
import imgService1 from "../../../accsets/img/imgSerice1.png";
import imgService2 from "../../../accsets/img/imgService2.png";
import imgService3 from "../../../accsets/img/imgService3.png";
import imgService4 from "../../../accsets/img/imgSevrice4.png";
import overlaySevice from "../../../accsets/img/overlaySevice.png";
import BasieTitle from "../../../conponents/title";
import "./style.css";

const Services = () => {
  const { t } = useTranslation();

  const content = "OUR SERVICES";
  return (
    <div>
      <div className="services-content">
        <BasieTitle content={content} />
        <p className="services-intro">
          {t("Experience the World Like Never Before")}
        </p>
        <div className="services-grid">
          <div className="services-item">
            <img src={overlaySevice} alt="" className="services-overlay" />
            <img
              src={imgService1}
              alt=""
              className="services-img"
              style={{ opacity: "0.7" }}
            />
            <p className="services-item-title">{t("Commercial vr")}</p>
            <p className="services-item-paragraph">
              {t(
                "The e-commerce industry has seen great transformations since its inception"
              )}
            </p>
            <button className="services-item-button">{t("LEARN MORE")}</button>
          </div>

          <div className="services-item">
            <img src={overlaySevice} alt="" className="services-overlay" />
            <img
              src={imgService2}
              alt=""
              className="services-img"
              style={{ opacity: "0.7" }}
            />
            <p className="services-item-title">{t("Games VR")}</p>
            <p className="services-item-paragraph">
              {t(
                "The e-commerce industry has seen great transformations since its inception"
              )}
            </p>
            <button className="services-item-button">{t("LEARN MORE")}</button>
          </div>

          <div className="services-item">
            <img src={overlaySevice} alt="" className="services-overlay" />
            <img
              src={imgService3}
              alt=""
              className="services-img"
              style={{ opacity: "0.7" }}
            />
            <p className="services-item-title">{t("Movies VR")}</p>
            <p className="services-item-paragraph">
              {t(
                "The e-commerce industry has seen great transformations since its inception"
              )}
            </p>
            <button className="services-item-button">{t("LEARN MORE")}</button>
          </div>

          <div className="services-item">
            <img src={overlaySevice} alt="" className="services-overlay" />
            <img
              src={imgService4}
              alt=""
              className="services-img"
              style={{ opacity: "0.7" }}
            />
            <p className="services-item-title">{t("Community VR")}</p>
            <p className="services-item-paragraph">
              {t(
                "The e-commerce industry has seen great transformations since its inception"
              )}
            </p>
            <button className="services-item-button">{t("LEARN MORE")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
