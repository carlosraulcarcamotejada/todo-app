import { FC } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { titlePage, typePage } from "../types/pageType";

type props = {
  children: JSX.Element | JSX.Element[];
  typePage: typePage;
  titlePage: titlePage;
  subTitlePage?: string;
};

export const LayoutAuth: FC<props> = ({
  children,
  typePage,
  titlePage,
  subTitlePage,
}): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col justify-start md:justify-evenly items-center ">
      {typePage === "auth" ? (
        <div className="md:flex md:justify-between md:items-center ">
          <div className="hidden md:block md:mr-32 ">
            <img className="" src="/4780831.png" alt="4780831" />
          </div>
          <div className="pb-12  bg-white dark:bg-neutral-800 rounded-xl w-80 md:w-96 flex flex-col items-center justify-center mt-6 shadow-md ">
            <div className="flex justify-center items-center flex-col mb-4">
              <UserCircleIcon className="h-16 w-16 mt-4 mb-2 text-center  text-gray-700 dark:text-gray-300" />
              <div className="">
                <h3 className="text-gray-600 text-lg font-semibold dark:text-gray-300">
                  {titlePage}
                </h3>
              </div>
              <div className={`${subTitlePage ? "block mt-4" : "hidden"}`}>
                <h3 className="text-gray-600 text-md font-normal dark:text-gray-400">
                  {subTitlePage}
                </h3>
              </div>
            </div>
            <div className="">{children}</div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
      <Footer />
    </div>
  );
};

const Footer: FC = (): JSX.Element => {
  return (
    <div className=" w-full px-2 py-4 bg-inherit font-normal sm:absolute sm:bottom-0">
      <p className="text-center dark:text-gray-600 text-gray-400">
        Copyright &copy; Carlos Cárcamo &#183; {new Date().getFullYear()}
      </p>
    </div>
  );
};
