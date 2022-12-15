import { FC } from "react";
import { useTodosStore } from "../../hooks";

export const TodayTodoGoals: FC = (): JSX.Element => {
  const { todos } = useTodosStore();
  return (
    <div className="w-full h-16 px-4 mt-20">
      <h1 className="text-lg text-neutral-900/80 dark:text-neutral-200/80 font-semibold mb-4">
        Today's plan:
      </h1>
      {todos.map((todo) => {
        return (
          <ul key={todo._id}>
            {todo.todoGoals.map((todoGoal) => {
              return (
                todoGoal.deadline === 904930954 && (
                  <li className="text-md mb-4 text-neutral-900/80 dark:text-neutral-200/80" key={todoGoal._id_todoGoal}>
                    {todoGoal.title}
                  </li>
                )
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
