import { FC, useEffect } from "react";
import { useTodosStore } from "../../hooks";
import { Navbar } from "../components";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const LayoutTodos: FC<props> = ({ children }): JSX.Element => {
  const { startLoadingTodos } = useTodosStore();

  useEffect(() => {
    startLoadingTodos();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col">
      <div>{children}</div>
      <Navbar />
    </div>
  );
};
