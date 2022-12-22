import { FC } from "react";
import { useTodosStore } from "../../hooks";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { TodoGoal } from "./TodoGoal";

export const TodoScreen: FC = (): JSX.Element => {
  const { activeTodo, startSettingActiveTodo } = useTodosStore();

  return (
    <div className="w-full h-16 px-4 mt-4 text-neutral-900/80 dark:text-neutral-100/80">
      <button
        className="h-10 w-10 active:scale-95 transition-all duration-150 text-teal-500 font-semibold text-lg
        rounded-full flex justify-center items-center p-2 "
        onClick={() => {
          startSettingActiveTodo(undefined);
        }}
        type="button"
      >
       Back
      </button>
      <h3 className="text-lg font-bold my-8">{activeTodo?.todoTitle}:</h3>
      <div className="">
        {activeTodo?.todoGoals.map((todoGoal) => (
          <TodoGoal key={todoGoal._id_todoGoal} title={todoGoal.title} />
        ))}
      </div>
    </div>
  );
};
