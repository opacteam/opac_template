import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        toggle: (state) => {

            state.open = !state.open
        }
    }
})

export const { toggle } = editorSlice.actions;

export default editorSlice.reducer;