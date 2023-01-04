import { FC, useEffect, useState } from "react";
import { useTodosStore } from "../../hooks";
import { ChevronLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Spinner } from "../../components";

export const TodoScreen: FC = (): JSX.Element => {
  const { activeTodo, startSettingActiveTodo, todos } = useTodosStore();

  const todoGoals: JSX.Element[] = [];
  let totalCompleteTodoGaols: number = 0;
  let percenComplete: number = 0;

  if (activeTodo) {
    let totalTodoGaols: number = 0;
    todos.forEach((todo) => {
      if (todo._id === activeTodo) {
        todo.todoGoals.map((todoGoal) => {
          todoGoal.done && totalCompleteTodoGaols++;
          totalTodoGaols++;
          todoGoals.push(
            <TodoGoal
              _id={todo._id || ""}
              _id_todoGoal={todoGoal?._id || ""}
              key={todoGoal._id}
              title={todoGoal.title}
              done={todoGoal.done}
            />
          );
        });
      }
    });
    percenComplete = Math.trunc(
      (totalCompleteTodoGaols / totalTodoGaols) * 100
    );
  } else {
    todos.forEach((todo) => {
      todo.todoGoals.forEach((todoGoal) => {
        if (todoGoal.deadline === 904930954) {
          todoGoal.done && totalCompleteTodoGaols++;
          todoGoals.push(
            <TodoGoal
              _id={todo._id || ""}
              _id_todoGoal={todoGoal?._id || ""}
              key={todoGoal._id}
              title={todoGoal.title}
              done={todoGoal.done}
            />
          );
        }
      });
    });
    if (todoGoals.length !== 0) {
      percenComplete = Math.trunc(
        (totalCompleteTodoGaols / todoGoals.length) * 100
      );
    }
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
        <h3 className="text-lg font-bold pl-4 truncate">
          {activeTodo
            ? todos.find((todo) => todo._id === activeTodo)?.todoTitle
            : `${
                todoGoals.length !== 0
                  ? "Today's plan:"
                  : "There's no plans for today"
              }`}
        </h3>
        <PieCharTodo percenComplete={percenComplete} />
      </div>
      {/* 
      <Reorder.Group axis="y" onReorder={()=>{startOrderingTodoGoals(todos.find(todo => todo._id === activeTodo))}} values={todos}>
        {todoGoals}
      </Reorder.Group> */}

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
  const { startToggleTodoGoal, isLoadingTodos } = useTodosStore();



  const toggleTodoGoal = (_id: string, _id_todoGoal: string) => {
   
    startToggleTodoGoal(_id, _id_todoGoal);
  };

  return (
    <div
      onClick={() => {
        toggleTodoGoal(_id, _id_todoGoal);
      }}
      className="text-md pl-4 h-16 flex justify-between items-center text-neutral-900/80 dark:text-neutral-200/80 
      border-t last:border-b border-neutral-200/80 dark:border-neutral-700/70 first:border-b-transparent dark:bg-neutral-800
     dark:active:bg-neutral-700 active:bg-neutral-300 transition-all duration-50 cursor-pointer bg-neutral-50"
    >
      <p
        className={`truncate ${
          done ? "text-neutral-400 dark:text-neutral-600" : "font-semibold"
        }`}
      >
        {title}
      </p>
      {/* {isLoadingTodos && (
        <div className="mr-3">
          <Spinner size={20} />
        </div>
      )} */}
      {done && (
        <motion.span >
          <CheckIcon className={`h-7 w-7 text-teal-500 mr-3`} />
        </motion.span>
      )}
    </div>
  );
};

const PieCharTodo: FC<{ percenComplete: number }> = ({
  percenComplete,
}): JSX.Element => {
  return (
    <div className="w-14 h-14 rounded-full bg-gray-50 dark:bg-neutral-800 shadow-inner flex justify-center items-center mr-4">
      <p className="text-sm text-teal-500 font-bold ">{percenComplete}%</p>
    </div>
  );
};
