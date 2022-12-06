import { FC } from "react";
import { AppRouter } from "./router/AppRouter";

export const TodoistApp: FC = (): JSX.Element => {
  return (
    <div className="select-none antialiased bg-neutral-100 dark:bg-neutral-900">
      <AppRouter />
    </div>
  );
};
