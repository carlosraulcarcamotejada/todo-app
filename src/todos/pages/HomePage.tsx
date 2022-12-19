import { FC } from "react";
import { useAuthStore, useTodosStore } from "../../hooks";
import { HeaderApp, TodayTodoGoals, TodoScreen } from "../components";

import { TodoCards } from "../components/TodoCards";
import { LayoutContent } from "../layout";

export const HomePage: FC = (): JSX.Element => {
  const { activeTodo } = useTodosStore();

  return (
    <>
      <HeaderApp>
        <HomeHeader />
      </HeaderApp>

      <LayoutContent>
        {activeTodo ? (
          <TodoScreen />
        ) : (
          <>
            <TodoCards />
            <TodayTodoGoals />
          </>
        )}
      </LayoutContent>
    </>
  );
};

const HomeHeader: FC = (): JSX.Element => {
  const userUrlImage =
    "https://yt3.ggpht.com/ytc/AMLnZu-fRDgqki18U5Qd9mEzIUW_1JnPLbXE7hJ5WjEpnw=s108-c-k-c0x00ffffff-no-rj";
  const { pendingTodos } = useTodosStore();
  const {
    user: { name },
  } = useAuthStore();
  return (
    <div className="flex items-center justify-evenly pt-10 standalone:pt-14">
      <div className="">
        <h2 className="text-2xl mb-1 font-semibold">
          HI! {name || "User name"}
        </h2>
        <p className="text-md ">There are {pendingTodos} things to do... </p>
      </div>
      <div className="pl-22 flex justify-end">
        <img
          className="rounded-full w-14 h-14 border-2 border-neutral-300"
          src={userUrlImage}
          alt=""
        />
      </div>
    </div>
  );
};
