import { FC } from "react";

type props = {
  displayedMessage: string;
  enableButton: boolean;
};

export const SubmitFormButton: FC<props> = ({
  displayedMessage,
  enableButton,
}): JSX.Element => {
  return (
    <button
      disabled={enableButton}
      className="transition-all duration-200 rounded-md w-full mt-4 py-2 px-14 hover:shadow
          font-semibold text-opacity-90 dark:text-opacity-80  text-white text-lg
          bg-gradient-to-r from-sky-400 to-indigo-400 disabled:cursor-not-allowed
          hover:from-sky-500 hover:to-indigo-500
          active:from-sky-600 active:to-indigo-600
          active:scale-95
          disabled:from-sky-400/40 disabled:to-indigo-400/40 disabled:text-opacity-40 disabled:shadow-none disabled:scale-100
          "
      type="submit"
    >
      <span className="">{displayedMessage}</span>
    </button>
  );
};
