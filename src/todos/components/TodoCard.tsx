import { FC, useState } from "react";
import { Todo } from "../../store/todos/interfaces";
import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useTodosStore } from "../../hooks";
import { AnimatePresence, motion } from "framer-motion";

export const TodoCard: FC<{ todo: Todo }> = ({ todo }): JSX.Element => {
  const { startSettingActiveTodo } = useTodosStore();
  const { _id, todoTitle, todoGoals } = todo;

  let completedTodoGoals: number = 0;
  let progressBar: number = 0;
  let percentageCompleted: number = 0;
  const totalTodoGoals: number = todoGoals.length;
  let completedColor: boolean = false;

  todoGoals.map((todoGoals) => {
    if (todoGoals.done === true) {
      completedTodoGoals++;
    }
  });

  progressBar = Math.trunc(112 * (completedTodoGoals / totalTodoGoals));

  percentageCompleted = Math.trunc((completedTodoGoals / totalTodoGoals) * 100);

  completedColor = percentageCompleted === 100 ? true : false;

  return (
    <div>
      <div
        className="cursor-pointer snap-center mx-4 relative h-36 w-64 active:shadow-sm active:scale-95 transition-all duration-150 pl-4 
        flex justify-start items-start rounded-2xl shadow-md bg-white dark:bg-neutral-800 mb-2"
        onClick={() => {
          startSettingActiveTodo(_id);
        }}
      >
        <DeleteMenu todo={todo} />
        <h3
          className="text-neutral-800/70 mt-10 text-md dark:text-neutral-100 
            font-semibold truncate"
        >
          {todoTitle}
        </h3>
        <p className="absolute left-9 bottom-8 mt-6 text-sm font-bold ml-4 text-teal-500">
          {percentageCompleted}%
        </p>
        <div>
          <span
            className="h-1.5 w-28 mt-2 absolute bottom-5 left-4 rounded-full shadow-inner bg-neutral-200 dark:bg-neutral-400 
          transition-all duration-150"
          ></span>
          <motion.span
            className={`h-1.5 mt-2 absolute bottom-5 left-4 rounded-full bg-gradient-to-r from-sky-400 to-teal-500 transition-all duration-150`}
            initial={{ width: 0 }}
            animate={{ width: progressBar }}
            transition={{ duration: 0.3, type: "keyframes" }}
          ></motion.span>
        </div>
        <motion.div
          animate={{
            background: completedColor ? "#14b8a6" : "#fdba74",
          }}
          exit={{
            background: completedColor ? "#14b8a6" : "#fdba74",
          }}
          transition={{ duration: 0.2 }}
          className={`h-16 w-8 absolute bottom-0 bg-ora rounded-3xl bg-w rounded-tr-none rounded-bl-none 
                    rounded-br-2xl right-0 transition-all duration-500  flex justify-center items-center`}
        >
          <CheckIcon className="h-5 w-5 text-white" />
        </motion.div>
      </div>
    </div>
  );
};

const DeleteMenu: FC<{ todo: Todo }> = ({ todo }): JSX.Element => {
  const { startDeletingTodo } = useTodosStore();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuOptions = [{ option: "Accept" }, { option: "Cancel" }];

  const MenuItem: FC<{ option: string }> = ({ option }) => {
    return (
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          event.stopPropagation();
          option === "Accept" && startDeletingTodo(todo);
          toggleMenu();
        }}
        type="button"
        className="active:bg-neutral-200 dark:active:bg-neutral-600 h-8 w-20 text-sm font-semibold dark:text-neutral-200 
         text-neutral-800/80 first:text-rose-500/80 first:active:bg-rose-500/90 first:active:text-neutral-50 first:rounded-l-lg 
         last:rounded-r-lg"
      >
        {option}
      </button>
    );
  };

  return (
    <>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          event.stopPropagation();
          toggleMenu();
        }}
        type="button"
        className="h-10 w-10 p-2 absolute right-0 active:bg-neutral-100 dark:active:bg-neutral-900 transition-all
            duration-150 rounded-full top-0 flex justify-center items-center "
      >
        <TrashIcon
          className={`${
            isOpen
              ? "text-neutral-400/80 active:text-neutral-500/80 "
              : "text-sky-400 active:text-sky-500 "
          }
            h-8 w-8 active:scale-90 transition-all duration-100`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute active:shadow-sm active:scale-95 transition-all duration-150 border border-neutral-50/80 h-8 w-40 divide-x
             divide-neutral-100 dark:divide-neutral-800 bg-white dark:border-neutral-900 dark:bg-neutral-900 rounded-lg shadow-lg 
             right-1 top-10 flex justify-evenly items-center"
            key="modal"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {menuOptions.map((option) => {
              return <MenuItem key={option.option} option={option.option} />;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
