import React from "react";
import "./Footer.css"; // Import the CSS file
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="Footer">
      <p>&copy; {t("header.headline")}</p>
      <nav>
        <span>{t("footer.privacyPolicy")} </span>
        <span>{t("footer.terms")}</span>
        <span>{t("footer.contact")}</span>
      </nav>
    </footer>
  );
}

export default Footer;
