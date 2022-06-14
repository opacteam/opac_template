import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';


let en = {
    "home": "Home",
    "collections": "Collections",
    "heading": "OPAC Template",
    "description": "Lorem ipsum dolor sit amet. Et sapiente omnis et dicta vero qui cumque aperiam sed quia harum sit atque dolore. Iusto quam aut iste Quis id ullam rerum ad molestias sunt et quaerat iure.",
    "latestHeading": "Our Collections",
    "latestDescription": "From The Latest",
    "viewMore": "View More",
    "aboutHeading": "About Us",
    "aboutDescription": "Lorem ipsum dolor sit amet. Et sapiente omnis et dicta vero qui cumque aperiam sed quia harum sit atque dolore. Iusto quam aut iste Quis id ullam rerum ad molestias sunt et quaerat iure.",
    "fcHeading": "Featured Collection",
    "fcDescription": "Top Picks From Us",
    "ecHeading": "Explore Collection",
    "ecDescription": "Most searches for"
}

export const enTranslation = createSlice({
    name: 'enTranslation',
    initialState: en,
    reducers: {
        updateEnTranslation: ((state, action) => ({...action.payload }))
    }
})




export const { updateEnTranslation } = enTranslation.actions;
export default enTranslation.reducer;