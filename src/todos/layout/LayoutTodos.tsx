import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { Navbar } from "../components";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const LayoutTodos: FC<props> = ({ children }): JSX.Element => {
  const {} = useAuthStore();

  return (
    <div className=" min-h-screen flex flex-col">
      <div>{children}</div>
      <Navbar />
    </div>
  );
};
