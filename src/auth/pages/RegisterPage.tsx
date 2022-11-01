import { FC } from "react";

export const RegisterPage: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-yellow-300  flex flex-col justify-start">
      <div className="flex flex-col justify-between items-center bg-sky-200 ">
        <div className="">
          <img
            className="w-72 "
            src="/person-working.png"
            alt="person-working"
          />
        </div>

        <div className="">
          <h3 className="text-3xl text-center">TO-DO's App</h3>
          <p className="text-gray-400 font-semibold text-md">
            Let this app help you organize your tasks.
          </p>
        </div>

        <div className="">
          <button className="bg-emerald-500 w-56 py-4 px-6 text-white font-bold rounded-full active:bg-emerald-500">
            GET STARTED
          </button>
        </div>

        <div className="w-full border-y-2 border-indigo-600  px-2 py-4 font-normal bg-green-100 dark:bg-gray-900 bottom-0">
          <p className="text-center dark:text-gray-500 text-gray-400">
            Copyright &copy; Carlos Cárcamo &#183; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};
