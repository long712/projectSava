import React from "react";
import imgIntroduce from "../../../accsets/img/introduce.png";
import backgroundIntroduce from "../../../accsets/img/backgroundIntroduce.png";
import imgBackground from "../../../accsets/img/background.png";
import "./style.css";
import BasieImgIntroduce from "../../../conponents/img";
import { useTranslation } from "react-i18next";

const Introduce = () => {
  const { t } = useTranslation();

  return (
    <div className="introduce-container">
      <div className="introduce-content">
        <div>
          <p className="introduce-content-title1">{t("VIRTUAL REALITY")}</p>
          <p className="introduce-content-title2">
            {t("Virtual Reality Meeting")}
          </p>
          <p className="introduce-content-paragraph">
            {t(
              " Elevate your organization's virtual presence with MeetinVR. Our platform provides all the tools you need to meet with your team or customers, host events, workshops, and training sessions in the metaverse."
            )}
          </p>
          <div className="itro-home-button">
            <button className="introduce-content-button-left">
              {t("get started")}
            </button>
            <button className="introduce-content-button-right">
              {t("LEARN MORE")}
            </button>
          </div>
        </div>
        <div className="itro-home-img">
          <BasieImgIntroduce
            backgroundIntroduce={backgroundIntroduce}
            imgIntroduce={imgIntroduce}
            imgBackground={imgBackground}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
