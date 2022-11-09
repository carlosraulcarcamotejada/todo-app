import { FC } from "react";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const LayoutAuth: FC<props> = ({ children }): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center ">
      <div className="w-full flex justify-center ">{children}</div>

      <div className=" w-full px-2 py-4 bg-inherit font-normal  bottom-0 absolute">
        <p className="text-center dark:text-gray-600 text-gray-400">
          Copyright &copy; Carlos Cárcamo &#183; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
