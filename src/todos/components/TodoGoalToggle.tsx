import { FC, useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "../../components";
import { useTodosStore } from "../../hooks";
import { Modal } from "./Modal";

type TodoGoalProps = {
  title: string;
  _id: string;
  _id_todo_goal: string;
  done: boolean;
};

export const TodoGoalToggle: FC<TodoGoalProps> = ({
  title,
  _id,
  _id_todo_goal,
  done,
}): JSX.Element => {
  //Get information about todos from the store of Redux
  const { startToggleTodoGoal, isLoadingTodos } = useTodosStore();

  //Function to call the process toggle from el hook useTodosStore()
  const toggleTodoGoal = (_id: string, _id_todo_goal: string) => {
    setShouldRender(true);
    startToggleTodoGoal(_id, _id_todo_goal);
  };

  //Code to check if there were previous data
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  useEffect(() => {
    setShouldRender(false);
  }, [done]);

  //useState to manage the modal component
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex relative">
      <div
        className="text-md w-full pl-1 shadow-sm h-16 flex items-center text-neutral-900/80 dark:text-neutral-200/80 
        border-t last:border-b border-neutral-200/80 dark:border-neutral-700/70 first:border-b-transparent dark:bg-neutral-800
        cursor-grab bg-neutral-50 z-10"
      >
        {/* Menu Button */}
        <button
          className="p-2 bg-neutral-100/50 dark:bg-neutral-800 mr-2 rounded-full active:scale-95 transition-all duration-100 border
           border-neutral-200/40 dark:border-neutral-700/40 dark:active:bg-neutral-700 active:bg-neutral-300"
          type="button"
          onClick={() => {
            setIsOpenModal(!isOpenModal);
          }}
        >
          <Bars3Icon className="h-6 w-6 text-neutral-400 dark:text-neutral-600" />
        </button>

        {/* Modal */}
        <AnimatePresence>
          { isOpenModal && <Modal  setIsOpenModal={setIsOpenModal} optionModal={true} />}
        </AnimatePresence>

        <div
          className="flex justify-between items-center w-full dark:active:bg-neutral-700 active:bg-neutral-300 transition-all duration-100"
          onClick={() => {
            toggleTodoGoal(_id, _id_todo_goal);
          }}
        >
          {/* Shows todo goal */}
          <p
            className={`truncate ${
              done
                ? "text-neutral-400 dark:text-neutral-600 line-through"
                : "font-semibold"
            }`}
          >
            {title}
          </p>
          {/* Shows the status */}
          {isLoadingTodos && shouldRender && (
            <div className="mr-3">
              <Spinner size={20} />
            </div>
          )}
          {done && !shouldRender && (
            <span>
              <CheckIcon className={`h-7 w-7 text-teal-500 mr-3`} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
