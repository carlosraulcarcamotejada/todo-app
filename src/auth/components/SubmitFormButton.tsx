import { FC } from "react";
import { Spinner } from "../../components";
import { useAuthStore } from "../../hooks/useAuthStore";

type props = {
  displayedMessage: string;
  enableButton: boolean;
};

export const SubmitFormButton: FC<props> = ({
  displayedMessage,
  enableButton,
}): JSX.Element => {
  const { status } = useAuthStore();

  return (
    <button
      disabled={enableButton || status === "checking"}
      className="transition-all duration-200 rounded-md w-full h-11 mt-4 py-2 px-14 hover:shadow
          font-semibold text-opacity-90 dark:text-opacity-80  text-white text-lg
          bg-gradient-to-r from-sky-400 to-indigo-400 disabled:cursor-not-allowed
          hover:from-sky-500 hover:to-indigo-500
          active:from-sky-600 active:to-indigo-600
          active:scale-95
          disabled:from-sky-400/40 disabled:to-indigo-400/40 disabled:text-opacity-40 disabled:shadow-none disabled:scale-100
          "
      type="submit"
    >
      {status === "checking" ? (
        <Spinner size={25} opacityLevel={70} />
      ) : (
        <>{displayedMessage}</>
      )}
    </button>
  );
};
