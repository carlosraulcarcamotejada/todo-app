import { FC, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { ErrorDisplay } from "../components/ErrorDisplay";
import { useAuthStore } from "../../hooks/useAuthStore";
import { Header } from "../components/Header";

type props = {
  children: JSX.Element | JSX.Element[];
  typePage: string;
  titlePage?: string;
  subTitlePage?: string;
};

export const LayoutAuth: FC<props> = ({
  children,
  typePage,
  titlePage,
  subTitlePage,
}): JSX.Element => {
  const { startCleanErrorMessage } = useAuthStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    startCleanErrorMessage();
  }, []);

  return (
    <div className="relative">
      <Header />
      <div className="h-screen w-full">
        {typePage === "auth" ? (
          <div className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-t-3xl absolute top-14">
            <div className="flex flex-col justify-center items-center">
              <UserCircleIcon className="h-16 w-16 mt-4 text-center text-gray-700 dark:text-gray-300" />
              <h3 className="text-gray-600 text-xl font-bold dark:text-gray-300 mb-4">
                {titlePage}
              </h3>

              {subTitlePage && (
                <h3 className="block mt-4 mb-2 text-gray-600 text-md font-normal dark:text-gray-400">
                  {subTitlePage}
                </h3>
              )}
              {children}
              <ErrorDisplay />
            </div>
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};

const NameApp: FC = (): JSX.Element => {
  return (
    <h1
      className="text-white text-center text-opacity-90 
    font-semibold text-2xl font-Courgette"
    >
      Todoist
    </h1>
  );
};

const animationProps = {
  initial: { rotateY: 180 },
  animate: { rotateY: 360, transition: { duration: 0.5 } },
};
