import React, { useState, useEffect } from "react";
import "./Header.css";
import Button from "./../custom/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "./../shared/common";
import i18n from "./../../i18language/i18n";
import { useTranslation } from "react-i18next";

function Header({ displayLogo, title }) {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const currentLanguage = i18n.language;
    setLanguage(currentLanguage);
  }, []);
  // const currentLanguage = i18n.language; // Get the current language

  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleOrderBtn() {
    navigate(RoutePath.orderForm);
  }
  function handleLogoChange() {
    navigate(RoutePath.main);
  }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };
  return (
    <header>
      <div
        onClick={handleLogoChange}
        className={`logo ${displayLogo ? "center" : ""}`}
      >
        {displayLogo ? (
          <>
            <img src="/path-to-your-logo.png" alt="Company Logo" />
          </>
        ) : (
          <div className="title">{t(title)}</div>
        )}
        <div className={`headline `}>{t("header.subtitle")}</div>
      </div>
      <nav>
        <ul>
          <Button onClick={handleOrderBtn} value="header.orderNow"></Button>
          {language === "no" ? (
            <Button
              onClick={() => changeLanguage("en")}
              value="language.en"
            ></Button>
          ) : (
            <Button
              onClick={() => changeLanguage("no")}
              value="language.no"
            ></Button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
