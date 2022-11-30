import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { NavbarBottom } from "../components";

type props = {
  children: JSX.Element | JSX.Element[];
};

export const LayoutTodos: FC<props> = ({ children }): JSX.Element => {
  const { startLogout } = useAuthStore();

  return (
    <div className="">
        {children}
      <button
        onClick={startLogout}
        className="h-10 w-28 bg-gradient-to-tr from-teal-400/70 rounded-md shadow-md dark:text-gray-200 
     to-indigo-400/70 text-neutral-700 font-semibold hover:shadow-lg hover:from-teal-500/70 hover:to-indigo-500/70 
     active:from-teal-600/70 active:to-indigo-600/70 active:scale-95 transition-all duration-150"
        type="button"
      >
        Log out
      </button>
    
      <NavbarBottom />
    </div>
  );
};
