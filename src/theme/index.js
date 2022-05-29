import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#0052cc",
        },
        secondary: {
            main: "#a91ca9",
        },
    },
    typography: {
        fontSize: 16,
        h3: {
            fontWeight: 700,
            fontSize: "2.2rem",
        },
        h4: {
            fontWeight: 700,
            fontSize: "1.75rem",
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
    },
});


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#0052cc",
        },
        secondary: {
            main: "#a91ca9",
        },
    },
    typography: {
        fontSize: 16,
        h3: {
            fontWeight: 700,
            fontSize: "2.2rem",
        },
        h4: {
            fontWeight: 700,
            fontSize: "1.75rem",
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
    },
});