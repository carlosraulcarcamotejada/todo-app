import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { LayoutContent } from "../layout";


export const Page4: FC = (): JSX.Element => {
  const { user } = useAuthStore();

  return (
    <LayoutContent>
      <h1 className="text-neutral-800/70 dark:text-white">
        Welcome Back on Page 4 {user.name}
      </h1>
    </LayoutContent>
  );
};
