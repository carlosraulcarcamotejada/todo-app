import { FC } from "react";
import { TodoGoal } from "../../store/todos/types";
import { EllipsisHorizontalIcon, CheckIcon } from "@heroicons/react/24/outline";

type props = {
  todoTitle: string;
  todoGoals: TodoGoal[];
};

export const TodoCard: FC<props> = ({ todoTitle, todoGoals }): JSX.Element => {
  return (
    <div
      onClick={() => console.log("Clicking on card")}
      className="h-36 w-64 -top-20 left-1/2 -translate-x-1/2 absolute pl-4 flex flex-col justify-start 
        items-start rounded-2xl shadow-md bg-white dark:bg-neutral-800"
    >
      <div className="relative">
        <button
          onClick={() => {
            console.log("Click on menu!");
          }}
          className="absolute -right-24 rounded-lg top-0.5 h-10 w-10 flex justify-center items-center"
        >
          <EllipsisHorizontalIcon className="text-neutral-400 active:text-neutral-500 h-8 w-8 active:scale-90 transition-all duration-100 " />
        </button>
        <h3 className="text-neutral-800/70 mt-8 text-lg dark:text-neutral-100 font-semibold">
          {todoTitle}
        </h3>
        <p className="mt-6 text-sm font-bold ml-4 text-teal-500">33%</p>
        <div className="relative">
          <span className="h-1.5 w-28 mt-2 absolute left-0 right-0 rounded-full bg-neutral-200 dark:bg-neutral-400"></span>
          <span className="h-1.5 w-10 mt-2 absolute left-0 right-0 rounded-full bg-teal-500"></span>
        </div>
        <div className="h-16 w-8 absolute -bottom-10 rounded-3xl rounded-tr-none rounded-bl-none rounded-br-2xl  -right-24 bg-orange-300 flex justify-center items-center">
          <CheckIcon className="h-5 w-5 font-extrabold text-white" />
        </div>
      </div>
    </div>
  );
};
