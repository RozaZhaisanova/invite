import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // передаем i18n в react-i18next
  .init({
    resources: {
      en: {
        translation: {
          termsOfService: "Terms of service",
        },
      },
      ru: {
        translation: {
          termsOfService: "Условия сервиса",
        },
      },
    },
    lng: "ru", // язык по умолчанию
    fallbackLng: "en", // язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
