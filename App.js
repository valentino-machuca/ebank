import Main from './src/components/Main';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_en from './src/languages/en/global.json';
import global_es from './src/languages/es/global.json'

i18next.init({
  compatibilityJSON: 'v3',
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  }
})

export default function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Main/>
    </I18nextProvider>
  );
}