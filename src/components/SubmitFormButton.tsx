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
        className="rounded-md transition-all duration-300 text-lg bg-green-leaf
            w-full mt-4 py-2 px-6 text-white shadow-md hover:shadow-lg font-semibold hover:bg-emerald-600
            active:bg-emerald-600 active:scale-95 disabled:bg-emerald-500/40 disabled:shadow-none
             disabled:scale-100 disabled:cursor-not-allowed disabled:text-white/70"
        type="submit"
      >
        {displayedMessage}
      </button>
    </div>
  );
};
