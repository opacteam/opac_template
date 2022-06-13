import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'en'
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.language = state.language === 'en' ? 'fr' : 'en'
        }
    }
})

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;