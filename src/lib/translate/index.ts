import { format, init, getLocaleFromNavigator } from 'svelte-i18n';

const initialLocale = getLocaleFromNavigator();

void init({
  fallbackLocale: 'en-US',
  initialLocale,
});

export const translate = format;
