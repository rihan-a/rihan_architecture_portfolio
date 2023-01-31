import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "project",
    initialState: {
        projectId: null,
    },
    // action creators
    reducers: {
        setProjectId: (state, action) => {
            state.projectId = action.payload;
            console.log(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { setProjectId } = projectSlice.actions;

export default projectSlice.reducer;
