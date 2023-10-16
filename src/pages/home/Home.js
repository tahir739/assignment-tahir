import React from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>{t("home.heading")}</h1>
    </div>
  );
}

export default Home;
