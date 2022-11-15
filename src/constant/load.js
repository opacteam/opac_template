import { createSlice } from '@reduxjs/toolkit';
export const initialLoad = createSlice({
    name: 'initialLoad',
    initialState: {
        isLoad: true
    },
    reducers: {
        doneLoad: (state, action) => { state.isLoad = false }
    }
})

export const { doneLoad } = initialLoad.actions;
export default initialLoad.reducer;