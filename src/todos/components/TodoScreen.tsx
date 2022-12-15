import { FC } from "react";
import { useTodosStore } from "../../hooks";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const TodoScreen: FC = (): JSX.Element => {
  const { activeTodo, startSettingActiveTodo } = useTodosStore();

  return (
    <div className="w-full h-16 px-4 mt-4 text-neutral-900/80 dark:text-neutral-100/80">
      <button
        className="h-10 w-10 active:scale-95  transition-all duration-150
       active:bg-neutral-200 rounded-full flex justify-center items-center p-2"
        onClick={() => {
          startSettingActiveTodo(undefined);
        }}
        type="button"
      >
        <ArrowLeftIcon className="h-8 w-8 text-teal-500" />
      </button>
      <h3 className="text-lg font-bold mb-10">{activeTodo?.todoTitle}</h3>
      <ul>
        {activeTodo?.todoGoals.map((todoGoal) => (
          <li className="" key={todoGoal._id_todoGoal}>{todoGoal.title}</li>
        ))}
      </ul>
    </div>
  );
};
