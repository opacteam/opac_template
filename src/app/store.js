import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/counterSlice';
import themeReducer from '../theme/themeSlice';
import templateReducer from '../constant';
import editorReducer from '../components/Editor/editorSlice';
import languageReducer from '../i18n/languageSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        template: templateReducer,
        editor: editorReducer,
        language: languageReducer,

    },
})