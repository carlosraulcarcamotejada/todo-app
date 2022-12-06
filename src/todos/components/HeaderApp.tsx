import { FC } from "react";

type props = {
  children: JSX.Element | JSX.Element[];
  height?: number;
};

export const HeaderApp: FC<props> = ({
  children,
  height = 36,
}): JSX.Element => {
  return (
    <div
      className={`flex shadow-md text-white items-center justify-start w-full h-${height}
     fixed top-0 right-0 rounded-b-3xl bg-teal-500`}
    >
      {children}
    </div>
  );
};
