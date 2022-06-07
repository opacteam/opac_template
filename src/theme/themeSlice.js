import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkTheme: false,
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            console.log(123)
            state.darkTheme = !state.darkTheme;
        },
    },
})


export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;