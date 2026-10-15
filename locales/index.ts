import { enLocale } from "./en";
import { Locale, LocaleDictionary } from "./types";
import { viLocale } from "./vi";

export * from "./types";

export const dictionaries: Record<Locale, LocaleDictionary> = {
  vi: viLocale,
  en: enLocale,
};

export const defaultLocale: Locale = "vi";

export function getDictionary(locale: Locale): LocaleDictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}
