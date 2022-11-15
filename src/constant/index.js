import { createSlice } from '@reduxjs/toolkit';


import { TEMPLATE } from '../config/opac_setting'



export const templateSlice = createSlice({
    name: 'template',
    initialState: TEMPLATE,
    reducers: {
        setBanner: (state, banner) => ({...state, banner: banner }),

        setHeading: (state, heading) => ({...state, heading: heading.payload }),

        setTemplate: (state, action) => { return {...action.payload } }

    }
})




export const { setBanner, setHeading, setTemplate } = templateSlice.actions;



export default templateSlice.reducer;