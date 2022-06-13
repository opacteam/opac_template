import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#5f2c3e",
    secondary: "#d1adcc",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    ///////////////
    // Grays
    ///////////////
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "rgb(230,230,230)",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
};
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#fff7ff',
            main: '#d1c4e9',
            dark: '#a094b7',
        },
        secondary: {
            light: '#8e8e8e',
            main: '#616161',
            dark: '#111111',
        },
    },
    typography: {
        fontSize: 12,
        h1: {
            fontSize: "4.5rem",
        },
        h2: {
            fontSize: "2.5rem",
        },
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
            main: Colors.primary,
        },
        secondary: {
            main: Colors.danger,
        },
    },
    typography: {
        fontSize: 12,
        h1: {
            fontSize: "4.5rem",
        },
        h2: {
            fontSize: "2.5rem",
        },
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


export const DrawerWidth = 250;