import React from "react";
import { useTranslation } from "react-i18next";
import imgIntroduce from "../../../accsets/img/imgIntroduce.png";
import BasieImgIntroduce from "../../../conponents/img";
import "./style.css";

const Introduce = () => {
  const { t } = useTranslation();

  const contents = [
    "Web-based persistent multiuser 3D environment",
    "Custom corporate avatar design and animations",
    "Manage content anytime with our CMS system",
    "Custom designed 3D environment (design & size)",
    "3D product presentation",
  ];

  return (
    <div className="introduce-container">
      <p className="about-title">
        {t("A fully custom corporate metaverse world")}
      </p>
      <div className="about-introduce-content">
        <div className="introduce-content-left">
          <ul>
            {contents.map((item, index) => (
              <li key={index}>{t(item)}</li>
            ))}
          </ul>
        </div>
        <div className="intro-about-img">
          <BasieImgIntroduce imgIntroduce={imgIntroduce} />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
