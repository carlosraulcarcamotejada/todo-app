import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutAuth } from "../layout/LayoutAuth";

export const GetStartedPage: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <LayoutAuth>
      <div className="min-h-fit mb-24 flex w-full flex-col justify-start items-center bg-inherit ">

        <img className="w-72 mt-6" src="/person-working.png" alt="person-working" />
        <div className="mt-12">
          <h3 className="text-2xl text-center font-semibold text-gray-600 dark:text-gray-300">
            TODO's App
          </h3>
          <p className="text-gray-400 font-semibold text-md dark:text-gray-500">
            Let this app help you organize your tasks.
          </p>
        </div>

        <button
          className="mt-8 bg-green-leaf  w-56 py-4 px-6 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:bg-emerald-600 
           active:bg-emerald-600 active:scale-95"
          onClick={() => navigate('/signin')}
        >
          GET STARTED
        </button>
      </div>
    </LayoutAuth>
  );
};
