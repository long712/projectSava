import React from "react";
import imgContact from "../../../accsets/img/imgContact.png";
import backgroundContact from "../../../accsets/img/backgroundConcat.png";
import BasieTitle from "../../../conponents/title";
import "./style.css";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  const content = "Contact info";
  return (
    <div className="info-container">
      <BasieTitle content={content} />
      <div className="info-content">
        <h1 className="info-title">{t("sava Metaverse")}</h1>
        <p className="info-address">{t("Address")}</p>
        <p className="info-address-content">
          {t(
            "Century Tower Building, Times City, Minh Khai Street, Vinh Tuy Ward, Hai Ba Trung District, Hanoi"
          )}
        </p>
        <div className="info-email-phone">
          <p className="info-email">{t("Email")}:</p>
          <p className="info-email-content">{t("contact@savameta.com")}</p>
          <p className="info-phone">{t("Phone")}:</p>
          <p className="info-phone-content">{t("+84969.877.888")}</p>
        </div>

        <div className="info-map">
          <img src={backgroundContact} alt="" className="info-overlay" />
          <img src={imgContact} alt="" className="info-map-img" />
        </div>
      </div>
    </div>
  );
};

export default Info;
