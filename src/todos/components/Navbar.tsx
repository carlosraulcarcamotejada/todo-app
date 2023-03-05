import { FC, useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import { Modal, ModalAddTodo } from ".";

export const Navbar: FC = (): JSX.Element => {
  return (
    <div className="sticky z-50">
      <div className="flex fixed right-0 w-full p-2 shadow-md bottom-0 h-20 bg-white dark:bg-neutral-800 rounded-tl-3xl rounded-tr-3xl">
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
    </div>
  );
};

const FAB: FC = (): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <motion.div
      className="sticky bottom-0 z-50 transition-all duration-500"
    >
      <div
        className={`-top-10 flex relative justify-center items-center rounded-full z-50`}
      >
        <motion.button
          disabled={isOpenModal}
          onClick={() => {
            setIsOpenModal(true);
          }}
          className={`h-16 w-16 p-2.5 shadow-md active:shadow-sm flex justify-center items-center font-extrabold 
          rounded-full ring-0 border-none  transition-all duration-200 bg-teal-500
         active:bg-teal-600 active:scale-90 active:p-4 ${
           isOpenModal
             ? "disabled:bg-teal-900 active:scale-100 text-neutral-400"
             : "text-neutral-100"
         }`}
          type="button"
        >
          <PlusIcon className="h-8 w-8" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpenModal && (
          <Modal
            ScreenModal={<ModalAddTodo functionToCloseModal={setIsOpenModal} />}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </AnimatePresence>
    </motion.div>
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
  return (
    <NavLink
      className="h-14 w-14  first:mr-4  last:ml-4 ring-0 border-none flex justify-center items-center "
      to={path}
    >
      {({ isActive }) => {
        return isActive ? (
          <motion.div className="flex flex-col b">
            <ActiveIcon className="h-8 w-14 mt-2 text-teal-500 active:text-teal-700" />
            <motion.span className="flex justify-center ">
              <motion.p className="text-xs text-center font-bold text-teal-500">
                {displayPath}
              </motion.p>
            </motion.span>
          </motion.div>
        ) : (
          <motion.div className="flex flex-col">
            <InactiveIcon
              className="h-8 w-14 mt-2  text-neutral-600/70 dark:text-neutral-200/70
             active:text-neutral-800/70 active:dark:text-neutral-300/70 active:scale-90 
             transition-all duration-200"
            />
            <motion.span className="flex justify-center">
              <motion.p className="text-xs text-center font-bold dark:text-neutral-200/70 text-neutral-600/70">
                {displayPath}
              </motion.p>
            </motion.span>
          </motion.div>
        );
      }}
    </NavLink>
  );
};
