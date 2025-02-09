export const TARGET_DATE = "2025-08-25T15:14:00.000Z";

export const DAY_SUFFIXES = {
  one: "օր",
  few: "дня",
  many: "օրեր",
} as Record<Intl.LDMLPluralRule, string>;

export const HOUR_SUFFIXES = {
  one: "ժամ",
  few: "часа",
  // many: "часов",
  many: "ժամ",
} as Record<Intl.LDMLPluralRule, string>;

export const MINUTE_SUFFIXES = {
  one: "րոպե",
  few: "минуты",
  many: "րոպե",
} as Record<Intl.LDMLPluralRule, string>;

export const SECONDS_SUFFIXES = {
  one: "секунда",
  few: "секунды",
  many: "секунд",
} as Record<Intl.LDMLPluralRule, string>;
