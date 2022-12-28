import { useDispatch, useSelector } from "react-redux";
import {
  onDeleteTodo,
  onLoadTodos,
  onLogoutTodos,
  onSetActiveTodo,
  onToggleTodoGoal,
} from "../store";
import { RootState } from "../store/store";
import { Todo } from "../store/todos/interfaces";

export const useTodosStore = () => {
  const dispatch = useDispatch();
  const { todos, activeTodo } = useSelector((store: RootState) => store.todos);

  const startLoadingTodos = async () => {
    dispatch(onLoadTodos(todosDB));
  };

  const startSettingActiveTodo = (todo: Todo | undefined) => {
    dispatch(onSetActiveTodo(todo));
  };

  const startDeletingTodo = async (todo: Todo) => {
    dispatch(onDeleteTodo(todo));
  };

  const startTodosLogout = () => {
    dispatch(onLogoutTodos());
  };

  const startToggleTodoGoal = async (_id: string, _id_todoGoal: string) => {
    dispatch(onToggleTodoGoal({ _id, _id_todoGoal }));
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
  };
};

const todosDB: Todo[] = [
  {
    _id: "kdfjnvkjdfnvkdf",
    completed: false,
    todoTitle: "Terminar la mesa",
    todoGoals: [
      {
        _id_todoGoal: "kdfjnvkjdfnvkdf2",
        title: "Pintar mesa",
        deadline: 38432898,
        done: true,
      },
      {
        _id_todoGoal: "kdfjnvkjdfnvkdf3",
        title: "Barnizar mesa",
        deadline: 904930954,
        done: false,
      },
    ],
  },
  {
    _id: "fvdfvdf8v9fd8",
    completed: false,
    todoTitle: "Terminar de aprender React Js",
    todoGoals: [
      {
        _id_todoGoal: "fvdfvdf8v9fd81",
        title: "Aprendre socket",
        deadline: 383648276,
        done: true,
      },
      {
        _id_todoGoal: "fvdfvdf8v9fd82",
        title: "Aprender PWA",
        deadline: 38432898,
        done: true,
      },
      {
        _id_todoGoal: "fvdfvdf8v9fd83",
        title: "Aprender programación decentralizada",
        deadline: 904930954,
        done: false,
      },
    ],
  },
];
