import React from "react";
import { useTranslation } from "react-i18next";
import backgroundIntroduce from "../../../accsets/img/backgroundIntroduce.png";
import imgIntroduce from "../../../accsets/img/imgIntroContact.png";
import BasieImgIntroduce from "../../../conponents/img";
import "./style.css";
const IntroduceContact = () => {
  const { t } = useTranslation();

  return (
    <div className="introduce-contact-container">
      <div className="introduce-contact-content">
        <p className="test">
          {t(
            "From our studio in Ha Noi, we explore the intersection of creativity and technology"
          )}
        </p>
        <div className="introduce-contact-img">
          {/* <img
            src={backgroundIntroduce}
            alt=""
            className="introduce-contact-img-background"
          />
          <img
            src={imgIntroduce}
            alt=""
            className="introduce-contact-img-content"
          /> */}
          <BasieImgIntroduce imgIntroduce={imgIntroduce} />
        </div>
      </div>
    </div>
  );
};

export default IntroduceContact;
