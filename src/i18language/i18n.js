import i18n from "i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import enTranslation from "./languages/en.json";
import frTranslation from "./languages/no.json";

i18n // detect user language
  // .use(LanguageDetector)
  // // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: "en", // set your preferred initial language
    resources: {
      en: { translation: enTranslation },
      no: { translation: frTranslation },
    },
  });

export default i18n;
