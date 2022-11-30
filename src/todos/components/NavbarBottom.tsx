import { FC } from "react";
import { CalendarDaysIcon, PlusIcon, UserCircleIcon, Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export const NavbarBottom: FC = (): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="flex fixed w-full bottom-0 h-22 bg-none rounded-tl-3xl rounded-tr-3xl">
      <div className="flex relative justify-between h-full w-full">

        <div className="pt-6 flex justify-evenly bg-white dark:bg-gray-800 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl w-40">
          <HomeIcon  onClick={() => navigate("/")} className={`h-8 w-8 text-neutral-700/70 mr-7 ml-4 dark:text-neutral-200/70`} />
          <CalendarDaysIcon  onClick={() => navigate("/page2")} className={`h-8 w-8 text-neutral-700/70 dark:text-neutral-200/70`} />
        </div>

          <div className="bg-white dark:bg-gray-800 h-full w-16  flex justify-center relative">
            <FloatinButton />
          </div>
    

        <div className="pt-6 flex justify-evenly bg-white dark:bg-gray-800 rounded-tl-3xl rounded-br-3xl rounded-tr-3xl w-40">
          <UserCircleIcon onClick={() => navigate("/page3")} className={`h-8 w-8 text-neutral-700/70 dark:text-neutral-200/70`} />
          <Cog6ToothIcon  onClick={() => navigate("/page4")} className={`h-8 w-8 text-neutral-700/70 dark:text-neutral-200/70 ml-7 mr-4`} />
        </div>
      </div>
    </div>
  );
};

const FloatinButton: FC = (): JSX.Element => {
  return (
    <div className="h-20 w-20 absolute bg-neutral-100 dark:bg-neutral-900 -top-11   flex justify-center items-center rounded-full">
    <button
      className="h-16 w-16 p-2 flex justify-center items-center z-10 font-extrabold rounded-full text-neutral-100  bg-teal-500 active:bg-teal-600 active:scale-95"
      type="button"
    >
      <PlusIcon className="h-8 w-8 " />
    </button>
    </div>
  );
};
