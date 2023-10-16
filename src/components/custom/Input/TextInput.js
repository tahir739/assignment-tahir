import React from "react";
import "./TextInput.css"; // Import the CSS file
import { useTranslation } from "react-i18next";

function TextInput({ label, type, id, value, onChange, error, ...res }) {
  const { t } = useTranslation();
  return (
    <div className="input-container">
      <label htmlFor={id}>{t(label)}</label>
      <input type={type} id={id} value={value} onChange={onChange} {...res} />
      {error && <div className="error">{t(error)}</div>}
    </div>
  );
}

export default TextInput;
