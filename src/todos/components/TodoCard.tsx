import { FC, useState, useEffect, useRef } from "react";
import { Todo } from "../../store/todos/interfaces";
import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useTodosStore } from "../../hooks";
import { motion } from "framer-motion";

export const TodoCard: FC<{ todo: Todo }> = ({ todo }): JSX.Element => {
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
    <div>
      <div
        className="cursor-pointer snap-center mx-4 relative h-36 w-64 active:shadow-sm active:scale-95 transition-all duration-150 pl-4 flex justify-start
        items-start rounded-2xl shadow-md bg-white dark:bg-neutral-800 mb-2"
        onClick={() => {
          startSettingActiveTodo(todo);
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
        <div className="transition-all duration-150">
          <span className="h-1.5 w-28 mt-2 absolute bottom-5 left-4 rounded-full bg-neutral-200 dark:bg-neutral-400 transition-all duration-150"></span>
          <span
            className={`h-1.5 w-[${progressBar}px] mt-2 absolute bottom-5 left-4 rounded-full bg-teal-500 transition-all duration-150`}
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

const DeleteMenu: FC<{ todo: Todo }> = ({ todo }): JSX.Element => {
  const { startDeletingTodo } = useTodosStore();

  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const checkIfClickedOutside = (event: any) => {
    // If the menu is open and the clicked target is not within the menu,
    // then close the menu
    if (isOpen && ref.current && !ref.current.contains(event.target)) {
      console.log({ isOpen });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

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
         text-neutral-800/80 first:active:bg-rose-500/90 first:rounded-l-lg last:rounded-r-lg"
      >
        {option}
      </button>
    );
  };

  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
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
              : "text-rose-400 active:text-rose-500 "
          }
            h-8 w-8 active:scale-90 transition-all duration-100`}
        />
      </button>
      {isOpen && (
        <motion.div
          ref={ref}
          className="absolute active:shadow-sm active:scale-95 transition-all duration-150 border border-neutral-50/80 h-8 w-40 divide-x
             divide-neutral-100 dark:divide-neutral-800 bg-white dark:border-neutral-900 dark:bg-neutral-900 rounded-lg shadow-lg right-1
              top-10 flex justify-evenly items-center"
          {...animationProps}
        >
          {menuOptions.map((option) => {
            return <MenuItem key={option.option} option={option.option} />;
          })}
        </motion.div>
      )}
    </>
  );
};
