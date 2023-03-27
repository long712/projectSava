import React from "react";
import backgroundGoals from "../../../accsets/img/backgroundGoals.png";
import imgGoals from "../../../accsets/img/imgGoals.png";
import backgroundGoals1 from "../../../accsets/img/backgroundGoals1.png";
import "./style.css";
import BasieTitle from "../../../conponents/title";
import { useTranslation } from "react-i18next";

const Goals = () => {
  const { t } = useTranslation();

  const content = "GOALS";
  return (
    <div className="goals-container">
      <div className="goals-content">
        <BasieTitle content={content} />
        <div className="goals-content-and-paragraph">
          <div className="goals-content-img">
            <img
              src={backgroundGoals1}
              alt=""
              className="goals-background-element"
            />
            <img src={imgGoals} alt="" className="goals-content-element" />
            <img
              src={backgroundGoals}
              alt=""
              className="goals-content-element"
            />
          </div>
          <div className="goals-bottom">
            <ul>
              <li className="goals-paragraph">
                {t(
                  "Platform for renting meeting rooms, virtual offices with integrated shop/advertising/ other virtualization services"
                )}
              </li>
              <li className="goals-paragraph">
                {t(
                  "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs."
                )}
              </li>
            </ul>
            <div className="goals-button">
              <button className="goals-button1">{t("get started")}</button>
              <button className="goals-button2">{t("LEARN MORE")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
