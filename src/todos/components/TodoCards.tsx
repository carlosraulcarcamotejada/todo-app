import { FC } from "react";
import { TodoCard } from ".";
import { useTodosStore } from "../../hooks";

export const TodoCards: FC = (): JSX.Element => {
  const { todos } = useTodosStore();

  return (
    <div className={`relative pb-2`}>
      <div className="absolute w-full -top-24 overflow-x-auto flex snap-mandatory snap-x">
        {todos.map((todo) => (
          <TodoCard key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
