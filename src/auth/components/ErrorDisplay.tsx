import { FC } from "react";

type props = {
  errorMessage: string | undefined;
};

export const ErrorDisplay: FC<props> = ({ errorMessage }): JSX.Element => {
  if (!errorMessage) return <></>;

  return (
    <div
      className="w-72 rounded-sm align-middle h-12 py-2 mt-6 font-medium bg-rose-300/30 border border-rose-400/50
     text-rose-400 text-sm flex justify-center items-center"
    >
      <span>{errorMessage}</span>
    </div>
  );
};
