import { FC, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

type props = {
  errorPasswordField: string | undefined;
  touchedPasswordField: boolean | undefined;
  valuePasswordField: string;
  namePasswordField: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  showError: boolean;
  displayNamePasswordField: string;
};

export const PasswordField: FC<props> = ({
  errorPasswordField,
  touchedPasswordField,
  valuePasswordField,
  namePasswordField,
  handleBlur,
  handleChange,
  showError,
  displayNamePasswordField,
}): JSX.Element => {
  const isErrorOnPasswordField = errorPasswordField && touchedPasswordField;

  const [revealPassword, setRevealPassword] = useState<"text" | "password">(
    "password"
  );

  const toggleRevealPassword = () => {
    setRevealPassword(revealPassword === "password" ? "text" : "password");
  };

  return (
    <>
      <input
        className={`peer input-form ${
          showError && isErrorOnPasswordField
            ? "border border-rose-400 focus:border-2 focus:border-rose-400"
            : ""
        }`}
        autoComplete="off"
        required
        placeholder={displayNamePasswordField}
        type={revealPassword}
        name={namePasswordField}
        value={valuePasswordField}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div
        className={`rounded-full h-10 w-10 p-2.5 text-gray-500 absolute right-1.5 active:scale-95
        top-1.5 hover:bg-gray-100 active:bg-gray-200 transition-all duration-100 
        ${
          valuePasswordField.length === 0 ? "hidden" : ""
        }`}
        onClick={toggleRevealPassword}
      >
        {revealPassword === "password" ? <EyeIcon /> : <EyeSlashIcon />}
      </div>
      <label
        className={`input-label-form
              ${
                showError && isErrorOnPasswordField
                  ? "text-rose-400 peer-focus:text-rose-400"
                  : "text-gray-400 peer-focus:text-gray-400"
              }
              `}
        htmlFor={namePasswordField}
      >
        {displayNamePasswordField}
      </label>
      {showError && isErrorOnPasswordField && (
        <p className="p-input-error-form">{errorPasswordField}</p>
      )}
    </>
  );
};
