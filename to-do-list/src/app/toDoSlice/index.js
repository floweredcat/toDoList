import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = []

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const addedTask = action.payload;
            state.push({
                id: nanoid(),
                task: addedTask,
                completed: false,
            })
        },
        deleteTask: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            state.splice(index, 1);
        },
        complyTask: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);

            state[index].completed = state[index].completed ? false : true;
        }
    }
});

export const toDoListSliceActions = toDoListSlice.actions