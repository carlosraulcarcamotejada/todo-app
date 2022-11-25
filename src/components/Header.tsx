import { FC } from "react";

type props = { children: JSX.Element | JSX.Element[] };

export const Header: FC<props> = ({ children }): JSX.Element => {
  return (
    <header
      className="standalone:pt-safe-top standalone:pb-4 py-2 fixed z-10 top-0 right-0 w-full bg-gradient-to-r from-emerald-400 to-indigo-400 flex justify-center items-center shadow-sm
      dark:from-emerald-600 dark:to-indigo-600
      "
    >
      <div className="mt-2">
      {children}
      </div>
    </header>
  );
};
