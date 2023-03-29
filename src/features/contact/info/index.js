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
          <iframe
          className="info-gg-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1615630745637!2d105.85227182962227!3d20.986159849909818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac15b663f2d3%3A0xa3fa073f18c5b5a9!2zODkgxJDhu4FuIEzhu6sgMywgSG_DoG5nIFbEg24gVGjhu6UsIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1679998095870!5m2!1svi!2s"          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Info;

