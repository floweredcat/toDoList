import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  { text: "hello, world!", id: nanoid(), queue: 1 },
  { text: "hello, world2!", id: nanoid(), queue: 2 },
];

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { addedTask } = action.payload;
      if (addedTask.length > 0) {
        state.push({
          id: nanoid(),
          text: addedTask,
          queue: state.length + 1,
          completed: false,
        });
      }
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    complyTask: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);

      state[index].completed = state[index].completed ? false : true;
    },
    updateQueue: (state, action) => {
      const { updatedList } = action.payload;

      state = updatedList;
      return state;
    },
  },
});

export const toDoListSliceActions = toDoListSlice.actions;
