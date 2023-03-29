import React from "react";
import imgFooter from "../../accsets/img/imgFooter.png";
import backgroundFooter from "../../accsets/img/backgroundFooter.png";
import "./style.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={imgFooter} alt="" className="img-footer" />
        <img src={backgroundFooter} alt="" className="background-footer1" />
        <img src={backgroundFooter} alt="" className="background-footer" />
        <div className="footer-item">
          <div className="footer-submit-form">
            <div className="footer-text-top">
              <p>{t("Enter phone number/email")}</p>
            </div>
            <div className="footer-submit-form-top">
              <div>
                <input placeholder={t("Enter phone number/email")} />
              </div>
              <div>
                <button>{t("SUBSCRIBE")}</button>
              </div>
            </div>
            <p className="footer-submit-form-bottom">
              {t("Subscribe to our newsletter for latest updates")}
            </p>
          </div>
          <div className="footer-address">
            <p className="footer-address-title">
              {t("SAVA Metaverse Meeting")}
            </p>
            <div className="footer-address-nav">
              <div className="content-footer">
                <p className="footer-address-nav-title">{t("Address")}</p>
                <p className="footer-address-nav-content">
                  {t(
                    "Century Tower Building, Times City, Minh Khai Street, Vinh Tuy Ward, Hai Ba Trung District, Hanoi"
                  )}
                </p>
              </div>
              <div className="content-footer">
                <p className="footer-address-nav-title">{t("Email")}</p>
                <p className="footer-address-nav-content">
                  {t("contact@savameta.com")}
                </p>
              </div>
              <div className="content-footer">
                <p className="footer-address-nav-title">{t("Phone")}</p>
                <p className="footer-address-nav-content">
                  {t("+84969877888")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
