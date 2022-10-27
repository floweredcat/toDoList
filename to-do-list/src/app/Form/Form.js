import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: {},
    text: [],
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { title, text } = action.payload;

            console.log(title, text);

            state.title = title;
            state.text = text;

            return state
        },
    }
})


export const formSliceActions = formSlice.actions