import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./assets/locales/en/translation.json";
import translationIT from "./assets/locales/it/translation.json";
import translationFR from "./assets/locales/fr/translation.json";
import translationDE from "./assets/locales/de/translation.json";
import translationTR from "./assets/locales/tr/translation.json";
import translationRU from "./assets/locales/ru/translation.json";
import translationBR from "./assets/locales/br/translation.json";
import translationES from "./assets/locales/es/translation.json";
import translationKO from "./assets/locales/ko/translation.json";
import translationZH from "./assets/locales/zh/translation.json";
import translationJA from "./assets/locales/ja/translation.json";
import translationZHYUE from "./assets/locales/zhyue/translation.json";

// const fallbackLng = ["en"];
const availableLanguages = ["en", "it", "fr", "de", "tr", "ru", "br", "es", "ko", "zh", "ja", "zh-yue"];

const resources = {
  en: { translation: translationEN },
  it: { translation: translationIT },
  fr: { translation: translationFR },
  de: { translation: translationDE },
  tr: { translation: translationTR },
  ru: { translation: translationRU },
  br: { translation: translationBR },
  es: { translation: translationES },
  ko: { translation: translationKO },
  zh: { translation: translationZH },
  ja: { translation: translationJA },
  'zh-yue': { translation: translationZHYUE },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: false,
    returnEmptyString: false,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    },

    react: {
        useSuspense: false,
    }
  });

export default i18n;
