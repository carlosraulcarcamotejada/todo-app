import { FC } from "react";

type props = {
  showError: boolean;
  isErrorOnTextField: boolean | "" | undefined;
  displayNameTextField: string;
  nameTextField: string;
  valueTextField: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  typeField: "text" | "password";
  revealPassword: "text" | "password";
};

export const Input: FC<props> = ({
  isErrorOnTextField,
  showError,
  displayNameTextField,
  typeField,
  nameTextField,
  valueTextField,
  handleBlur,
  handleChange,
  revealPassword,
}): JSX.Element => {
  return (
    <input
      className={`peer placeholder-transparent h-11 m-1 w-72 md:w-80 ${
        showError && isErrorOnTextField
          ? "border border-rose-400 focus:border-2 focus:border-rose-400 "
          : ""
      }`}
      autoComplete="off"
      required
      type={typeField === "text" ? "text" : revealPassword}
      placeholder={displayNameTextField}
      name={nameTextField}
      value={valueTextField}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
