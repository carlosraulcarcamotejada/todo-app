import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { HeaderApp } from "../components";
import { LayoutTodos } from "../layout/LayoutTodos";

export const HomePage: FC = (): JSX.Element => {
  const { user } = useAuthStore();

  return (
    <LayoutTodos>
     <HeaderApp />
    </LayoutTodos>
  );
};
