import { createSlice } from "@reduxjs/toolkit";

const modalSLice = createSlice({
    name: 'modalSlice',
    initialState: {
        profileModalVisibility: false,
    },
    reducers: {
        switchProfileModalVisibility(state) {
            state.profileModalVisibility = !state.profileModalVisibility;
        }
    }
})

export default modalSLice.reducer;
export const {switchProfileModalVisibility } = modalSLice.actions;