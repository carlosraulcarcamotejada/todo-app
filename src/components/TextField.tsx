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
  variant?: "outlined" | "filled" | "standard";
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
  variant: "outlined" | "filled" | "standard";
};

type FloatingLabelInputProps = {
  isErrorOnTextField: boolean | "" | undefined;
  nameTextField: string;
  placeholder: string;
  showError: boolean;
  variant: "outlined" | "filled" | "standard";
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
  variant = "outlined",
}): JSX.Element => {
  const isErrorOnTextField = errorText && touchedTextField;

  const [revealPassword, setRevealPassword] = useState<"text" | "password">(
    "password"
  );

  const toggleRevealPassword = () => {
    setRevealPassword(revealPassword === "password" ? "text" : "password");
  };

  return (
    <div className="h-22 pb-24 relative">
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
        variant={variant}
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
          variant={variant}
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
  isErrorOnTextField,
  nameTextField,
  placeholder,
  revealPassword,
  showError,
  typeField,
  valueTextField,
  variant,
}): JSX.Element => {
  const { status } = useAuthStore();
  return (
    <input
      className={`${className}
      peer h-14 my-1 w-72 md:w-80 text-neutral-700  border-neutral-800/70  dark:border-neutral-200/70
      ${variant === "outlined" ? `focus:border-2 border ` : ``}
      ${
        variant === "filled"
          ? `bg-neutral-200/40 hover:bg-neutral-200/30 dark:hover:bg-neutral-500/40 border-b-2 focus:border-b-2 border-r-0 border-l-0 border-t-0 rounded-t-md rounded-b-none pt-5 `
          : ``
      } 
      ${variant === "standard" ? `border-b focus:border-b-2 border-r-0 border-l-0 border-t-0 bg-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent pt-8 pl-1` : ``} 
      ${!disableFloatingLabel ? `placeholder-transparent` : ``} 
      ${
        showError && isErrorOnTextField
          ? `border-rose-400  focus:border-rose-400 text-rose-400 dark:text-rose-400 hover:border-rose-400`
          : `border-neutral-300 focus:border-sky-500 dark:border-neutral-900 hover:border-neutral-300`
      }  
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
      required
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
  variant,
}): JSX.Element => {
  const { status } = useAuthStore();

  return (
    <label
      className={`peer-focus:bg-transparent bg-transparent block absolute rounded-sm
      peer-placeholder-shown:text-base pointer-events-none transition-all duration-200 peer-focus:px-1 px-1
      ${
        variant === "outlined"
          ? `peer-placeholder-shown:top-5 -left-0.5 peer-focus:-left-0.5 peer-placeholder-shown:left-2 peer-focus:-top-4 -top-4 text-sm peer-focus:text-sm`
          : ``
      }
      ${
        variant === "filled"
          ? `peer-placeholder-shown:top-5 left-2 peer-focus:left-2 peer-placeholder-shown:left-2 peer-focus:top-1.5 top-1.5 text-sm peer-focus:text-sm`
          : ``
      }
      ${variant === "standard" ? `peer-placeholder-shown:top-8 peer-focus:top-2.5 top-2.5 text-sm peer-focus:text-sm` : ``}
      
      
      ${
        showError && isErrorOnTextField
          ? `text-rose-400 peer-focus:text-rose-400`
          : `text-neutral-400 peer-focus:text-sky-400`
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
