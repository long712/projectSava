import React from "react";
import { useTranslation } from "react-i18next";
import imgIntroduce from "../../../accsets/img/imgSupport.png";
import BasieImgIntroduce from "../../../conponents/img";
import BasieTitle from "../../../conponents/title";
import "./style.css";

const Introduce = () => {
  const { t } = useTranslation();

  const content = "We're here to help";
  return (
    <div className="introduce-support-container">
      <div className="introduce-support-content">
        <BasieTitle content={content} />
        <div className="support-content">
          <div className="introduce-support-left">
            <p style={{ paddingTop: "26px", paddingBottom: "23px" }}>
              {t(
                "Contact one of our experts to have a chat about how Virtual, Augmented and Mixed Reality can help you achieve your goals"
              )}
            </p>
            <p>
              {t(
                "Contact one of our experts to have a chat about how Virtual, Augmented and Mixed Reality can help you achieve your goals"
              )}
            </p>
          </div>
          <div className="support-intro-img">
            <BasieImgIntroduce imgIntroduce={imgIntroduce} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
