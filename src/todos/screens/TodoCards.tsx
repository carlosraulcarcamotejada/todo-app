import { FC } from "react";
import { useTodosStore } from "../../hooks";
import { TodoCard } from "../components";

export const TodoCards: FC = (): JSX.Element => {
  const { todos } = useTodosStore();

  return (
    <div className="relative pb-2">
      <div className="h-40 absolute w-full -top-24 overflow-x-auto flex">
        {todos.map((todo) => (
          <TodoCard key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
