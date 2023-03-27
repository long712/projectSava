import React from "react";
import BasieTitle from "../../../conponents/title";
import backgroundNew from "../../../accsets/img/backgroundNew.png";
import imgNew1 from "../../../accsets/img/imgNew1.png";
import imgNew2 from "../../../accsets/img/imgNew2.png";
import imgNew3 from "../../../accsets/img/imgNew3.png";
import "./style.css";
import { useTranslation } from "react-i18next";

const New = () => {
  const { t } = useTranslation();
  const content = "news";

  return (
    <div className="new-container">
      <div>
        <BasieTitle content={content} />
        
        <div className="new-content">
          <div className="new-content-element">
            <div className="nav-new-content-element">
              <div style={{ position: "relative" }}>
                <img src={imgNew1} alt="" className="new-img" />
                <img src={backgroundNew} alt="" className="new-background" />
              </div>
              <p className="new-content-date">10/03/2023</p>
              <p className="new-content-paragraph">
                {t("Virtual reality support & enhance outdoor")}
              </p>
              <button className="new-content-button">{t("LEARN MORE")}</button>
            </div>

            <div className="nav-new-content-element">
              <div style={{ position: "relative" }}>
                <img src={imgNew2} alt="" className="new-img" />
                <img src={backgroundNew} alt="" className="new-background" />
              </div>
              <p className="new-content-date">10/03/2023</p>
              <p className="new-content-paragraph">
                {t("Alternative VR device management options")}
              </p>
              <button className="new-content-button">{t("LEARN MORE")}</button>
            </div>

            <div className="nav-new-content-element">
              <div style={{ position: "relative" }}>
                <img src={imgNew3} alt="" className="new-img" />
                <img src={backgroundNew} alt="" className="new-background" />
              </div>
              <p className="new-content-date">10/03/2023</p>
              <p className="new-content-paragraph">
                {t("Increasing Innovation Among Your Remote Workers")}
              </p>
              <button className="new-content-button">{t("LEARN MORE")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
