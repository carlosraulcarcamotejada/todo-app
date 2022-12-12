import { useDispatch, useSelector } from "react-redux";
import { onLoadTodos, onSetActiveTodo } from "../store";
import { RootState } from "../store/store";
import { Todo } from "../store/todos/types";

export const useTodosStore = () => {
  const dispatch = useDispatch();
  const { todos, activeTodo } = useSelector((store: RootState) => store.todos);

  const startLoadingTodos = async () => {
    dispatch(onLoadTodos(todosDB));
  };

  const startSettingActiveTodo = (todo: Todo | undefined) => {
    dispatch(onSetActiveTodo(todo));
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
  };
};

const todosDB: Todo[] = [
  {
    _id: "kdfjnvkjdfnvkdf",
    completed: true,
    todoTitle: "Terminar la mesa",
    todoGoals: [
      {
        _id_todoGoal: "2",
        title: "Pintar mesa",
        deadline: 38432898,
        done: true,
      },
      {
        _id_todoGoal: "3",
        title: "Barnizar mesa",
        deadline: 904930954,
        done: true,
      },
    ],
  },
  {
    _id: "fvdfvdf8v9fd8",
    completed: false,
    todoTitle: "Terminar de aprender React Js",
    todoGoals: [
      {
        _id_todoGoal: "1",
        title: "Aprendre socket",
        deadline: 383648276,
        done: false,
      },
      {
        _id_todoGoal: "2",
        title: "Aprender PWA",
        deadline: 38432898,
        done: false,
      },
      {
        _id_todoGoal: "3",
        title: "Aprender programación decentralizada",
        deadline: 904930954,
        done: true,
      },
    ],
  },
];
