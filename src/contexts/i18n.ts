import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // передаем i18n в react-i18next
  .init({
    resources: {
      en: {
        translation: {
          termsOfService: "Terms of service",
          favourites: "Favourites",
          cart: "Cart",
          contacts: "Contacts",
          total: "TOTAL",
          emptyCart: "Cart is empty",
          backToCatalog: "Back to Catalog",
          buy: "Buy",
        },
      },
      ru: {
        translation: {
          termsOfService: "Условия сервиса",
          favourites: "Избранное",
          cart: "Корзина",
          contacts: "Контакты",
          total: "ИТОГО",
          emptyCart: "Корзина пуста",
          backToCatalog: "Вернуться в каталог",
          buy: "Купить",
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
