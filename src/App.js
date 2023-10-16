import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import OrderForm from "./pages/orderForm/OrderForm";
import "./App.css";
import { RoutePath } from "./components/shared/common";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Router>
        <div>
          <Header displayLogo={false} title={t("header.headline")} />
          <Routes>
            <Route path={RoutePath.main} element={<Home />} />
            <Route path={RoutePath.orderForm} element={<OrderForm />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
