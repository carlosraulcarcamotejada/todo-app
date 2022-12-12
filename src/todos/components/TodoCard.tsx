import { FC, useEffect } from "react";
import { Todo } from "../../store/todos/types";
import { EllipsisHorizontalIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useTodosStore } from "../../hooks";

type props = {
  todo: Todo;
};

export const TodoCard: FC<props> = ({ todo }): JSX.Element => {
  const { startSettingActiveTodo } = useTodosStore();
  const { todoTitle, todoGoals } = todo;

  let completedTodoGoals: number = 0;
  let progressBar: number = 0;
  let percentageCompleted: number = 0;
  const totalTodoGoals: number = todoGoals.length;
  let alertColor: string = "";

  todoGoals.map((todoGoals) => {
    if (todoGoals.done === true) {
      completedTodoGoals++;
    }
  });

  progressBar = Math.trunc(112 * (completedTodoGoals / totalTodoGoals));

  percentageCompleted = Math.trunc((completedTodoGoals / totalTodoGoals) * 100);

  alertColor = percentageCompleted === 100 ? "teal-500" : "orange-300";


  return (
    <div
      className="px-4 cursor-pointer"
      onClick={() => {
        startSettingActiveTodo(todo);
      }}
    >
      <div
        className="relative h-36 w-64 active:shadow-sm active:scale-95 transition-all duration-150 pl-4 flex justify-start
        items-start rounded-2xl shadow-md bg-white dark:bg-neutral-800 mb-2"
      >
        <button
          onClick={() => {
            console.log("Click on menu! " + todoTitle);
          }}
          className="absolute right-1 active:bg-neutral-100 transition-all
              duration-150 rounded-full top-0.5 h-10 w-10 flex justify-center items-center"
        >
          <EllipsisHorizontalIcon
            className="text-neutral-400 active:text-neutral-500 
              h-8 w-8 active:scale-90 transition-all duration-100 "
          />
        </button>
        <h3
          className="text-neutral-800/70 mt-8 text-md dark:text-neutral-100 
            font-semibold truncate"
        >
          {todoTitle}
        </h3>
        <p className="absolute left-6 bottom-5 mt-6 text-sm font-bold ml-4 text-teal-500">
          {percentageCompleted}%
        </p>
        <div className="transition-all duration-150">
          <span className="h-1.5 w-28 mt-2 absolute bottom-2 left-4 rounded-full bg-neutral-200 dark:bg-neutral-400 transition-all duration-150"></span>
          <span
            className={`h-1.5 w-[${progressBar}px] mt-2 absolute bottom-2 left-4 rounded-full bg-teal-500 transition-all duration-150`}
          ></span>
        </div>
        <div
          className={`h-16 w-8 absolute bottom-0 rounded-3xl rounded-tr-none rounded-bl-none 
                        rounded-br-2xl right-0 bg-${alertColor} flex justify-center items-center`}
        >
          <CheckIcon className="h-5 w-5 font-extrabold text-white" />
        </div>
      </div>
    </div>
  );
};
