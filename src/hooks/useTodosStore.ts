import { useDispatch, useSelector } from "react-redux";
import { todoistAPI } from "../api/todosAPI";
import {
  onDeleteTodo,
  onLoadingTodos,
  onLoadTodos,
  onLogoutTodos,
  onOrderTodoGoals,
  onSetActiveTodo,
  onUpdateTodo,
} from "../store";
import { RootState } from "../store/store";
import { Todo } from "../store/todos/interfaces";

export const useTodosStore = () => {
  const dispatch = useDispatch();
  const { todos, activeTodo, isLoadingTodos } = useSelector((store: RootState) => store.todos);
  const { user } = useSelector((store: RootState) => store.auth);

  //==================== To start loading TODO'S =======================//
  const startLoadingTodos = async () => {
    try {
      dispatch(onLoadingTodos());
      const { data } = await todoistAPI.get(`/todo/${user._id}`);
      dispatch(onLoadTodos(data.todos));
    } catch (error) {
      console.log(error);
    }
  };

  //==================== To set an active TODO =======================//
  const startSettingActiveTodo = (_id: String | undefined) => {
    dispatch(onSetActiveTodo(_id));
  };

  //==================== To start deleting a TODO =======================//
  const startDeletingTodo = async (todo: Todo) => {
    try {
      dispatch(onLoadingTodos());
      const { data } = await todoistAPI.delete(`/todo/${todo._id}`, {
        data: { _id_user: user._id },
      });
      const { deletedTodo } = data;
      dispatch(onDeleteTodo(deletedTodo));
    } catch (error) {
      console.log(error);
    }
  };

  //==================== To clean Redux state =======================//
  const startTodosLogout = () => {
    dispatch(onLogoutTodos());
  };

  //==================== To toggle the state of a todo goal =======================//
  const startToggleTodoGoal = async (_id: string, _id_todo_goal: string) => {
    try {
      dispatch(onLoadingTodos());
      const { data } = await todoistAPI.put(`/todo/toggletodogoal/${_id}`, {
        _id_todo_goal,
        _id_user: user._id,
      });

      const { updatedTodo } = data;

      dispatch(onUpdateTodo(updatedTodo));
    } catch (error) {
      console.log(error);
    }
  };

  //==================== To delete a todo goal =======================//
  const startDeleteTodoGoal = async (_id: string, _id_todo_goal: string) => {
    try {
      dispatch(onLoadingTodos());

      const { data } = await todoistAPI.put(`/todo/deletetodogoal/${_id}`, {
        _id_todo_goal,
        _id_user: user._id,
      });

      const { updatedTodo } = data;

      dispatch(onUpdateTodo(updatedTodo));
    } catch (error) {
      console.log(error);
    }
  }

  //==================== To change the order of the TODO Goals =======================//
  const startOrderingTodoGoals = async (todo: Todo | undefined) => {
    if (todo) {
      dispatch(onLoadingTodos());
      dispatch(onOrderTodoGoals(todo));
    }
  };

  //==================== To Get how many todos are pengings =======================//
  const pendingTodos = () => {
    let counter: number = 0;
    todos.forEach((todo) => {
      if (todo.completed === false) {
        counter++;
      }
    });
    return counter;
  };

  return {
    //Properties
    todos,
    pendingTodos: pendingTodos(),
    activeTodo,
    isLoadingTodos,
    //Methods
    startLoadingTodos,
    startSettingActiveTodo,
    startDeletingTodo,
    startTodosLogout,
    startToggleTodoGoal,
    startOrderingTodoGoals,
    startDeleteTodoGoal,
  };
};
