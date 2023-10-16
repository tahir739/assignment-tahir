import React from "react";
import "./Button.css"; // Import the CSS file
import { useTranslation } from "react-i18next";

function Button({ onClick, value, type, ...res }) {
  const { t } = useTranslation();
  return (
    <button className="btnCustom" type={type} onClick={onClick} {...res}>
      {t(value)}
    </button>
  );
}

export default Button;
