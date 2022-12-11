import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";

type InitialState = {
  todos: Todo[];
};

// Define the initial state using that type
const initialState: InitialState = {
  todos: [
    {
      _id: "kdfjnvkjdfnvkdf",
      completed: false,
      todoTitle: "Terminar la mesa",
      todoGoals: [
        {
          _id_todoGoal: "1",
          title: "Lijar mesa",
          deadline: 383648276,
          done: false,
        },
        {
          _id_todoGoal: "2",
          title: "Pintar mesa",
          deadline: 38432898,
          done: false,
        },
        {
          _id_todoGoal: "3",
          title: "Barnizar mesa",
          deadline: 904930954,
          done: false,
        },
      ],
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onCreateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    onDeleteTodo: (state, action: PayloadAction<string>) => {},
    onEditTodo: (state, action: PayloadAction<Todo>) => {},
    onLoadTodos: (state) => {
      state.todos;
    },
    onLogoutTodos: (state) => {
      state.todos = [];
    },
  },
});

export const {
  onCreateTodo,
  onDeleteTodo,
  onEditTodo,
  onLoadTodos,
  onLogoutTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
