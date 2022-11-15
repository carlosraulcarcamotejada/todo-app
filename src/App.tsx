import { FC } from "react";
import { AppRouter } from "./router/AppRouter";

export const App: FC = (): JSX.Element => {
  return (
    <div
      className="min-h-screen select-none antialiased bg-gray-100 dark:bg-neutral-900"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <AppRouter />
    </div>
  );
};
