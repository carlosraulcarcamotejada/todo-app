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
          showError && errorPasswordField && touchedPasswordField
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
        className={`h-11 w-11 p-3 text-gray-500 absolute right-1 top-1 rounded-md ${
          valuePasswordField.length === 0 ? "hidden" : ""
        }`}
        onClick={toggleRevealPassword}
      >
        {revealPassword === "password" ? <EyeIcon /> : <EyeSlashIcon />}
      </div>
      <label
        className={`input-label-form
              ${
                showError && errorPasswordField && touchedPasswordField
                  ? "text-rose-400 peer-focus:text-rose-400"
                  : "text-gray-400 peer-focus:text-gray-400"
              }
              `}
        htmlFor={namePasswordField}
      >
        {displayNamePasswordField}
      </label>
      {showError && errorPasswordField && touchedPasswordField && (
        <p className="p-input-error-form">{errorPasswordField}</p>
      )}
    </>
  );
};
