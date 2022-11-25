import { FC, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Header } from "../../components";
import { motion } from "framer-motion";
import { ErrorDisplay } from "../components/ErrorDisplay";
import {useAuthStore} from "../../hooks/useAuthStore"

type props = {
  children: JSX.Element | JSX.Element[];
  typePage: string;
  titlePage: string;
  subTitlePage?: string;
};

export const LayoutAuth: FC<props> = ({
  children,
  typePage,
  titlePage,
  subTitlePage,
}): JSX.Element => {

  const {startCleanErrorMessage } = useAuthStore()



  useEffect(() => {
    window.scrollTo(0, 0);
    startCleanErrorMessage();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-start  items-center ">
        {typePage === "auth" ? (
          <>
            <Header>
              <NameApp />
            </Header>
            <div className="w-full min-h-screen standalone:mt-28 mt-20 flex justify-center items-start  md:justify-around  md:pt-32 lg:px-72">
              <div className="hidden md:block mt-12">
                <img
                  className="md:w-72 lg:w-full"
                  src="/app-images/person-working2.png"
                  alt="4780831"
                />
              </div>
              <motion.div
                {...animationProps}
                className="pb-8 bg-white dark:bg-neutral-800 rounded-xl w-80 md:w-96 flex flex-col items-center justify-center mt-6 shadow-md"
              >
                <UserCircleIcon className="h-16 w-16 mt-4 mb-2 text-center text-gray-700 dark:text-gray-300" />

                <h3 className="text-gray-600 text-xl font-bold dark:text-gray-300">
                  {titlePage}
                </h3>

                <h3
                  className={`${
                    subTitlePage ? "block mt-4" : "hidden"
                  } text-gray-600 text-md font-normal dark:text-gray-400 `}
                >
                  {subTitlePage}
                </h3>

                <div className="mt-4">{children}</div>
                <ErrorDisplay />
              </motion.div>
            </div>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
      <Footer />
    </>
  );
};

const Footer: FC = (): JSX.Element => {
  return (
    <div className=" w-full px-2 py-4 bg-inherit font-normal ">
      <p className="text-center dark:text-gray-600 text-gray-400">
        Copyright &copy; Carlos Cárcamo &#183; {new Date().getFullYear()}
      </p>
    </div>
  );
};

const NameApp: FC = (): JSX.Element => {
  return (
    <h3 className="text-white text-opacity-90 font-semibold text-2xl font-Courgette">
      Todoist
    </h3>
  );
};

const animationProps = {
  initial: { rotateY: 180 },
  animate: { rotateY: 360, transition: { duration: 0.5 } },
};
