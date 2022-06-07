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
            exploreCollection: [{
                img: 'https://titanapi.minisisinc.com/api/links/515fdd13553d4f37a82b97836f989ae4/uuid/b88e5d0e89b544d09bdf55c345219021/thumbnail',
                title: "sample"
            }, {
                img: 'https://titanapi.minisisinc.com/api/links/515fdd13553d4f37a82b97836f989ae4/uuid/6aaef03ee8d34fa9b546094834d4a400/thumbnail',
                title: "sample"
            },
            {
                img: 'https://titanapi.minisisinc.com/api/links/515fdd13553d4f37a82b97836f989ae4/uuid/4448d8f6e63640c5a2226a96e06b62a2/thumbnail',
                title: "sample"
            }, {
                img: 'https://titanapi.minisisinc.com/api/links/515fdd13553d4f37a82b97836f989ae4/uuid/087f992a063a4c32a7a61dd84b46d8a6/thumbnail',
                title: "sample"
            }, {
                img: 'https://titanapi.minisisinc.com/api/links/515fdd13553d4f37a82b97836f989ae4/uuid/6aaef03ee8d34fa9b546094834d4a400/thumbnail',
                title: "sample"
            }, {
                img: 'https://titanapi.minisisinc.com/api/links/515fdd13553d4f37a82b97836f989ae4/uuid/6aaef03ee8d34fa9b546094834d4a400/thumbnail',
                title: "sample"
            }, {
                img: 'https://titanapi.minisisinc.com/api/links/515fdd13553d4f37a82b97836f989ae4/uuid/6aaef03ee8d34fa9b546094834d4a400/thumbnail',
                title: "sample"
            }, {
                img: 'https://titanapi.minisisinc.com/api/links/515fdd13553d4f37a82b97836f989ae4/uuid/6aaef03ee8d34fa9b546094834d4a400/thumbnail',
                title: "sample"
            },


            ]
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
        setBanner: (state, banner) => ({ ...state, banner: banner }),

        setHeading: (state, heading) => ({ ...state, heading: heading.payload }),

    }
})


export const { setBanner, setHeading } = templateSlice.actions;

export default templateSlice.reducer;