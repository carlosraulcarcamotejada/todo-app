import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutAuth } from "../layout/LayoutAuth";

export const GetStartedPage: FC = (): JSX.Element => {
  return (
    <LayoutAuth typePage="getstarted">
      <div
        className="w-full bg-neutral-100 dark:bg-neutral-900 
                    rounded-t-3xl absolute top-14"
      >
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-72 mt-10"
            src="/app-images/person-working.png"
            alt="person-working"
          />

          <div className="mt-4">
            <h3
              className="text-2xl mb-4 text-center font-semibold text-gray-600
                        dark:text-gray-300"
            >
              Welcome to Todoist
            </h3>
            <p className="text-gray-400 font-semibold text-md dark:text-gray-500">
              Let this app help you organize your tasks.
            </p>
          </div>
          <GetStartedButton />
        </div>
      </div>
    </LayoutAuth>
  );
};

const GetStartedButton: FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <button
      className="mb-5 mt-36 bg-teal-500 w-56 text-opacity-80 shadow-2xl shadow-teal-500/50 transition-all duration-150 
            py-4 px-6 text-white/90 font-bold rounded-3xl hover:shadow-2xl   hover:shadow-teal-500/40 active:scale-95 
            active:bg-teal-600 active:shadow-2xl active:shadow-teal-500/40"
      onClick={() => navigate("/auth/signin")}
    >
      Get Started
    </button>
  );
};
