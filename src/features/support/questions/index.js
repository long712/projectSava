import React from "react";
import { useTranslation } from "react-i18next";
import BasieTitle from "../../../conponents/title";
import "./style.css";

const Questions = () => {
  const { t } = useTranslation();

  const contents = [
    "Why should we meet in VR, when we can use Zoom / Team, Miro / Mural?",
    "Can we do an event using SAVA Meeting?",
    "Which headsets do you support?",
    "Can people join from a tablet or phone?",
    "Can invite guests, if so will they be licensed?",
  ];

  const content = "Frequently asked questions";
  return (
    <div className="questions-container">
      <div className="questions-content">
        <BasieTitle content={content} />
        <ul>
          {contents.map((item, index) => (
            <li key={index}>{t(item)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
