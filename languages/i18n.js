import i18next from 'i18next';
import english from './english.json';
import arabic from './arabic.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: english,
    ar: arabic,
  },
  react: {
    useSuspense: false,
  },
});
export default i18next;
