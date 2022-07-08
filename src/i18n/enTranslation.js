import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

let aboutItems = {
    'about0-heading': "Archives Collection",
    'about0-description': "The Surrey Archives is home to the documentary history of the City of Surrey. Its holdings include, but are not limited to, photographs, manuscripts, maps, architectural plans, audio-visual materials and an extensive reference collection. Located in one of the City's premier heritage buildings, the 1912 Municipal Hall in Cloverdale, the Archives preserves and provides access to records of Surrey's residents, community groups, businesses, and government",
    'about0-title': "Surrey Archives",
    'about0-street': "",
    'about0-city': "",
    'about0-phone': "",
    'about0-site': "",
    'about0-email': "",

    'about1-heading': "Artifact Collections",
    'about1-description': "Located in Cloverdale, the Surrey Museum provides exhibi tions, programs and events related to the pre-history, history and development of Surrey, which depict the people, places and events that have shaped it. The Museum also hosts travelling exhibitions related to community interests, historical collections and broad heritage or contemporary themes and topics.",
    'about1-title': "Surrey Museum",
    'about1-street': "",
    'about1-city': "",
    'about1-phone': "",
    'about1-site': "",
    'about1-email': "",

    'about2-heading': "Artifact Collections",
    'about2-description': "The Historic Stewart Farm is a designated heritage site, including eight historic buildings, located in Elgin Heritage Park in South Surrey. The original 1894 Farmhouse and various farm buildings interpret life in Surrey between 1890 and 1920 and provide exhibitions and programs to depict the life and technology of that period.",
    'about2-title': "Historic Stewart Farm",
    'about2-street': "",
    'about2-city': "",
    'about2-phone': "",
    'about2-site': "",
    'about2-email': "",
}
let en = {
    "home": "Home",
    "collections": "Collections",
    "poweredby": "Software powered by",
    "headerHome": "Home",
    "headerAbout": "About",
    "headerArchives": "Archives",
    "headerArtifacts": "Artifacts",
    "headerContact": "Ordering & Contact",
    "heading": "Surrey Archives & Museums Online Access",
    "explore": "Explore",
    "description": "Browse all of the City's Heritage Collections with a union search, or search the Archives or Artifact Collections separately. Don't miss the featured items from both the Archives and Artifact collection below.",
    "latestHeading": "Surrey Archives",
    "latestDescription": "The Archives contains photos, maps, textual records, oral histories, community records, and city records.",
    "viewMore": "View More",
    "aboutHeading": "About Us",
    "aboutDescription": "The Heritage Services Division of the Parks, Recreation & Culture Department operates the facilities and services located at the Surrey Museum, Historic Stewart Farm and the City of Surrey Archives. In addition, Heritage Services facilitates the city-wide distribution and delivery of heritage interpretive activities. We hope to see you at our facilities soon!",
    "fcHeading": "Surrey Artifact Collections",
    "fcDescription": "The Artifact Collection feature archaeology, ethnology, and human history materials that reflect the history of Surrey.",
    "ecHeading": "Featured Collection",
    "ecDescription": "Featured Items from the Archives and Artifact Collections",
    "about": {...aboutItems },

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