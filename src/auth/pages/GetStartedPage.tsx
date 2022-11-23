import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutAuth } from "../layout/LayoutAuth";

export const GetStartedPage: FC = (): JSX.Element => {
  return (
    <LayoutAuth typePage="getstarted" titlePage="Get Started">
      <div className="flex min-h-screen w-full flex-col justify-around items-center ">
        <div className="-mt-20">
          <img
            className="w-72"
            src="/person-working.png"
            alt="person-working"
          />
        </div>
        <div className="-mt-56 md:-mt-96">
          <h3 className="text-2xl mb-4 text-center font-semibold text-gray-600 dark:text-gray-300">
            Welcome to Todoist
          </h3>
          <p className="text-gray-400 font-semibold text-md dark:text-gray-500">
            Let this app help you organize your tasks.
          </p>
        </div>

        <GetStartedButton />
      </div>
    </LayoutAuth>
  );
};

const GetStartedButton: FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="-mt-56 md:-mt-96">
      <button
        className="bg-gradient-to-l from-indigo-400 to-sky-400 w-56 text-opacity-80
            py-4 px-6 text-neutral-100 font-bold rounded-full shadow-sm hover:shadow-md active:scale-95
            hover:from-indigo-500 hover:to-sky-500
            active:from-indigo-600 active:to-sky-600"
        onClick={() => navigate("/auth/signin")}
      >
        Get Started
      </button>
    </div>
  );
};
