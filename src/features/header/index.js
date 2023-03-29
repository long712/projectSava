import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import iconDown from "../../accsets/img/down.png";
import iconSearch from "../../accsets/img/search.png";
import { languages } from "../../conponents/variable/language";
import { menu } from "../../conponents/variable/menu";
import backgouyndLogo from "../../accsets/img/backgouyndLogo.png";
import "./style.css";

const Header = () => {
  const [openNavMenu, setOpenNavMenu] = React.useState(false);
  const [openMenuLanguage, setOpenMenuLanguage] = React.useState(false);
  const [language, setLanguage] = React.useState("English");
  const { t, i18n } = useTranslation();
  const url = useLocation();
  const path = url.pathname;
  let check = "";

  switch (path) {
    case "/home":
      check = "home";
      break;
    case "/about":
      check = "about";
      break;
    case "/contact":
      check = "contact";
      break;
    case "/support":
      check = "support";
      break;
    default:
      check = "home";
  }

  const openMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };

  const openMenuButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setOpenNavMenu(false);
  };

  const clickChangLanguages = (item) => {
    setLanguage(item.value);
    i18n.changeLanguage(item.key);
    setOpenMenuLanguage(false);
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="header-content">
          <div className="header-container">
            <div className="header-logo-menu">
              <div className="header-logo">
                {/* <img src={backgouyndLogo} alt="" /> */}
                <p>sava</p>
              </div>

              <div className={openNavMenu ? "header-menu-open" : "header-menu"}>
                <ul>
                  {menu.map((item, index) => (
                    <li
                      key={index}
                      className={
                        check === item
                          ? "header-nav-menu-focus"
                          : "header-nav-menu"
                      }
                    >
                      <Link to={`/${item}`} onClick={openMenuButton}>
                        {t(item)}
                      </Link>
                    </li>
                  ))}

                  <li
                    className="header-nav-menu-language"
                    onClick={() => setOpenMenuLanguage(!openMenuLanguage)}
                  >
                    {language}
                    <img src={iconDown} alt="" className="icon-down" />
                    {openMenuLanguage ? (
                      <div className="menu-languages">
                        {languages.map((item, index) => (
                          <p
                            key={index}
                            className="button-languages"
                            onClick={() => clickChangLanguages(item)}
                          >
                            {item.value}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </li>

                  <li className="button-sing-in">
                    {/* <button className="header-nav-menu-sing-in"> */}
                    {t("sign in")}
                    {/* </button> */}
                  </li>
                </ul>
              </div>
              <div className="header-icon">
                <i
                  className="fa-solid fa-bars icon-menu"
                  onClick={openMenu}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-search">
        <div className="header-search-content">
          <input placeholder={t("Search")} className="search-input" />
          <img src={iconSearch} alt="" className="header-search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
