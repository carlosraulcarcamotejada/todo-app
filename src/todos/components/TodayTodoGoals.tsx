import { FC } from "react";
import { useTodosStore } from "../../hooks";
import { TodoGoal } from "./TodoGoal";

export const TodayTodoGoals: FC = (): JSX.Element => {
  const { todos } = useTodosStore();

  const todoTodays: JSX.Element[] = [];

  let totalCompleteTodoToday: number = 0;

  todos.map((todo) => {
    todo.todoGoals.map((todoGoal) => {
      if (todoGoal.deadline === 904930954) {
        if (todoGoal.done) {
          totalCompleteTodoToday++;
        }
        todoTodays.push(
          <TodoGoal key={todoGoal._id_todoGoal} title={todoGoal.title} />
        );
      }
    });
  });

  const percenComplete: number = Math.trunc(
    (totalCompleteTodoToday / todoTodays.length) * 100
  );

  return (
    <div className="w-full h-16 px-4 mt-20">
      <div className="flex justify-between relative">
        <h1 className="text-lg text-neutral-900/80 dark:text-neutral-200/80 font-semibold mb-4">
          Today's plan:
        </h1>
        <PieCharTodo percenComplete={percenComplete} />
      </div>

      <div className="">{todoTodays}</div>
    </div>
  );
};

const PieCharTodo: FC<{percenComplete:number}> = ({percenComplete}): JSX.Element => {
  return (
    <div className="absolute right-0 -top-5">
      <span className="absolute w-14 h-14 right-0 border-4 top-0 border-neutral-300 rounded-full "></span>
      <p className="absolute text-sm text-teal-500 font-extrabold right-2.5 top-4">
        {percenComplete}%
      </p>
      <span className="absolute w-14 h-14 right-0 border-4 top-0 border-teal-500 rounded-full"></span>
    </div>
  );
};
