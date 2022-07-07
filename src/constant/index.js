import { createSlice } from '@reduxjs/toolkit';


const ABOUT_ITEMS = [{
        thumbnail: 'http://surrey.minisisinc.com/surrey/images/aboutpage/Archives_Spring%201_crop.jpg',
        heading: 'about0-heading',
        description: 'about0-description',
        title: 'about0-title',
        street: 'about0-street',
        city: 'about0-city',
        phone: 'about0-phone',
        site: 'about0-site',
        email: 'about0-email',

    },
    {
        thumbnail: 'http://surrey.minisisinc.com/surrey/images/aboutpage/Museum_summer%203.jpg',
        heading: 'about1-heading',
        description: 'about1-description',
        title: 'about1-title',
        street: 'about1-street',
        city: 'about1-city',
        phone: 'about1-phone',
        site: 'about1-site',
        email: 'about1-email',

    },
    {
        thumbnail: 'http://surrey.minisisinc.com/surrey/images/aboutpage/Summer_Farmhouse%20M.jpg',
        heading: 'about2-heading',
        description: 'about2-description',
        title: 'about2-title',
        street: 'about2-street',
        city: 'about2-city',
        phone: 'about2-phone',
        site: 'about2-site',
        email: 'about2-email',
    }
]
export const TEMPLATE = {
    baseURL: "",
    siteName: "OPAC Template",
    logo: "http://surrey.minisisinc.com/surrey/images/SAMOA-Banner.png",
    banner: 'https://images8.alphacoders.com/502/502079.jpg',
    heading: "heading",
    description: "description",
    pages: {
        home: {
            about: {
                heading: 'aboutHeading',
                description: 'aboutDescription',
                banner: 'https://www.teahub.io/photos/full/185-1852797_black-and-white-tree-wallpaper.png',
                items: ABOUT_ITEMS
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
                title: "headerHome",
                href: "/"
            }, {
                title: "headerAbout",
                href: "/",
            }, {
                title: "headerArchives",
                href: "/",
            }, {
                title: "headerArtifacts",
                href: "/",
            }, {
                title: "headerContact",
                href: "/",
            }]
        },
        Footer: {
            FooterLinks: [{
                title: "headerHome",
                href: "/"
            }, {
                title: "headerAbout",
                href: "/",
            }, {
                title: "headerArchives",
                href: "/",
            }, {
                title: "headerArtifacts",
                href: "/",
            }, {
                title: "headerContact",
                href: "/",
            }]
        }
    },
    theme: {},


}
console.log(TEMPLATE)


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