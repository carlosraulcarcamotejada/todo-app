import { FC } from "react";
import { Spinner } from "../../components";
import { useAuthStore } from "../../hooks/useAuthStore";

type props = {
  displayedMessage: string;
  isValidForm: boolean;
};

export const SubmitFormButton: FC<props> = ({
  displayedMessage,
  isValidForm,
}): JSX.Element => {
  const { status } = useAuthStore();

  const enableButton = status === "checking";

  return (
    <button
      disabled={isValidForm || enableButton}
      className="transition-all duration-200 rounded-2xl  w-full h-11 mt-4 py-2 px-14 
          font-semibold text-opacity-90 dark:text-opacity-80  text-white text-lg 
          disabled:cursor-not-allowed 
          bg-teal-500 active:bg-teal-600 
          shadow-lg shadow-teal-500/50
          active:shadow-2xl active:shadow-teal-500/50
          hover:shadow-2xl hover:shadow-teal-500/40
          active:scale-95
          disabled:bg-teal-500/40
          disabled:text-opacity-40 disabled:shadow-none disabled:scale-100"
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
