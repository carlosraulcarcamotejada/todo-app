import { useDispatch, useSelector } from "react-redux";
import { todoistAPI } from "../api/todosAPI";
import {
  onDeleteTodo,
  onLoadTodos,
  onLogoutTodos,
  onOrderTodoGoals,
  onSetActiveTodo,
  onToggleTodoGoal,
} from "../store";
import { RootState } from "../store/store";
import { Todo } from "../store/todos/interfaces";

export const useTodosStore = () => {
  const dispatch = useDispatch();
  const { todos, activeTodo } = useSelector((store: RootState) => store.todos);
  const { user } = useSelector((store: RootState) => store.auth);

  const startLoadingTodos = async () => {
    try {
      const { data } = await todoistAPI.get(`/todo/${user._id}`);
      dispatch(onLoadTodos(data.todos));
    } catch (error) {
      console.log(error);
    }
  };

  const startSettingActiveTodo = (_id: String | undefined) => {
    dispatch(onSetActiveTodo(_id));
  };

  const startDeletingTodo = async (todo: Todo) => {
    try {
      const {data} = await todoistAPI.delete(`/todo/${todo._id}`,{data:{_id_user:user._id}});
      const {deletedTodo} = data;
      dispatch(onDeleteTodo(deletedTodo));
    } catch (error) {
      console.log(error);
    }
  };

  const startTodosLogout = () => {
    dispatch(onLogoutTodos());
  };

  const startToggleTodoGoal = async (_id: string, _id_todoGoal: string) => {
    dispatch(onToggleTodoGoal({ _id, _id_todoGoal }));
  };

  const startOrderingTodoGoals = async (todo: Todo | undefined) => {
    if (todo) {
      dispatch(onOrderTodoGoals(todo));
    }
  };

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
    //Methods
    startLoadingTodos,
    startSettingActiveTodo,
    startDeletingTodo,
    startTodosLogout,
    startToggleTodoGoal,
    startOrderingTodoGoals,
  };
};
