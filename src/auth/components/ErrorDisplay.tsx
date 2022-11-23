import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";



export const ErrorDisplay: FC = (): JSX.Element => {

  const { errorMessage } = useAuthStore();


  return (
    <div
      className={`${errorMessage?'flex':'hidden'}  w-72 md:w-80 rounded-sm align-middle h-12 py-2 mt-6  bg-rose-300/30 border border-rose-400/40
       justify-center items-center`}
    >
      <span className="text-rose-400 text-sm font-medium ">{errorMessage}</span>
    </div>
  );
};
