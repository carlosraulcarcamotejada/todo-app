import { FC, useEffect, useState } from "react";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Spinner } from "../../components";
import { useTodosStore } from "../../hooks";

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

  //Animation object props
  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 },
  };

  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-60, 0, 0, 60],
    ["#dc2626", "#FFFFFF00", "#FFFFFF00", "#bae6fd"]
  );

  return (
    <motion.div className="flex" style={{ background }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -60, right: 60 }}
        style={{ x }}
        onClick={() => {
          toggleTodoGoal(_id, _id_todo_goal);
        }}
        className="text-md w-full bg- pl-4 shadow-sm h-16 flex justify-between items-center text-neutral-900/80 dark:text-neutral-200/80 
        border-t last:border-b border-neutral-200/80 dark:border-neutral-700/70 first:border-b-transparent dark:bg-neutral-800
       dark:active:bg-neutral-700 active:bg-neutral-300 transition-all duration-100 cursor-grab bg-neutral-50"
      >
        <p
          className={`truncate ${
            done
              ? "text-neutral-400 dark:text-neutral-600 line-through"
              : "font-semibold"
          }`}
        >
          {title}
        </p>
        {isLoadingTodos && shouldRender && (
          <div className="mr-3">
            <Spinner size={20} />
          </div>
        )}
        {done && !shouldRender && (
          <motion.span {...animationProps}>
            <CheckIcon className={`h-7 w-7 text-teal-500 mr-3`} />
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};
