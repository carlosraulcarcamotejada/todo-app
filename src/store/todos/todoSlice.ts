import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./interfaces";

type InitialState = {
  todos: Todo[];
  isLoadingTodos: boolean;
  isAddingTodo: boolean;
  isTogglelingTodoGoal: boolean;
  activeTodo: String | undefined;
};

// Define the initial state using that type
const initialState: InitialState = {
  todos: [],
  isLoadingTodos: true,
  isAddingTodo: false,
  isTogglelingTodoGoal: false,
  activeTodo: undefined,
};

export const todoSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onCreateTodo: (state, action: PayloadAction<Todo>) => {
      (state.isAddingTodo = false), state.todos.push(action.payload);
    },
    onAddingTodo: (state) => {
      state.isAddingTodo = true;
    },
    onTogglelingTodoGoal: (state) => {
      state.isTogglelingTodoGoal = true;
    },
    onDeleteTodo: (state, action: PayloadAction<Todo>) => {
      state.isLoadingTodos = false;
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
    },
    onUpdateTodo: (state, action: PayloadAction<Todo>) => {
      state.isTogglelingTodoGoal = false;
      state.todos = state.todos.map((todo) => {
        if (todo._id === action.payload._id) {
          return action.payload;
        }
        return todo;
      });
    },
    onSetActiveTodo: (state, action: PayloadAction<String | undefined>) => {
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
    onOrderTodoGoals: (state, action: PayloadAction<Todo>) => {
      state.isLoadingTodos = false;
      state.todos = state.todos.map((todo) => {
        if (todo._id === action.payload._id) {
          todo.todoGoals = action.payload.todoGoals;
        }
        return todo;
      });
    },
    onLoadingTodos: (state) => {
      state.isLoadingTodos = true;
    },
    onLogoutTodos: (state) => {
      state.todos = [];
      state.isLoadingTodos = false;
      state.activeTodo = undefined;
    },
  },
});

export const {
  onSetActiveTodo,
  onCreateTodo,
  onAddingTodo,
  onDeleteTodo,
  onUpdateTodo,
  onLoadTodos,
  onLogoutTodos,
  onOrderTodoGoals,
  onTogglelingTodoGoal,
  onLoadingTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
