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
            about: {
                heading: 'aboutHeading',
                description: 'aboutDescription',
                banner: 'https://www.teahub.io/photos/full/185-1852797_black-and-white-tree-wallpaper.png'
            },
            latest: {
                heading: "latestHeading",
                description: "latestDescription",
                items: [{
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }, {
                    thumbnail: "https://static01.nyt.com/images/2022/01/16/fashion/VIRAL-LIBRARY/VIRAL-LIBRARY-videoSixteenByNineJumbo1600.jpg",
                    title: "Books"
                }, {
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }, {
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }, {
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }, {
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }, {
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }, , {
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }, {
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }, {
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg",
                    title: "Library"
                }]
            }
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