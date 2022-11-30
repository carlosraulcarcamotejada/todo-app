import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { LayoutTodos } from "../layout/LayoutTodos";

export const Page2: FC = (): JSX.Element => {
  const { user } = useAuthStore();

  return (
    <LayoutTodos>
      <h1 className="text-neutral-800/70 dark:text-white">
        Welcome Back on Page 2 {user.user}
      </h1>
    </LayoutTodos>
  );
};
