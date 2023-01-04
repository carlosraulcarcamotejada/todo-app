import { FC } from "react";
import {
  CalendarDaysIcon,
  PlusIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useUiStore } from "../../hooks";
import { AnimatePresence, motion } from "framer-motion";
import { ModalAddTodo } from ".";

export const Navbar: FC = (): JSX.Element => {
  return (
    <div className="flex fixed w-full p-2 shadow-md bottom-0 h-20 bg-white dark:bg-neutral-800 rounded-tl-3xl rounded-tr-3xl">
      <div className="flex relative justify-around items-center w-full">
        <NavItem
          ActiveIcon={HomeIconSolid}
          InactiveIcon={HomeIcon}
          path="/home"
          displayPath="Home"
        />

        <NavItem
          ActiveIcon={CalendarDaysIconSolid}
          InactiveIcon={CalendarDaysIcon}
          path="/page2"
          displayPath="Calendar"
        />

        <FAB />

        <NavItem
          ActiveIcon={UserCircleIconSolid}
          InactiveIcon={UserCircleIcon}
          path="/userpage"
          displayPath="User"
        />

        <NavItem
          ActiveIcon={Cog6ToothIconSolid}
          InactiveIcon={Cog6ToothIcon}
          path="/settingpage"
          displayPath="Settings"
        />
      </div>
    </div>
  );
};

const FAB: FC = (): JSX.Element => {
  const { startToggleModal, isOpenModal } = useUiStore();

  return (
    <>
      <div className="flex relative -top-10 justify-center items-center rounded-full">
        <button
          onClick={startToggleModal}
          className="h-16 w-16 p-2.5 shadow-md active:shadow-sm flex justify-center items-center font-extrabold 
        rounded-full ring-0 border-none text-neutral-100 transition-all duration-200 bg-teal-500 active:bg-teal-600 active:scale-90 active:p-4"
          type="button"
        >
          <PlusIcon className="h-8 w-8" />
        </button>
      </div>

      <AnimatePresence>{isOpenModal && <ModalAddTodo />}</AnimatePresence>
    </>
  );
};

type NavItemProps = {
  ActiveIcon: React.ElementType;
  InactiveIcon: React.ElementType;
  path: string;
  displayPath: string;
};

const NavItem: FC<NavItemProps> = ({
  ActiveIcon,
  InactiveIcon,
  path,
  displayPath,
}): JSX.Element => {
  const animationProps = {
    animate: { color: "rgb(20 184 166)"},
    transition: { duration: 0.3 },
  };

  return (
    <NavLink
      className="h-8 w-14 ring-0 border-none flex justify-center items-center 
      active:scale-90 transition-all duration-200 "
      to={path}
    >
      {({ isActive }) => {
        return isActive ? (
          <div className="flex flex-col">
            <ActiveIcon
              {...animationProps}
              className="h-8 w-14 mt-2 text-teal-500 active:text-teal-700"
            />
            <motion.span className="flex justify-center ">
              <motion.p
                {...animationProps}
                className="text-xs text-center font-bold text-white dark:text-neutral-800"
              >
                {displayPath}
              </motion.p>
            </motion.span>
          </div>
        ) : (
          <InactiveIcon
            className="h-8 w-14 mb-2  text-neutral-700/70 dark:text-neutral-200/70
           active:text-neutral-800/70 active:dark:text-neutral-300/70 active:scale-90 
           transition-all duration-200"
          />
        );
      }}
    </NavLink>
  );
};
