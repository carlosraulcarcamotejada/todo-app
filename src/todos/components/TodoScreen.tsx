import { FC } from "react";
import { useTodosStore } from "../../hooks";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const TodoScreen: FC = (): JSX.Element => {
  const { activeTodo, startSettingActiveTodo } = useTodosStore();

  return (
    <div className="w-full h-16 mt-4 text-neutral-900/80 dark:text-neutral-100/80">
      <button
        className="h-10 w-10 active:scale-95 transition-all duration-150 text-teal-500 font-semibold text-lg flex"
        onClick={() => {
          startSettingActiveTodo(undefined);
        }}
        type="button"
      >
        <div className="flex items-center">
          <ChevronLeftIcon className="h-6 w-6 text-teal-500" />
          <span>Back</span>
        </div>
      </button>
      <h3 className="text-lg font-bold my-8">{activeTodo?.todoTitle}:</h3>

      {activeTodo?.todoGoals.map((todoGoal) => (
        <TodoGoal
          key={todoGoal._id_todoGoal}
          _id={todoGoal._id_todoGoal}
          title={todoGoal.title}
        />
      ))}
    </div>
  );
};

const TodoGoal: FC<{ title: string; _id: string }> = ({
  title,
  _id,
}): JSX.Element => {
  const toggleTodoGoal = (_id: string) => {
    console.log("click on list item: ", _id);
  };

  return (
    <div
      onClick={() => {
        toggleTodoGoal(_id);
      }}
      className="text-md h-12 flex justify-start items-center text-neutral-900/80 dark:text-neutral-200/80 border-y
       border-neutral-200/80 dark:border-neutral-800 first:border-b-transparent dark:active:bg-neutral-800 active:bg-neutral-300 transition-all duration-150"
    >
      <p className="">{title}</p>
    </div>
  );
};

const PieCharTodo: FC<{ percenComplete: number }> = ({
  percenComplete,
}): JSX.Element => {
  return (
    <div className="absolute right-0 -top-5">
      <span className="absolute w-14 h-14 right-0 border-4 top-0 border-neutral-300 rounded-full "></span>
      <p className="absolute text-sm text-teal-500 font-extrabold right-2.5 top-4">
        {percenComplete}%
      </p>
      <span className="absolute w-14 h-14 right-0 border-4 top-0 border-teal-500 rounded-full"></span>
    </div>
  );
};
