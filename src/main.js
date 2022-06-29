import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import { createI18n } from "vue-i18n";
const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
};

const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD', notation: 'standard', currencyDisplay: 'symbol'
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 5
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  },
  'ja-JP': {
    currency: {
      style: 'currency', currency: 'JPY', useGrouping: true, currencyDisplay: 'symbol'
    },
    decimal: {
      style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  },
  'fr': {
    currency: {
      style: "currency",
      currency: "EUR",
      currencyDisplay: "symbol"
    }
  },
  'en-CA': {
    currency: {
      style: 'currency', currency: 'CAD', notation: 'standard', currencyDisplay: 'symbol'
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 5
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  },
}
const i18n = createI18n({
  // something vue-i18n options here ...
  // locale: "en", // active this to only show EN stuff.
  messages,
  numberFormats,
});

// app.use(i18n);
// app.mount("#app");
createApp(App)
  .use(router)
  .use(i18n)
  .mount("#app");
