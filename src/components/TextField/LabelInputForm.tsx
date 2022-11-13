import { FC } from "react";

type props = {
  showError: boolean;
  isErrorOnTextField: boolean | "" | undefined;
  nameTextField: string;
  displayNameTextField: string;
};

export const LabelInputForm: FC<props> = ({
  isErrorOnTextField,
  showError,
  displayNameTextField,
  nameTextField,
}): JSX.Element => {
  return (
    <label
      className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-1.5 
      peer-focus:left-3.5 peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-slate-50  
      bg-white left-3.5 block absolute -top-1.5  text-sm peer-placeholder-shown:text-base  peer-placeholder-shown:top-3 
      peer-placeholder-shown:left-4
                ${
                  showError && isErrorOnTextField
                    ? "text-rose-400 peer-focus:text-rose-400"
                    : "text-gray-400 peer-focus:text-gray-400"
                }
                `}
      htmlFor={nameTextField}
    >
      {displayNameTextField}
    </label>
  );
};
