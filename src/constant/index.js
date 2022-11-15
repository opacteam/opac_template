import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoad } from './load';

export const templateSlice = createSlice({
    name: 'template',
    initialState: {},
    reducers: {
        setBanner: (state, banner) => ({...state, banner: banner }),

        setHeading: (state, heading) => ({...state, heading: heading.payload }),

        setTemplate: (state, action) => { return {...action.payload } }

    }
})





export const { setBanner, setHeading, setTemplate } = templateSlice.actions;



export default templateSlice.reducer;