import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',

    resources: {
        en: {
            translations: require('./locales/en/translations.json')
        },
        fr: {
            translations: require('./locales/fr/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

function LanguageConfig() {
    const language = useSelector(state => state.language)
    return language;
}
i18n.languages = ['en', 'es'];

export default i18n;