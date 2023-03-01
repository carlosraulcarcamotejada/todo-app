import { FC } from "react";
import { useTodosStore } from "../../hooks";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { PieCharTodo, TodoGoalToggle } from ".";

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
            <TodoGoalToggle
              _id={todo._id || ""}
              _id_todo_goal={todoGoal?._id || ""}
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
            <TodoGoalToggle
              _id={todo._id || ""}
              _id_todo_goal={todoGoal?._id || ""}
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
      className={`w-full h-16 text-neutral-900/80 
       dark:text-neutral-100/80  ${activeTodo ? "mt-4" : "mt-20"}`}
    >
      <div
        className={`${activeTodo ? "flex justify-start " : ""}`}
      >
        <button
          className={`h-10 w-10 active:scale-95 transition-all
         duration-150 text-teal-500 font-semibold text-lg flex ${
           !activeTodo ? "hidden " : ""
         }`}
          onClick={() => {
            startSettingActiveTodo(undefined);
          }}
          type="button"
        >
          <div className={`flex items-center  `}>
            <ChevronLeftIcon className="h-10 w-10" />
            <span className={`${activeTodo ? "" : ""}`}>Back</span>
          </div>
        </button>

        <div
          className={`flex justify-between ${
            activeTodo ? "h-16 pt-1.5 ml-10 items-start" : "h-20 items-center"
          }`}
        >
          <h3 className="text-lg font-bold pl-4 truncate">
            {activeTodo
              ? todos.find((todo) => todo._id === activeTodo)?.todoTitle
              : `${
                  todoGoals.length !== 0
                    ? "Today's plan:"
                    : "There's no plans for today"
                }`}
          </h3>
          {!activeTodo && <PieCharTodo percenComplete={percenComplete} />}
        </div>
      </div>
      <div className="pb-36 dark:bg-black bg-neutral-100">{todoGoals}</div>
    </div>
  );
};
