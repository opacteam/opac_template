import { createSlice } from '@reduxjs/toolkit';

export const TEMPLATE = {
    baseURL: "",
    siteName: "OPAC Template",
    logo: "https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png",
    banner: 'https://ogsoftwaresolutions.com.my/wp-content/uploads/2019/08/library.jpeg',
    heading: "heading",
    description: "description",
    pages: {
        home: {

        },
        summary: {},
        detail: {},
    },
    components: {
        AppBar: {
            AppBarLinks: [{
                title: "home",
                href: "/"
            }, {
                title: "collections",
                href: "/collections"
            }]
        }
    },
    theme: {},


}


export const templateSlice = createSlice({
    name: 'template',
    initialState: TEMPLATE,
    reducers: {
        setBanner: (state, banner) => ({...state, banner: banner }),

        setHeading: (state, heading) => ({...state, heading: heading.payload }),

    }
})


export const { setBanner, setHeading } = templateSlice.actions;

export default templateSlice.reducer;