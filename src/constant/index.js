import { createSlice } from '@reduxjs/toolkit';

export const TEMPLATE = {
    baseURL: "",
    siteName: "OPAC Template",
    logo: "https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png",
    banner: 'https://wallpaperaccess.com/full/253332.jpg',
    heading: " OPAC Template",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pages: {
        home: {

        },
        summary: {},
        detail: {},
    },
    components: {
        AppBar: {
            AppBarLinks: [{
                title: "Home",
                href: "/"
            }, {
                title: "Collections",
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
        changeBanner: (state, banner) => {
            state.banner = banner;
        },
    }
})




export default templateSlice.reducer;