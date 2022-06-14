import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';



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



export default frTranslation.reducer;