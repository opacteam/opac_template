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
                // eslint-disable-next-line no-sparse-arrays
                items: [{
                    thumbnail: "https://picsum.photos/400",
                    title: "Library"
                }, {
                    thumbnail: "https://picsum.photos/450",
                    title: "Books"
                }, {
                    thumbnail: "https://picsum.photos/500",
                    title: "Library"
                }, {
                    thumbnail: "https://picsum.photos/550",
                    title: "Library"
                }, {
                    thumbnail: "https://picsum.photos/600",
                    title: "Library"
                }, {
                    thumbnail: "https://picsum.photos/650",
                    title: "Library"
                }, {
                    thumbnail: "https://picsum.photos/700",
                    title: "Library"
                }, , {
                    thumbnail: "https://picsum.photos/750",
                    title: "Library"
                }, {
                    thumbnail: "https://picsum.photos/800",
                    title: "Library"
                }, {
                    thumbnail: "https://picsum.photos/850",
                    title: "Library"
                }]
            },
            featuredCollection: {
                heading: 'fcHeading',
                description: 'fcDescription',
                items: [{
                        tag: "Item",
                        title: "Nunc consequat interdum varius",
                        author: "John Doe",
                        thumbnail: "https://picsum.photos/510"
                    },
                    {
                        tag: "Document",
                        title: "Aliquam malesuada bibendum arcu",
                        author: "Jane Doe",
                        thumbnail: "https://picsum.photos/520"
                    },

                    {
                        tag: "File",
                        title: "Semper viverra nam libero",
                        author: "Robbert Doe",
                        thumbnail: "https://picsum.photos/530"
                    },
                    {
                        tag: "Item",
                        title: "Pellentesque nec nam aliquam",
                        author: "Jacky Doe",
                        thumbnail: "https://picsum.photos/540"
                    }
                ]
            },
            exploreCollection: {
                heading: "ecHeading",
                description: "ecDescription",
                items: [{
                        thumbnail: "https://picsum.photos/400/300",
                        title: "Library"
                    },
                    {
                        thumbnail: "https://picsum.photos/410/400",
                        title: "Library"
                    },
                    {
                        thumbnail: "https://picsum.photos/430/500",
                        title: "Library"
                    },
                    {
                        thumbnail: "https://picsum.photos/440/600",
                        title: "Library"
                    }, {
                        thumbnail: "https://picsum.photos/450/700",
                        title: "Library"
                    }, {
                        thumbnail: "https://picsum.photos/460/800",
                        title: "Library"
                    }, {
                        thumbnail: "https://picsum.photos/470/900",
                        title: "Library"
                    }, {
                        thumbnail: "https://picsum.photos/480/350",
                        title: "Library"
                    }, {
                        thumbnail: "https://picsum.photos/490/450",
                        title: "Library"
                    }


                ]
            },
            timeline: {
                heading: "tlHeading",
                description: "tlDescription"
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

        setTemplate: (state, action) => {

            return {...action.payload }
        }

    }
})


export const { setBanner, setHeading, setTemplate } = templateSlice.actions;



export default templateSlice.reducer;