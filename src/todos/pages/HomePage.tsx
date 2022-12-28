import { FC } from "react";
import { useTodosStore } from "../../hooks";
import { HeaderApp, TodoScreen, HomeHeader } from "../components";
import { TodoCards } from "../components/TodoCards";
import { LayoutContent } from "../layout";

export const HomePage: FC = (): JSX.Element => {
  const { activeTodo } = useTodosStore();
  return (
    <>
      <HeaderApp>
        <HomeHeader />
      </HeaderApp>

      {!activeTodo && <TodoCards />}
      <TodoScreen />
    </>
  );
};
