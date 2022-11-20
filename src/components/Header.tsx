import { FC } from "react";

type props = { children: JSX.Element | JSX.Element[] };

export const Header: FC<props> = ({ children }): JSX.Element => {
  return (
    <header
      className="standalone:pt-safe-top standalone:py-2 py-3 fixed z-10 top-0 right-0 w-full bg-gradient-to-r from-emerald-400 to-indigo-400 flex justify-center items-center shadow-sm
      dark:from-green-600 dark:to-indigo-600
      "
    >
      {children}
    </header>
  );
};
