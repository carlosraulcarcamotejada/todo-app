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
    <div>
      <button
        disabled={enableButton}
        className="rounded-md transition-all duration-100 w-full mt-4 py-2 px-6 shadow-md font-semibold text-white text-lg 
            bg-gradient-to-r from-green-leaf to-green-leaf-light
            enabled:hover:shadow-lg
            enabled:active:bg-emerald-600 active:scale-95 
            disabled:bg-gradient-to-r disabled:from-green-leaf/40 disabled:to-green-leaf-light/40 disabled:shadow-none
            disabled:scale-100 disabled:cursor-not-allowed disabled:text-white/70"
        type="submit"
      >
        {displayedMessage}
      </button>
    </div>
  );
};
