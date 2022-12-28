import { FC } from "react";
import { useTodosStore } from "../../hooks";
import { ChevronLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const TodoScreen: FC = (): JSX.Element => {
  const { activeTodo, startSettingActiveTodo, todos } = useTodosStore();

  const todoGoals: JSX.Element[] = [];
  let totalCompleteTodoGaols: number = 0;
  let percenComplete: number = 0;

  if (!activeTodo) {
    todos.forEach((todo) => {
      todo.todoGoals.forEach((todoGoal) => {
        if (todoGoal.deadline === 904930954) {
          if (todoGoal.done) {
            totalCompleteTodoGaols++;
          }
          todoGoals.push(
            <TodoGoal
              _id={todo._id}
              _id_todoGoal={todoGoal._id_todoGoal}
              key={todoGoal._id_todoGoal}
              title={todoGoal.title}
              done={todoGoal.done}
            />
          );
        }
      });
    });
    percenComplete = Math.trunc(
      (totalCompleteTodoGaols / todoGoals.length) * 100
    );
  } else {
    activeTodo.todoGoals.forEach((todoGoal) => {
      if (todoGoal.done) {
        totalCompleteTodoGaols++;
      }
      todoGoals.push(
        <TodoGoal
          _id={activeTodo._id}
          _id_todoGoal={todoGoal._id_todoGoal}
          key={todoGoal._id_todoGoal}
          title={todoGoal.title}
          done={todoGoal.done}
        />
      );
    });

    percenComplete = Math.trunc(
      (totalCompleteTodoGaols / activeTodo.todoGoals.length) * 100
    );
  }

  return (
    <div
      className={`w-full h-16 text-neutral-900/80 dark:text-neutral-100/80  ${
        activeTodo ? "mt-4" : "mt-20"
      }`}
    >
      <button
        className={`h-10 w-10 active:scale-95 transition-all
         duration-150 text-teal-500 font-semibold text-lg flex ${
           !activeTodo ? "hidden" : ""
         }`}
        onClick={() => {
          startSettingActiveTodo(undefined);
        }}
        type="button"
      >
        <div className="flex items-center">
          <ChevronLeftIcon className="h-10 w-10 text-teal-500" />
          <span>Back</span>
        </div>
      </button>

      <div className="flex justify-between items-center h-20">
        <h3 className="text-lg font-bold pl-6 truncate">
          {activeTodo ? activeTodo?.todoTitle : "Today's plan:"}
        </h3>
        <PieCharTodo percenComplete={percenComplete} />
      </div>

      {todoGoals}
    </div>
  );
};

const TodoGoal: FC<{
  title: string;
  _id: string;
  _id_todoGoal: string;
  done: boolean;
}> = ({ title, _id, _id_todoGoal, done }): JSX.Element => {
  const { startToggleTodoGoal } = useTodosStore();

  const toggleTodoGoal = (_id: string, _id_todoGoal: string) => {
    startToggleTodoGoal(_id, _id_todoGoal);
  };

  return (
    <div
      onClick={() => {
        toggleTodoGoal(_id, _id_todoGoal);
      }}
      className="text-md pl-6 h-12 flex justify-between items-center text-neutral-900/80 dark:text-neutral-200/80 border-t last:border-b
       border-neutral-200/80 dark:border-neutral-800 first:border-b-transparent dark:active:bg-neutral-800 active:bg-neutral-300 transition-all duration-50"
    >
      <p
        className={`truncate ${
          done ? "text-neutral-400 dark:text-neutral-600" : "font-semibold"
        }`}
      >
        {title}
      </p>
      {done && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <CheckIcon className={`h-7 w-7 text-teal-500 mr-4`} />
        </motion.span>
      )}
    </div>
  );
};

const PieCharTodo: FC<{ percenComplete: number }> = ({
  percenComplete,
}): JSX.Element => {
  return (
    <div className="w-14 h-14 rounded-full bg-gray-50 dark:bg-neutral-800  shadow-sm flex justify-center items-center mr-4">
      <p className="text-sm text-teal-500 font-bold ">{percenComplete}%</p>
    </div>
  );
};
