import { FC, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useAuthStore } from "../hooks/useAuthStore";

type TextFieldProps = {
  className?: string;
  disableFloatingLabel?: true;
  errorText?: string | undefined;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  nameTextField: string;
  placeholder: string;
  showError?: true;
  touchedTextField: boolean | undefined;
  typeField?: "text" | "password";
  valueTextField: string;
};

type InputProps = {
  className: string;
  disableFloatingLabel?: boolean;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  isErrorOnTextField: boolean | "" | undefined;
  nameTextField: string;
  placeholder: string;
  revealPassword: "text" | "password";
  showError?: boolean;
  typeField: "text" | "password";
  valueTextField: string;
};

type FloatingLabelInputProps = {
  isErrorOnTextField: boolean | "" | undefined;
  nameTextField: string;
  placeholder: string;
  showError: boolean;
};

type ToggleReavealPasswordProps = {
  revealPassword: string;
  toggleRevealPassword: () => void;
  valuePasswordField: string;
};

type ShowErrorMessageInputProps = {
  errorTextField: string | undefined;
  isErrorOnTextField: boolean | "" | undefined;
};

export const TextField: FC<TextFieldProps> = ({
  className = "",
  disableFloatingLabel = false,
  errorText,
  handleBlur,
  handleChange,
  nameTextField,
  placeholder,
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
    <div className="h-22 w-80 pb-24 relative">
      <Input
        className={className}
        disableFloatingLabel={disableFloatingLabel}
        handleBlur={handleBlur}
        handleChange={handleChange}
        isErrorOnTextField={isErrorOnTextField}
        nameTextField={nameTextField}
        placeholder={placeholder}
        revealPassword={revealPassword}
        showError={showError}
        typeField={typeField}
        valueTextField={valueTextField}
      />

      {typeField === "password" && (
        <ToggleReavealPassword
          revealPassword={revealPassword}
          toggleRevealPassword={toggleRevealPassword}
          valuePasswordField={valueTextField}
        />
      )}

      {!disableFloatingLabel && (
        <FloatingLabelInput
          isErrorOnTextField={isErrorOnTextField}
          nameTextField={nameTextField}
          placeholder={placeholder}
          showError={showError}
        />
      )}

      {showError && (
        <ShowErrorMessageInput
          errorTextField={errorText}
          isErrorOnTextField={isErrorOnTextField}
        />
      )}
    </div>
  );
};

const ToggleReavealPassword: FC<ToggleReavealPasswordProps> = ({
  revealPassword,
  toggleRevealPassword,
  valuePasswordField,
}): JSX.Element => {
  const { status } = useAuthStore();

  return (
    <div
      className={`group h-12 w-12 absolute flex justify-center items-center top-2 right-0.5 
        ${valuePasswordField.length === 0 ? "hidden" : ""}
        ${status === "checking" ? "pointer-events-none" : ""}
        `}
      onClick={toggleRevealPassword}
    >
      <span
        className={`w-10 h-10 p-2 rounded-full group-hover:bg-neutral-100 group-active:bg-neutral-200 dark:text-neutral-400
      dark:group-hover:bg-neutral-600 dark:group-active:bg-neutral-600  text-neutral-500 active:scale-90 transition-all duration-200 
      ${
        status === "checking"
          ? "pointer-events-none text-neutral-400/70 dark:text-neutral-600/70 group-hover:bg-transparent"
          : ""
      }
      `}
      >
        {revealPassword === "password" ? <EyeIcon /> : <EyeSlashIcon />}
      </span>
    </div>
  );
};

const Input: FC<InputProps> = ({
  className,
  disableFloatingLabel,
  handleBlur,
  handleChange,
  nameTextField,
  placeholder,
  revealPassword,
  typeField,
  valueTextField,
}): JSX.Element => {
  const { status } = useAuthStore();
  return (
    <input
      className={`${className}
      peer h-14 my-1 w-80 shadow-sm focus:shadow-lg transition-all duration-150 text-neutral-700 text-lg
      rounded-2xl bg-white  border-none dark:focus:shadow-lg dark:focus:shadow-neutral-100/30
      ${!disableFloatingLabel ? `placeholder-transparent` : ``} 
      dark:bg-neutral-700 dark:text-neutral-100 dark:focus:bg-neutral-700
      disabled:bg-neutral-100/50 disabled:text-neutral-500/50
      disabled:dark:bg-neutral-700/50 disabled:dark:text-neutral-500/50
      ${status === "checking" ? `pointer-events-none` : ``}
      `}
      autoComplete="off"
      disabled={status === "checking"}
      name={nameTextField}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      type={typeField === "text" ? "text" : revealPassword}
      value={valueTextField}
    />
  );
};

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
  isErrorOnTextField,
  nameTextField,
  placeholder,
  showError,
}): JSX.Element => {
  const { status } = useAuthStore();

  return (
    <label
      className={`peer-focus:bg-transparent bg-transparent block absolute rounded-sm
      peer-placeholder-shown:text-base pointer-events-none transition-all duration-200 peer-focus:px-1 px-1
      peer-placeholder-shown:top-5 -left-0.5 peer-focus:-left-0.5 peer-placeholder-shown:left-2 peer-focus:-top-4 -top-4 text-sm peer-focus:text-sm
      ${
        showError && isErrorOnTextField
          ? `text-rose-400 peer-focus:text-rose-400`
          : `text-neutral-400 peer-focus:text-teal-500`
      }     
      ${
        status === "checking"
          ? `text-neutral-400/50 dark:text-neutral-500/50`
          : ``
      }
    `}
      htmlFor={nameTextField}
    >
      {placeholder}
    </label>
  );
};

const ShowErrorMessageInput: FC<ShowErrorMessageInputProps> = ({
  errorTextField,
  isErrorOnTextField,
}): JSX.Element => {
  return (
    <>
      {isErrorOnTextField && (
        <p className="ml-1 -mt-1 h-5 text-rose-400 text-sm">{errorTextField}</p>
      )}
    </>
  );
};
