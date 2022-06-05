import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/counterSlice';
import themeReducer from '../theme/themeSlice';
import templateReducer from '../constant';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        template: templateReducer
    },
})