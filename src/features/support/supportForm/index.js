import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

const SupportForm = () => {
  const { t } = useTranslation();

  return (
    <div className="support-form-container">
      <div className="support-form-content">
        <div className="support-form-content-top">
          <input placeholder={t("Name")} />
          <input placeholder={t("Email")} />
          <input placeholder={t("Phone number")} />
        </div>
        <input
          placeholder="Topic"
          style={{ width: "100%", marginTop: "23px" }}
        />
        <input placeholder={t("Content")} style={style.input} />
        <button className="support-button">{t("SUBSCRIBE")}</button>
      </div>
    </div>
  );
};

export default SupportForm;

const style = {
  input: {
    width: "100%",
    paddingTop: "11px",
    paddingBottom: "101px",
    marginTop: "23px",
    marginBottom: "37px",
  },
};
