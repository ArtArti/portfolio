import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import i18nextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(i18nextHttpBackend) // Only if you're loading translations from a remote server
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", // Set fallback language
    returnObjects: true,
    interpolation: {
      escapeValue: false
    },
    // Add backend configuration if using i18nextHttpBackend
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json" // Example URL to fetch translations from
    }
  });

export default i18n;
