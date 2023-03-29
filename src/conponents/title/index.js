import React from "react";
import { useTranslation } from "react-i18next";
import BasieBox from "../box";
import "./style.css";

const BasieTitle = ({ content }) => {
  const { t } = useTranslation();

  return (
    <div className="basie-title-container">
      <div className="basie-title-content">
        <BasieBox />
        <h1>{t(content)}</h1>
      </div>
    </div>
  );
};

export default BasieTitle;
