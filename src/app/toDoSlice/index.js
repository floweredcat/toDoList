import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [{
    id: nanoid(),
    task: 'Create to-do list',
    completed: true,
}]

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const addedTask = action.payload;
            if (addedTask.length > 0) {
                state.push({
                    id: nanoid(),
                    task: addedTask,
                    completed: false,
                })}
        },
        deleteTask: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            state.splice(index, 1);
        },
        complyTask: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);

            state[index].completed = state[index].completed ? false : true;
        },
        editTask: (state, action) => {
            const {id, value} = action.payload
            const index = state.findIndex((todo) => todo.id === id);
            state[index].task = value.length > 0 ? value : state.splice(index, 1);
        }
    }
});

export const toDoListSliceActions = toDoListSlice.actions