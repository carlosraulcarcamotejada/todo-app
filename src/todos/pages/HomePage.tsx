import { FC } from "react";
import { useAuthStore, useTodosStore } from "../../hooks";
import { HeaderApp, TodoCard } from "../components";
import { LayoutContent } from "../layout/LayoutContent";
import { LayoutTodos } from "../layout/LayoutTodos";
import { TodayTodoGoals, TodoScreen } from "../screens";
import { TodoCards } from "../screens/TodoCards";

export const HomePage: FC = (): JSX.Element => {
  const {
    user: { name },
  } = useAuthStore();
  const { todos, pendingTodos, activeTodo } = useTodosStore();
  const userUrlImage =
    "https://yt3.ggpht.com/ytc/AMLnZu-fRDgqki18U5Qd9mEzIUW_1JnPLbXE7hJ5WjEpnw=s108-c-k-c0x00ffffff-no-rj";

  return (
    <LayoutTodos>
      <HeaderApp>
        <div className="flex items-center justify-start pt-10 standalone:pt-14">
          <div className="ml-6">
            <h2 className="text-2xl mb-1 font-semibold">
              HI! {name || "John Doe"}
            </h2>
            <p className="text-md">There are {pendingTodos} things to do... </p>
          </div>
          <div className="ml-22 flex justify-end">
            <img
              className="rounded-full w-14 h-14 border-2 border-neutral-300"
              src={userUrlImage}
              alt="userUrlImage"
            />
          </div>
        </div>
      </HeaderApp>

      {activeTodo ? (
        <TodoScreen />
      ) : (
        <LayoutContent>
          <TodoCards />
          <TodayTodoGoals />
        </LayoutContent>
      )}
    </LayoutTodos>
  );
};
