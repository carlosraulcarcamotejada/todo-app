import { FC } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { XCircleIcon } from "@heroicons/react/24/solid";



export const ErrorDisplay: FC = (): JSX.Element => {

  const { errorMessage } = useAuthStore();


  return (
    <div
      className={`${errorMessage?'flex':'hidden'} text-rose-400  w-72 md:w-80 rounded-sm align-middle h-12 py-2 mt-6  bg-rose-300/30 border border-rose-400/40
       justify-center items-center`}
    > 
      <span className="h-5 w-5 mr-2"> <XCircleIcon /> </span>
      <span className=" text-sm font-medium ">{errorMessage}</span>
    </div>
  );
};
