import { FC } from "react";
import { Spinner } from "../../components";

export const LoadingPage: FC = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 h-screen ">
      <Spinner />
    </div>
  );
};
