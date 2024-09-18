import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // передаем i18n в react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          // другие ключи перевода
        },
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать",
          // другие ключи перевода
        },
      },
    },
    lng: "en", // язык по умолчанию
    fallbackLng: "en", // язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false, // React уже защищает от XSS
    },
  });

export default i18n;
