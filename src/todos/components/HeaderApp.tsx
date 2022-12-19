import { FC } from "react";

type props = {
  children?: JSX.Element | JSX.Element[];
};

export const HeaderApp: FC<props> = ({ children }): JSX.Element => {
  return (
    <div
      className="shadow-md text-white w-full h-56
        rounded-b-3xl bg-teal-500 "
    >
      {children}
    </div>
  );
};
