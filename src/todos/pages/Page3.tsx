import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { LayoutContent } from "../layout/LayoutContent";
import { LayoutTodos } from "../layout/LayoutTodos";

export const Page3: FC = (): JSX.Element => {
  const { user, startLogout } = useAuthStore();

  return (
    <LayoutTodos>
      <LayoutContent>
        <h1 className="text-neutral-800/70 dark:text-white">
          Welcome Back on Page 3 {user.name}
        </h1>
        <button
          onClick={startLogout}
          className="h-10 w-28 bg-gradient-to-tr from-teal-400/70 rounded-md shadow-md dark:text-gray-200 
     to-indigo-400/70 text-neutral-700 font-semibold hover:shadow-lg hover:from-teal-500/70 hover:to-indigo-500/70 
     active:from-teal-600/70 active:to-indigo-600/70 active:scale-95 transition-all duration-150"
          type="button"
        >
          Log out
        </button>
      </LayoutContent>
    </LayoutTodos>
  );
};
