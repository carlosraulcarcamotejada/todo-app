import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";

type InitialState = {
  todos: Todo[];
  isLoadingTodos: boolean;
  activeTodo: Todo | undefined;
};

// Define the initial state using that type
const initialState: InitialState = {
  todos: [],
  isLoadingTodos: true,
  activeTodo: undefined,
};

export const todoSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onCreateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    onDeleteTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
    },
    onUpdateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo._id === action.payload._id) {
          return action.payload;
        }
        return todo;
      });
    },
    onSetActiveTodo: (state, action: PayloadAction<Todo | undefined>) => {
      state.activeTodo = action.payload;
    },
    onLoadTodos: (state, action: PayloadAction<Todo[]>) => {
      state.isLoadingTodos = false;
      action.payload.forEach((todo) => {
        const exists = state.todos.some((dbTodo) => dbTodo._id === todo._id);
        if (!exists) {
          state.todos.push(todo);
        }
      });

      state.todos;
    },
    onLogoutTodos: (state) => {
      state.todos = [];
    },
  },
});

export const {
  onSetActiveTodo,
  onCreateTodo,
  onDeleteTodo,
  onUpdateTodo,
  onLoadTodos,
  onLogoutTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
