import React from "react";
import { useTranslation } from "react-i18next";
import tree from "../../../accsets/img/tree.png";
import BasieTitle from "../../../conponents/title";

import "./style.css";
const Development = () => {
  const { t } = useTranslation();

  const content = "Sava development stage";
  return (
    <div className="development-container">
      <div className="development-content">
        <BasieTitle content={content} />
        <div className="development-item">
          <div className="development-left">
            <div className="item-development">
              <p className="development-date">01/2023 - 01/2024</p>
              <ul className="development-element-li">
                <li>{t("R&D and setup team")}</li>
                <li>{t("SAVA Meeting Solution")}</li>
              </ul>
            </div>
            <div className="item-development">
              <p className="development-date">2025-2028</p>
              <ul className="development-element-li">
                <li>{t("SAVA Education")}</li>
                <li>{t("SAVA Healthcare services")}</li>
              </ul>
            </div>
          </div>

          <div className="development-tree">
            <img src={tree} alt="" className="development-tree-img" />
          </div>

          <div className="development-right">
            <div className="item-development">
              <p className="development-date">02/2024 - 02/2025</p>
              <ul className="development-element-li">
                <li>{t("SAVA Media & Entertainment")}</li>
                <li>{t("SAVA Retails & Real estate")}</li>
              </ul>
            </div>
            <div>
              <div className="item-development">
                <p className="development-date">2028-2030</p>
                <ul className="development-element-li">
                  <li>{t("SAVA Metaverse")} </li>
                  <li>{t("SAVA Social")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
