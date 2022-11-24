import { FC, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useAuthStore } from "../hooks/useAuthStore";

type TextFieldProps = {
  displayNameTextField: string;
  errorText?: string | undefined;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  nameTextField: string;
  showError?: boolean;
  touchedTextField: boolean | undefined;
  typeField?: "text" | "password";
  valueTextField: string;
};

type InputProps = {
  displayNameTextField: string;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  isErrorOnTextField: boolean | "" | undefined;
  nameTextField: string;
  revealPassword: "text" | "password";
  showError?: boolean;
  typeField: "text" | "password";
  valueTextField: string;
};

type LabelInputProps = {
  displayNameTextField: string;
  isErrorOnTextField: boolean | "" | undefined;
  nameTextField: string;
  showError: boolean;
};

type DivRevealTogglePasswordProps = {
  revealPassword: string;
  toggleRevealPassword: () => void;
  valuePasswordField: string;
};

type ShowErrorMessageInputProps = {
  errorTextField: string | undefined;
  isErrorOnTextField: boolean | "" | undefined;
};

export const TextField: FC<TextFieldProps> = ({
  displayNameTextField,
  errorText,
  handleBlur,
  handleChange,
  nameTextField,
  showError = false,
  touchedTextField,
  typeField = "text",
  valueTextField,
}): JSX.Element => {
  const isErrorOnTextField = errorText && touchedTextField;

  const [revealPassword, setRevealPassword] = useState<"text" | "password">(
    "password"
  );

  const toggleRevealPassword = () => {
    setRevealPassword(revealPassword === "password" ? "text" : "password");
  };

  return (
    <div className="h-22 relative">
      <Input
        displayNameTextField={displayNameTextField}
        handleBlur={handleBlur}
        handleChange={handleChange}
        isErrorOnTextField={isErrorOnTextField}
        nameTextField={nameTextField}
        revealPassword={revealPassword}
        showError={showError}
        typeField={typeField}
        valueTextField={valueTextField}
      />

      {typeField === "password" && (
        <DivRevealTogglePassword
          revealPassword={revealPassword}
          toggleRevealPassword={toggleRevealPassword}
          valuePasswordField={valueTextField}
        />
      )}

      <LabelInput
        displayNameTextField={displayNameTextField}
        isErrorOnTextField={isErrorOnTextField}
        nameTextField={nameTextField}
        showError={showError}
      />

      {showError && (
        <ShowErrorMessageInput
          errorTextField={errorText}
          isErrorOnTextField={isErrorOnTextField}
        />
      )}
    </div>
  );
};

const DivRevealTogglePassword: FC<DivRevealTogglePasswordProps> = ({
  valuePasswordField,
  toggleRevealPassword,
  revealPassword,
}): JSX.Element => {
  const { status } = useAuthStore();

  return (
    <div
      className={`rounded-full h-10 w-10 p-2.5 text-neutral-500 absolute right-1 active:scale-90
          top-3 hover:bg-neutral-100 active:bg-neutral-200 transition-all duration-200
          dark:text-neutral-400 dark:hover:bg-neutral-600 dark:active:bg-neutral-700
          ${valuePasswordField.length === 0 ? "hidden" : ""}  ${
        status === "checking" ? "pointer-events-none text-neutral-400/70 dark:text-neutral-600/70" : ""
      }`}
      onClick={toggleRevealPassword}
    >
      {revealPassword === "password" ? <EyeIcon /> : <EyeSlashIcon />}
    </div>
  );
};

const Input: FC<InputProps> = ({
  displayNameTextField,
  handleBlur,
  handleChange,
  isErrorOnTextField,
  nameTextField,
  revealPassword,
  showError,
  typeField,
  valueTextField,
}): JSX.Element => {
  const { status } = useAuthStore();

  return (
    <input
      className={`peer placeholder-transparent h-12 mt-2 mb-1 w-72 md:w-80
      dark:bg-neutral-600 dark:text-neutral-100 dark:focus:bg-neutral-700
      dark:focus:border-neutral-600 dark:border-neutral-900
      dark:placeholder-transparent text-neutral-700
      focus:border-2 focus:border-neutral-400
      shadow-sm
      disabled:bg-neutral-100/50 disabled:text-neutral-500/50
      disabled:dark:bg-neutral-700/50 disabled:dark:text-neutral-500/50
      ${
        showError && isErrorOnTextField
          ? `border border-rose-400 focus:border-2 focus:border-rose-400 
            dark:border-rose-400 dark:focus:border-rose-400`
          : "border-neutral-300"
      }
      ${status === 'checking'?'pointer-events-none':''}
      `
    }
      autoComplete="off"
      name={nameTextField}
      disabled={status === "checking"}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={displayNameTextField}
      required
      type={typeField === "text" ? "text" : revealPassword}
      value={valueTextField}
    />
  );
};

const LabelInput: FC<LabelInputProps> = ({
  isErrorOnTextField,
  showError,
  displayNameTextField,
  nameTextField,
}): JSX.Element => {
  const { status } = useAuthStore();

  return (
    <label
      className={`bg-transparent 
      -left-0.5 block absolute text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-5 
      peer-focus:bg-transparent
      peer-focus:-left-0.5 
      peer-placeholder-shown:left-2 rounded-full
      pointer-events-none peer-focus:px-1 px-1 transition-all duration-200 peer-focus:text-sm peer-focus:-top-2.5 -top-2.5
                ${
                  showError && isErrorOnTextField
                    ? "text-rose-400 peer-focus:text-rose-400"
                    : "text-neutral-400 peer-focus:text-neutral-400"
                }
                
                ${
                  status === "checking"
                    ? "text-neutral-400/50 dark:text-neutral-500/50"
                    : ""
                }
                `}
      htmlFor={nameTextField}
    >
      {displayNameTextField}
    </label>
  );
};

const ShowErrorMessageInput: FC<ShowErrorMessageInputProps> = ({
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
