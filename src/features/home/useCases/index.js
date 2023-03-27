import React from "react";
import useCases1 from "../../../accsets/img/useCases1.png";
import useCases2 from "../../../accsets/img/useCases2.png";
import useCases3 from "../../../accsets/img/useCases3.png";
import useCases4 from "../../../accsets/img/useCases4.png";

import backgroundUseCases1 from "../../../accsets/img/backgroundUseCases1.png";
import backgroundUseCases from "../../../accsets/img/backgroundUseCaese.png";

import "./style.css";
import BasieTitle from "../../../conponents/title";
import { useTranslation } from "react-i18next";
const UseCases = () => {
  const { t } = useTranslation();

  const content = "USE CASES";
  return (
    <div className="useCasesContainer">
      <div className="useCasesContent">
        <BasieTitle content={content} />
        <div className="use-cases">
          <div>
            <div className="use-case-element">
              <img src={useCases1} alt="" className="img-use-cases" />
              <img
                src={backgroundUseCases1}
                alt=""
                className="use-case-background"
              />
              <img
                src={backgroundUseCases}
                alt=""
                className="use-case-background1"
              />
            </div>

            <div>
              <p className="use-case-paragraph">
                {t(
                  "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs. Ideal for small groups “VIP” style events, product launches, celebrations, team-building & more"
                )}
              </p>
            </div>
            <button className="useCasesButton">{t("LEARN MORE")}</button>
          </div>

          <div>
            <div className="use-case-element">
              <img src={useCases2} alt="" className="img-use-cases" />
              <img
                src={backgroundUseCases1}
                alt=""
                className="use-case-background"
              />
              <img
                src={backgroundUseCases}
                alt=""
                className="use-case-background1"
              />
            </div>

            <div>
              <p className="use-case-paragraph">
                {t(
                  "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs. Ideal for small groups “VIP” style events, product launches, celebrations, team-building & more"
                )}
              </p>
            </div>
            <button className="useCasesButton">{t("LEARN MORE")}</button>
          </div>

          <div>
            <div className="use-case-element">
              <img src={useCases3} alt="" className="img-use-cases" />
              <img
                src={backgroundUseCases1}
                alt=""
                className="use-case-background"
              />
              <img
                src={backgroundUseCases}
                alt=""
                className="use-case-background1"
              />
            </div>

            <div>
              <p className="use-case-paragraph">
                {t(
                  "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs. Ideal for small groups “VIP” style events, product launches, celebrations, team-building & more"
                )}
              </p>
            </div>
            <button className="useCasesButton">{t("LEARN MORE")}</button>
          </div>

          <div>
            <div className="use-case-element">
              <img src={useCases4} alt="" className="img-use-cases" />
              <img
                src={backgroundUseCases1}
                alt=""
                className="use-case-background"
              />
              <img
                src={backgroundUseCases}
                alt=""
                className="use-case-background1"
              />
            </div>

            <div>
              <p className="use-case-paragraph">
                {t(
                  "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs. Ideal for small groups “VIP” style events, product launches, celebrations, team-building & more"
                )}
              </p>
            </div>
            <button className="useCasesButton">{t("LEARN MORE")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
