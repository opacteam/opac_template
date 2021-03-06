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


let fr = {
    "home": "Page d'accueil",
    "collections": "Collections",
    "heading": "Modèle OPAC",
    "description": "Hic repellat reprehenderit et enim cumque et nihil. Ab consequuntur perferendis qui officiis corporis et saepe tempora ab natus consequatur.",
    "latestHeading": "Nos Collections",
    "latestDescription": "Depuis Le Dernier",
    "viewMore": "Voir plus",
    "aboutHeading": "À propos de nous",
    "aboutDescription": "Hic repellat reprehenderit et enim cumque et nihil. Ab consequuntur perferendis qui officiis corporis et saepe tempora ab natus consequatur.",
    "fcHeading": "Collection en vedette",
    "fcDescription": "Le Meilleur Choix",
    "ecHeading": "Explorer la collection",
    "ecDescription": "La plupart des recherches de"
}

export const frTranslation = createSlice({
    name: 'frTranslation',
    initialState: fr,
    reducers: {
        updateFrTranslation: ((state, action) => ({...action.payload }))
    }
})

export const { updateFrTranslation } = frTranslation.actions;


export const { updateEnTranslation } = enTranslation.actions;
export default frTranslation.reducer;