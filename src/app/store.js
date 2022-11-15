import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/counterSlice';
import themeReducer from '../theme/themeSlice';
import templateReducer from '../constant';
import initialLoadReducer from '../constant/load';
import editorReducer from '../components/Editor/editorSlice';
import languageReducer from '../i18n/languageSlice';
import enTranslationReducer from '../i18n/enTranslation';
import frTranslationReducer from '../i18n/frTranslation';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        template: templateReducer,
        editor: editorReducer,
        language: languageReducer,
        enTranslation: enTranslationReducer,
        frTranslation: frTranslationReducer,
        initialLoad: initialLoadReducer

    },
})