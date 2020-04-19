import * as Localization from "expo-localization";
import moment from "moment";
import i18n from "i18n-js";
import en from "./translations/en.json";
import es from "./translations/es.json";

i18n.locale = Localization.locale;

const chooseMomentLocale = (locale) => {
  // make the locale lower case
  // will fix crashes caused by "en-GB" (instead of "en-gb") not being found
  locale = locale.toLowerCase();
  if (moment.locales().includes(locale)) { // check if the locale is included in the array returned by `locales()` which (in this case) tells us which locales moment will support
    return locale;
  } else if (moment.locales().includes(locale.substring(0, 2))) {
    // check if the first two letters of the locale are included in the array returned by `locales()` which (in this case) tells us which locales moment will support
    // will fixes crashes caused by "en-US" not being found, as we'll tell moment to load "en" instead
    return locale.substring(0, 2);
  }
  // use "en-gb" (the default language and locale for my app) as a fallback if we can't find any other locale
  return "en";
};

const getLocale = () => {
  return chooseMomentLocale(
    i18n.locale
  );
};

moment.locale(getLocale());
console.warn("LANG", i18n.locale, getLocale());
i18n.fallbacks = true;
i18n.translations = { es, en };
i18n.defaultLocale = "en";

const momenti18n = x => {
  return moment(x).locale(getLocale());
};

export { i18n, momenti18n };
