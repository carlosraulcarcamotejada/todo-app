import { FC } from "react";
import { useTodosStore } from "../../hooks";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const TodoScreen: FC = (): JSX.Element => {
  const { activeTodo, startSettingActiveTodo } = useTodosStore();

  return (
    <div className="w-full h-16 px-4 mt-4 ">
      <button
        className="h-10 w-10 active:scale-95 bg-indigo-300 transition-all duration-150
       active:bg-neutral-200 rounded-full flex justify-center items-center p-2"
        onClick={() => {
          startSettingActiveTodo(undefined);
        }}
        type="button"
      >
        <ArrowLeftIcon className="h-8 w-8 text-teal-500" />
      </button>
      <h1>{activeTodo?.todoTitle}</h1>
      <ul>
        {activeTodo?.todoGoals.map((todoGoal) => (
          <li key={todoGoal._id_todoGoal}>{todoGoal.title}</li>
        ))}
      </ul>
    </div>
  );
};
