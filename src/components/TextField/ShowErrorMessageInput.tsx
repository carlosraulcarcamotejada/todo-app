import { FC } from "react";

type props = {
  isErrorOnTextField: boolean | "" | undefined;
  errorTextField: string | undefined;
};

export const ShowErrorMessageInput: FC<props> = ({
  isErrorOnTextField,
  errorTextField,
}): JSX.Element => {
  return (
    <>
      {isErrorOnTextField && (
        <p className="ml-1 h-5 text-rose-400 text-sm">{errorTextField}</p>
      )}
    </>
  );
};
